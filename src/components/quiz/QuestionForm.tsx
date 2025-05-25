
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Question, MultiStepQuestion, Step } from "@/components/types";
import { PlusCircle, X } from "lucide-react";
import { themes } from "@/data/themes";
import { generateId } from "@/utils/questionImporter";

interface QuestionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (question: Question | MultiStepQuestion) => void;
  initialQuestion?: Question | MultiStepQuestion;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  isOpen,
  onClose,
  onSave,
  initialQuestion
}) => {
  const [activeTab, setActiveTab] = useState<"simple" | "multistep">(
    initialQuestion ? initialQuestion.type : "simple"
  );
  
  // Simple question state
  const [simpleQuestion, setSimpleQuestion] = useState<Partial<Question>>({
    question: "",
    correctAnswer: undefined,
    unit: "",
    explanation: "",
    theme: "insolite",
    type: "simple"
  });
  
  // Multi-step question state
  const [multiQuestion, setMultiQuestion] = useState<Partial<MultiStepQuestion>>({
    question: "",
    steps: [{ question: "", correctAnswer: undefined, unit: "", explanation: "" }],
    finalExplanation: "",
    theme: "insolite",
    type: "multistep"
  });
  
  // Set initial values if editing existing question
  useEffect(() => {
    if (initialQuestion) {
      if (initialQuestion.type === "simple") {
        setSimpleQuestion(initialQuestion as Question);
      } else {
        setMultiQuestion(initialQuestion as MultiStepQuestion);
      }
      setActiveTab(initialQuestion.type);
    }
  }, [initialQuestion]);
  
  // Reset form when dialog opens
  useEffect(() => {
    if (!isOpen) return;
    
    if (!initialQuestion) {
      setSimpleQuestion({
        question: "",
        correctAnswer: undefined,
        unit: "",
        explanation: "",
        theme: "insolite",
        type: "simple"
      });
      setMultiQuestion({
        question: "",
        steps: [{ question: "", correctAnswer: undefined, unit: "", explanation: "" }],
        finalExplanation: "",
        theme: "insolite",
        type: "multistep"
      });
    }
  }, [isOpen, initialQuestion]);
  
  const handleSaveQuestion = () => {
    if (activeTab === "simple") {
      const finalQuestion: Question = {
        id: simpleQuestion.id || generateId(),
        question: simpleQuestion.question || "",
        correctAnswer: Number(simpleQuestion.correctAnswer) || 0,
        unit: simpleQuestion.unit,
        explanation: simpleQuestion.explanation,
        theme: simpleQuestion.theme || "insolite",
        type: "simple"
      };
      onSave(finalQuestion);
    } else {
      const finalQuestion: MultiStepQuestion = {
        id: multiQuestion.id || generateId(),
        question: multiQuestion.question || "",
        steps: multiQuestion.steps?.map(step => ({
          question: step.question || "",
          correctAnswer: Number(step.correctAnswer) || 0,
          unit: step.unit,
          explanation: step.explanation
        })) || [],
        finalExplanation: multiQuestion.finalExplanation,
        theme: multiQuestion.theme || "insolite",
        type: "multistep"
      };
      onSave(finalQuestion);
    }
    onClose();
  };
  
  const addStep = () => {
    setMultiQuestion(prev => ({
      ...prev,
      steps: [
        ...(prev.steps || []),
        { question: "", correctAnswer: undefined, unit: "", explanation: "" }
      ]
    }));
  };
  
  const removeStep = (index: number) => {
    setMultiQuestion(prev => ({
      ...prev,
      steps: prev.steps?.filter((_, i) => i !== index)
    }));
  };
  
  const updateStep = (index: number, field: keyof Step, value: any) => {
    setMultiQuestion(prev => ({
      ...prev,
      steps: prev.steps?.map((step, i) => 
        i === index ? { ...step, [field]: value } : step
      )
    }));
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={isOpen => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {initialQuestion ? "Modifier la question" : "Ajouter une question"}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "simple" | "multistep")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="simple">Question simple</TabsTrigger>
            <TabsTrigger value="multistep">Question à étapes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="simple" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Thème</label>
                <Select
                  value={simpleQuestion.theme}
                  onValueChange={(value) => setSimpleQuestion({...simpleQuestion, theme: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un thème" />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map(theme => (
                      <SelectItem key={theme.id} value={theme.id}>
                        {theme.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Question</label>
                <Textarea 
                  value={simpleQuestion.question}
                  onChange={(e) => setSimpleQuestion({...simpleQuestion, question: e.target.value})}
                  placeholder="Saisissez la question ici"
                  rows={2}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex-grow">
                  <label className="text-sm font-medium">Réponse correcte</label>
                  <Input 
                    type="number" 
                    value={simpleQuestion.correctAnswer === undefined ? '' : simpleQuestion.correctAnswer}
                    onChange={(e) => setSimpleQuestion({...simpleQuestion, correctAnswer: parseFloat(e.target.value)})}
                    placeholder="42"
                  />
                </div>
                <div className="w-1/3">
                  <label className="text-sm font-medium">Unité (optionnel)</label>
                  <Input 
                    value={simpleQuestion.unit || ''}
                    onChange={(e) => setSimpleQuestion({...simpleQuestion, unit: e.target.value})}
                    placeholder="km"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Explication (optionnel)</label>
                <Textarea 
                  value={simpleQuestion.explanation || ''}
                  onChange={(e) => setSimpleQuestion({...simpleQuestion, explanation: e.target.value})}
                  placeholder="Explication de la réponse correcte"
                  rows={3}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="multistep" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Thème</label>
                <Select
                  value={multiQuestion.theme}
                  onValueChange={(value) => setMultiQuestion({...multiQuestion, theme: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un thème" />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map(theme => (
                      <SelectItem key={theme.id} value={theme.id}>
                        {theme.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Question principale</label>
                <Textarea 
                  value={multiQuestion.question}
                  onChange={(e) => setMultiQuestion({...multiQuestion, question: e.target.value})}
                  placeholder="Saisissez la question principale ici"
                  rows={2}
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">Étapes ({multiQuestion.steps?.length || 0})</h3>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={addStep}
                    className="flex items-center gap-1"
                  >
                    <PlusCircle size={16} />
                    <span>Ajouter une étape</span>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {multiQuestion.steps?.map((step, index) => (
                    <div 
                      key={index} 
                      className="border rounded-md p-3 space-y-3 relative"
                    >
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-2 top-2 h-6 w-6"
                        onClick={() => removeStep(index)}
                        disabled={multiQuestion.steps?.length === 1}
                      >
                        <X size={14} />
                      </Button>
                      
                      <div>
                        <label className="text-sm font-medium">Étape {index + 1}: Question</label>
                        <Textarea 
                          value={step.question}
                          onChange={(e) => updateStep(index, 'question', e.target.value)}
                          placeholder="Question pour cette étape"
                          rows={2}
                        />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex-grow">
                          <label className="text-sm font-medium">Réponse correcte</label>
                          <Input 
                            type="number" 
                            value={step.correctAnswer === undefined ? '' : step.correctAnswer}
                            onChange={(e) => updateStep(index, 'correctAnswer', parseFloat(e.target.value))}
                            placeholder="42"
                          />
                        </div>
                        <div className="w-1/3">
                          <label className="text-sm font-medium">Unité (optionnel)</label>
                          <Input 
                            value={step.unit || ''}
                            onChange={(e) => updateStep(index, 'unit', e.target.value)}
                            placeholder="km"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Explication (optionnel)</label>
                        <Textarea 
                          value={step.explanation || ''}
                          onChange={(e) => updateStep(index, 'explanation', e.target.value)}
                          placeholder="Explication pour cette étape"
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Explication finale (optionnel)</label>
                <Textarea 
                  value={multiQuestion.finalExplanation || ''}
                  onChange={(e) => setMultiQuestion({...multiQuestion, finalExplanation: e.target.value})}
                  placeholder="Explication finale de toutes les étapes"
                  rows={3}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Annuler</Button>
          <Button onClick={handleSaveQuestion}>
            {initialQuestion ? "Mettre à jour" : "Ajouter"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionForm;
