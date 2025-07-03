
import { useState, useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

// Debounce helper function
function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  return useCallback((...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}

export function useQuizProgress() {
  const { user } = useAuth();
  const [quizProgress, setQuizProgress] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Use a ref to track if we've already loaded the data
  const initialized = useRef(false);
  // Use a ref to store the latest progress data to avoid stale closures
  const progressRef = useRef<any>({});
  
  // Function to load quiz progress
  const loadQuizProgress = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.rpc('get_quiz_progress');
      
      if (error) {
        console.error('Error loading quiz progress:', error);
        setError(error.message);
      } else {
        const progressData = data || {};
        setQuizProgress(progressData);
        progressRef.current = progressData;
      }
    } catch (err: any) {
      console.error('Unexpected error loading quiz progress:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Debounced save function
  const debouncedSave = useDebounce(async (progress: any) => {
    if (!user) return;

    const { error } = await supabase.rpc(
      'update_quiz_progress', 
      { p_progress_data: progress }
    );
    
    if (error) {
      console.error('Error saving quiz progress:', error);
      setError(error.message);
    }
  }, 500); // 500ms debounce
  
  // Load quiz progress once on component mount
  useEffect(() => {
    // Only load if not already initialized and user is available
    if (!initialized.current && user) {
      loadQuizProgress();
      initialized.current = true;
    } else if (!user) {
      // Reset when user logs out
      initialized.current = false;
      setQuizProgress({});
      progressRef.current = {};
      setLoading(false);
    }
  }, [user, loadQuizProgress]);
  
  // Use useCallback to prevent recreation of this function on each render
  const updateQuizProgress = useCallback(async (newProgress: any) => {
    try {
      // Merge with existing progress
      const updatedProgress = {
        ...progressRef.current,
        ...newProgress
      };
      
      // Update local state immediately for responsive UI
      setQuizProgress(updatedProgress);
      progressRef.current = updatedProgress;
      
      // Debounce the actual save
      debouncedSave(updatedProgress);
      
      return true;
    } catch (err: any) {
      console.error('Unexpected error updating quiz progress:', err);
      setError(err.message);
      return false;
    }
  }, [debouncedSave]);
  
  return {
    quizProgress,
    loading,
    error,
    updateQuizProgress,
    refreshProgress: loadQuizProgress
  };
}
