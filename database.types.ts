export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      analytics: {
        Row: {
          created_at: string
          formation: Database["public"]["Enums"]["formation_name"] | null
          id: number
        }
        Insert: {
          created_at?: string
          formation?: Database["public"]["Enums"]["formation_name"] | null
          id?: number
        }
        Update: {
          created_at?: string
          formation?: Database["public"]["Enums"]["formation_name"] | null
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      formation_name:
        | "3-1-4-2"
        | "3-4-1-2"
        | "3-4-2-1"
        | "3-4-3"
        | "3-4-3 Diamond"
        | "3-4-3 Flat"
        | "3-5-1-1"
        | "3-5-2"
        | "4-1-2-1-2"
        | "4-1-2-1-2 (2)"
        | "4-1-2-1-2 (Narrow)"
        | "4-1-2-1-2 (Wide)"
        | "4-1-3-2"
        | "4-1-4-1"
        | "4-2-2-2"
        | "4-2-3-1"
        | "4-2-3-1 (2)"
        | "4-2-3-1 (Narrow)"
        | "4-2-3-1 (Wide)"
        | "4-2-4"
        | "4-3-1-2"
        | "4-3-2-1"
        | "4-3-3"
        | "4-3-3 (2)"
        | "4-3-3 (3)"
        | "4-3-3 (4)"
        | "4-3-3 (5)"
        | "4-4-1-1"
        | "4-4-1-1 (2)"
        | "4-4-2"
        | "4-4-2 (2)"
        | "4-5-1"
        | "4-5-1 (2)"
        | "5-2-1-2"
        | "5-2-2-1"
        | "5-2-3"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
