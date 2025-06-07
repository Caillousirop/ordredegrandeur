export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
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
      question_temporaire: {
        Row: {
          correct_answer: number | null
          created_at: string | null
          explanation: string | null
          final_explanation: string | null
          id: string
          is_active: boolean | null
          priority: number | null
          question: string | null
          scheduled_date: string | null
          steps: Json | null
          theme: string | null
          type: string | null
          unit: string | null
          updated_at: string | null
        }
        Insert: {
          correct_answer?: number | null
          created_at?: string | null
          explanation?: string | null
          final_explanation?: string | null
          id?: string
          is_active?: boolean | null
          priority?: number | null
          question?: string | null
          scheduled_date?: string | null
          steps?: Json | null
          theme?: string | null
          type?: string | null
          unit?: string | null
          updated_at?: string | null
        }
        Update: {
          correct_answer?: number | null
          created_at?: string | null
          explanation?: string | null
          final_explanation?: string | null
          id?: string
          is_active?: boolean | null
          priority?: number | null
          question?: string | null
          scheduled_date?: string | null
          steps?: Json | null
          theme?: string | null
          type?: string | null
          unit?: string | null
          updated_at?: string | null
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
      user_progress: {
        Row: {
          correct_percentage: number
          id: string
          last_updated: string
          questions_completed: number
          total_points: number
          user_id: string
          user_level: number
        }
        Insert: {
          correct_percentage?: number
          id?: string
          last_updated?: string
          questions_completed?: number
          total_points?: number
          user_id: string
          user_level?: number
        }
        Update: {
          correct_percentage?: number
          id?: string
          last_updated?: string
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
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: { user_id?: string }
        Returns: boolean
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
