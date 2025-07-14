export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      daily_questions: {
        Row: {
          correct_answer: number
          created_at: string
          date: string
          explanation: string | null
          id: string
          question: string
          theme: string
          unit: string | null
        }
        Insert: {
          correct_answer: number
          created_at?: string
          date: string
          explanation?: string | null
          id?: string
          question: string
          theme: string
          unit?: string | null
        }
        Update: {
          correct_answer?: number
          created_at?: string
          date?: string
          explanation?: string | null
          id?: string
          question?: string
          theme?: string
          unit?: string | null
        }
        Relationships: []
      }
      daily_responses: {
        Row: {
          accuracy: number
          answered_at: string
          daily_question_id: string
          id: string
          user_answer: number
          user_id: string
        }
        Insert: {
          accuracy: number
          answered_at?: string
          daily_question_id: string
          id?: string
          user_answer: number
          user_id: string
        }
        Update: {
          accuracy?: number
          answered_at?: string
          daily_question_id?: string
          id?: string
          user_answer?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "daily_responses_daily_question_id_fkey"
            columns: ["daily_question_id"]
            isOneToOne: false
            referencedRelation: "daily_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          username: string | null
        }
        Insert: {
          created_at?: string
          id: string
          username?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          username?: string | null
        }
        Relationships: []
      }
      question_views: {
        Row: {
          accuracy: number | null
          id: string
          question_id: string
          session_id: string | null
          user_answer: number | null
          user_id: string | null
          viewed_at: string
        }
        Insert: {
          accuracy?: number | null
          id?: string
          question_id: string
          session_id?: string | null
          user_answer?: number | null
          user_id?: string | null
          viewed_at?: string
        }
        Update: {
          accuracy?: number | null
          id?: string
          question_id?: string
          session_id?: string | null
          user_answer?: number | null
          user_id?: string | null
          viewed_at?: string
        }
        Relationships: []
      }
      quiz_questions: {
        Row: {
          correct_answer: number
          created_at: string
          explanation: string | null
          final_explanation: string | null
          id: string
          is_active: boolean | null
          priority: number | null
          question: string
          scheduled_date: string | null
          steps: Json | null
          theme: string
          type: string
          unit: string | null
          updated_at: string
        }
        Insert: {
          correct_answer: number
          created_at?: string
          explanation?: string | null
          final_explanation?: string | null
          id?: string
          is_active?: boolean | null
          priority?: number | null
          question: string
          scheduled_date?: string | null
          steps?: Json | null
          theme: string
          type?: string
          unit?: string | null
          updated_at?: string
        }
        Update: {
          correct_answer?: number
          created_at?: string
          explanation?: string | null
          final_explanation?: string | null
          id?: string
          is_active?: boolean | null
          priority?: number | null
          question?: string
          scheduled_date?: string | null
          steps?: Json | null
          theme?: string
          type?: string
          unit?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      temp_import: {
        Row: {
          correct_answer: string | null
          explanation: string | null
          question: string | null
          steps: string | null
          unit: string | null
          user_id: string | null
        }
        Insert: {
          correct_answer?: string | null
          explanation?: string | null
          question?: string | null
          steps?: string | null
          unit?: string | null
          user_id?: string | null
        }
        Update: {
          correct_answer?: string | null
          explanation?: string | null
          question?: string | null
          steps?: string | null
          unit?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      timed_quiz_sessions: {
        Row: {
          correct_answers: number
          created_at: string
          duration_seconds: number
          end_time: string | null
          id: string
          is_completed: boolean
          score: number
          start_time: string
          total_questions: number
          user_id: string | null
        }
        Insert: {
          correct_answers?: number
          created_at?: string
          duration_seconds?: number
          end_time?: string | null
          id?: string
          is_completed?: boolean
          score?: number
          start_time?: string
          total_questions?: number
          user_id?: string | null
        }
        Update: {
          correct_answers?: number
          created_at?: string
          duration_seconds?: number
          end_time?: string | null
          id?: string
          is_completed?: boolean
          score?: number
          start_time?: string
          total_questions?: number
          user_id?: string | null
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          correct_percentage: number
          id: string
          last_updated: string
          progress_data: Json | null
          questions_completed: number
          total_points: number
          user_id: string
          user_level: number
        }
        Insert: {
          correct_percentage?: number
          id?: string
          last_updated?: string
          progress_data?: Json | null
          questions_completed?: number
          total_points?: number
          user_id: string
          user_level?: number
        }
        Update: {
          correct_percentage?: number
          id?: string
          last_updated?: string
          progress_data?: Json | null
          questions_completed?: number
          total_points?: number
          user_id?: string
          user_level?: number
        }
        Relationships: []
      }
      user_quiz_scores: {
        Row: {
          accuracy: number
          created_at: string
          direct_final_answer: boolean
          hints_revealed_count: number
          id: string
          is_multi_step: boolean
          question_id: string
          skipped_steps: boolean
          used_hints: boolean
          user_id: string
        }
        Insert: {
          accuracy: number
          created_at?: string
          direct_final_answer?: boolean
          hints_revealed_count?: number
          id?: string
          is_multi_step?: boolean
          question_id: string
          skipped_steps?: boolean
          used_hints?: boolean
          user_id: string
        }
        Update: {
          accuracy?: number
          created_at?: string
          direct_final_answer?: boolean
          hints_revealed_count?: number
          id?: string
          is_multi_step?: boolean
          question_id?: string
          skipped_steps?: boolean
          used_hints?: boolean
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      timed_quiz_leaderboard: {
        Row: {
          correct_answers: number | null
          created_at: string | null
          id: string | null
          rank: number | null
          score: number | null
          total_questions: number | null
          username: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_quiz_progress: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_user_progress: {
        Args: Record<PropertyKey, never>
        Returns: {
          correct_percentage: number
          id: string
          last_updated: string
          progress_data: Json | null
          questions_completed: number
          total_points: number
          user_id: string
          user_level: number
        }
      }
      is_admin: {
        Args: Record<PropertyKey, never> | { user_id?: string }
        Returns: boolean
      }
      is_user_admin: {
        Args: { check_user_id?: string }
        Returns: boolean
      }
      update_quiz_progress: {
        Args: { p_progress_data: Json }
        Returns: Json
      }
      update_user_progress: {
        Args: { p_experience_points: number; p_completed_stage?: Json }
        Returns: {
          correct_percentage: number
          id: string
          last_updated: string
          progress_data: Json | null
          questions_completed: number
          total_points: number
          user_id: string
          user_level: number
        }
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
