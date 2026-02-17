export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      accounting_transactions: {
        Row: {
          amount: number
          category: string
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          project_id: string | null
          transaction_date: string
          transaction_type: string
          updated_at: string
        }
        Insert: {
          amount?: number
          category: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          project_id?: string | null
          transaction_date?: string
          transaction_type?: string
          updated_at?: string
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          project_id?: string | null
          transaction_date?: string
          transaction_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounting_transactions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      asset_allocations: {
        Row: {
          actual_return_date: string | null
          allocated_by: string | null
          allocated_by_name: string | null
          allocated_to: string | null
          allocated_to_name: string | null
          allocation_date: string
          asset_master_id: string
          consumed_quantity: number | null
          created_at: string
          expected_return_date: string | null
          id: string
          is_consumed: boolean | null
          project_id: string | null
          purpose: string | null
          quantity: number | null
          remaining_quantity: number | null
          return_condition: string | null
          reusability_percentage: number | null
          status: string | null
          updated_at: string
        }
        Insert: {
          actual_return_date?: string | null
          allocated_by?: string | null
          allocated_by_name?: string | null
          allocated_to?: string | null
          allocated_to_name?: string | null
          allocation_date?: string
          asset_master_id: string
          consumed_quantity?: number | null
          created_at?: string
          expected_return_date?: string | null
          id?: string
          is_consumed?: boolean | null
          project_id?: string | null
          purpose?: string | null
          quantity?: number | null
          remaining_quantity?: number | null
          return_condition?: string | null
          reusability_percentage?: number | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          actual_return_date?: string | null
          allocated_by?: string | null
          allocated_by_name?: string | null
          allocated_to?: string | null
          allocated_to_name?: string | null
          allocation_date?: string
          asset_master_id?: string
          consumed_quantity?: number | null
          created_at?: string
          expected_return_date?: string | null
          id?: string
          is_consumed?: boolean | null
          project_id?: string | null
          purpose?: string | null
          quantity?: number | null
          remaining_quantity?: number | null
          return_condition?: string | null
          reusability_percentage?: number | null
          status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "asset_allocations_allocated_to_fkey"
            columns: ["allocated_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "asset_allocations_asset_master_id_fkey"
            columns: ["asset_master_id"]
            isOneToOne: false
            referencedRelation: "asset_master_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "asset_allocations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      asset_deletion_history: {
        Row: {
          asset_id: string | null
          asset_name: string | null
          asset_type: string | null
          cost_basis: number | null
          cost_center: string | null
          deleted_at: string
          deleted_by: string | null
          deleted_by_name: string | null
          deletion_reason: string | null
          id: string
          original_data: Json | null
          restoration_history: Json | null
          sku: string | null
          stock_quantity: number | null
        }
        Insert: {
          asset_id?: string | null
          asset_name?: string | null
          asset_type?: string | null
          cost_basis?: number | null
          cost_center?: string | null
          deleted_at?: string
          deleted_by?: string | null
          deleted_by_name?: string | null
          deletion_reason?: string | null
          id?: string
          original_data?: Json | null
          restoration_history?: Json | null
          sku?: string | null
          stock_quantity?: number | null
        }
        Update: {
          asset_id?: string | null
          asset_name?: string | null
          asset_type?: string | null
          cost_basis?: number | null
          cost_center?: string | null
          deleted_at?: string
          deleted_by?: string | null
          deleted_by_name?: string | null
          deletion_reason?: string | null
          id?: string
          original_data?: Json | null
          restoration_history?: Json | null
          sku?: string | null
          stock_quantity?: number | null
        }
        Relationships: []
      }
      asset_disposals: {
        Row: {
          approved_by: string | null
          asset_master_id: string
          created_at: string
          disposal_date: string
          disposal_reason: string | null
          gain_loss: number | null
          id: string
          nbv_at_disposal: number | null
          sale_price: number | null
          updated_at: string | null
        }
        Insert: {
          approved_by?: string | null
          asset_master_id: string
          created_at?: string
          disposal_date?: string
          disposal_reason?: string | null
          gain_loss?: number | null
          id?: string
          nbv_at_disposal?: number | null
          sale_price?: number | null
          updated_at?: string | null
        }
        Update: {
          approved_by?: string | null
          asset_master_id?: string
          created_at?: string
          disposal_date?: string
          disposal_reason?: string | null
          gain_loss?: number | null
          id?: string
          nbv_at_disposal?: number | null
          sale_price?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "asset_disposals_asset_master_id_fkey"
            columns: ["asset_master_id"]
            isOneToOne: false
            referencedRelation: "asset_master_data"
            referencedColumns: ["id"]
          },
        ]
      }
      asset_location_history: {
        Row: {
          asset_master_id: string
          created_at: string
          id: string
          location: string
          moved_by: string | null
          notes: string | null
          timestamp: string
        }
        Insert: {
          asset_master_id: string
          created_at?: string
          id?: string
          location: string
          moved_by?: string | null
          notes?: string | null
          timestamp?: string
        }
        Update: {
          asset_master_id?: string
          created_at?: string
          id?: string
          location?: string
          moved_by?: string | null
          notes?: string | null
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "asset_location_history_asset_master_id_fkey"
            columns: ["asset_master_id"]
            isOneToOne: false
            referencedRelation: "asset_master_data"
            referencedColumns: ["id"]
          },
        ]
      }
      asset_master_data: {
        Row: {
          accumulated_depreciation: number | null
          activation_date: string | null
          allocated_quantity: number | null
          amortization_period_months: number | null
          asset_id: string
          asset_name: string
          asset_type: string
          brand: string | null
          closing_quantity: number | null
          closing_value: number | null
          cost_basis: number | null
          cost_center: string | null
          created_at: string
          created_by: string | null
          current_status: string | null
          depreciation_method: string | null
          id: string
          inbound_quantity: number | null
          inbound_value: number | null
          installation_scope: string | null
          inventory_item_id: string | null
          is_consumable: boolean | null
          nbv: number | null
          notes: string | null
          opening_quantity: number | null
          opening_value: number | null
          outbound_quantity: number | null
          outbound_value: number | null
          quantity_per_contract: number | null
          quantity_requested: number | null
          quantity_supplied_previous: number | null
          sku: string | null
          stock_quantity: number | null
          total_maintenance_cost: number | null
          unit: string | null
          updated_at: string
          useful_life_months: number | null
          warehouse_name: string | null
        }
        Insert: {
          accumulated_depreciation?: number | null
          activation_date?: string | null
          allocated_quantity?: number | null
          amortization_period_months?: number | null
          asset_id: string
          asset_name: string
          asset_type?: string
          brand?: string | null
          closing_quantity?: number | null
          closing_value?: number | null
          cost_basis?: number | null
          cost_center?: string | null
          created_at?: string
          created_by?: string | null
          current_status?: string | null
          depreciation_method?: string | null
          id?: string
          inbound_quantity?: number | null
          inbound_value?: number | null
          installation_scope?: string | null
          inventory_item_id?: string | null
          is_consumable?: boolean | null
          nbv?: number | null
          notes?: string | null
          opening_quantity?: number | null
          opening_value?: number | null
          outbound_quantity?: number | null
          outbound_value?: number | null
          quantity_per_contract?: number | null
          quantity_requested?: number | null
          quantity_supplied_previous?: number | null
          sku?: string | null
          stock_quantity?: number | null
          total_maintenance_cost?: number | null
          unit?: string | null
          updated_at?: string
          useful_life_months?: number | null
          warehouse_name?: string | null
        }
        Update: {
          accumulated_depreciation?: number | null
          activation_date?: string | null
          allocated_quantity?: number | null
          amortization_period_months?: number | null
          asset_id?: string
          asset_name?: string
          asset_type?: string
          brand?: string | null
          closing_quantity?: number | null
          closing_value?: number | null
          cost_basis?: number | null
          cost_center?: string | null
          created_at?: string
          created_by?: string | null
          current_status?: string | null
          depreciation_method?: string | null
          id?: string
          inbound_quantity?: number | null
          inbound_value?: number | null
          installation_scope?: string | null
          inventory_item_id?: string | null
          is_consumable?: boolean | null
          nbv?: number | null
          notes?: string | null
          opening_quantity?: number | null
          opening_value?: number | null
          outbound_quantity?: number | null
          outbound_value?: number | null
          quantity_per_contract?: number | null
          quantity_requested?: number | null
          quantity_supplied_previous?: number | null
          sku?: string | null
          stock_quantity?: number | null
          total_maintenance_cost?: number | null
          unit?: string | null
          updated_at?: string
          useful_life_months?: number | null
          warehouse_name?: string | null
        }
        Relationships: []
      }
      backup_settings: {
        Row: {
          backup_hour: number | null
          backup_minute: number | null
          created_at: string
          cron_token: string | null
          id: string
          is_enabled: boolean | null
          last_backup_at: string | null
          last_backup_error: string | null
          last_backup_file: string | null
          last_backup_status: string | null
          last_scheduled_at: string | null
          notification_email: string | null
          resend_api_key: string | null
          updated_at: string
        }
        Insert: {
          backup_hour?: number | null
          backup_minute?: number | null
          created_at?: string
          cron_token?: string | null
          id?: string
          is_enabled?: boolean | null
          last_backup_at?: string | null
          last_backup_error?: string | null
          last_backup_file?: string | null
          last_backup_status?: string | null
          last_scheduled_at?: string | null
          notification_email?: string | null
          resend_api_key?: string | null
          updated_at?: string
        }
        Update: {
          backup_hour?: number | null
          backup_minute?: number | null
          created_at?: string
          cron_token?: string | null
          id?: string
          is_enabled?: boolean | null
          last_backup_at?: string | null
          last_backup_error?: string | null
          last_backup_file?: string | null
          last_backup_status?: string | null
          last_scheduled_at?: string | null
          notification_email?: string | null
          resend_api_key?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      brands: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      client_requirements: {
        Row: {
          assigned_to: string | null
          completion_percentage: number | null
          created_at: string | null
          created_by: string | null
          due_date: string | null
          id: string
          priority: string | null
          project_id: string
          requirement_description: string | null
          requirement_title: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          completion_percentage?: number | null
          created_at?: string | null
          created_by?: string | null
          due_date?: string | null
          id?: string
          priority?: string | null
          project_id: string
          requirement_description?: string | null
          requirement_title: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          completion_percentage?: number | null
          created_at?: string | null
          created_by?: string | null
          due_date?: string | null
          id?: string
          priority?: string | null
          project_id?: string
          requirement_description?: string | null
          requirement_title?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_requirements_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      contract_guarantees: {
        Row: {
          contract_id: string
          created_at: string
          expiry_date: string | null
          guarantee_number: string | null
          guarantee_type: string
          guarantee_value: number | null
          id: string
          issue_date: string | null
          issuing_bank: string | null
          notes: string | null
          updated_at: string
        }
        Insert: {
          contract_id: string
          created_at?: string
          expiry_date?: string | null
          guarantee_number?: string | null
          guarantee_type: string
          guarantee_value?: number | null
          id?: string
          issue_date?: string | null
          issuing_bank?: string | null
          notes?: string | null
          updated_at?: string
        }
        Update: {
          contract_id?: string
          created_at?: string
          expiry_date?: string | null
          guarantee_number?: string | null
          guarantee_type?: string
          guarantee_value?: number | null
          id?: string
          issue_date?: string | null
          issuing_bank?: string | null
          notes?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contract_guarantees_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
        ]
      }
      contracts: {
        Row: {
          client_name: string
          contract_number: string
          contract_type: string | null
          contract_value: number | null
          created_at: string
          created_by: string | null
          effective_date: string | null
          expiry_date: string | null
          id: string
          is_appendix: boolean | null
          payment_value: number | null
          project_id: string | null
          updated_at: string
        }
        Insert: {
          client_name: string
          contract_number: string
          contract_type?: string | null
          contract_value?: number | null
          created_at?: string
          created_by?: string | null
          effective_date?: string | null
          expiry_date?: string | null
          id?: string
          is_appendix?: boolean | null
          payment_value?: number | null
          project_id?: string | null
          updated_at?: string
        }
        Update: {
          client_name?: string
          contract_number?: string
          contract_type?: string | null
          contract_value?: number | null
          created_at?: string
          created_by?: string | null
          effective_date?: string | null
          expiry_date?: string | null
          id?: string
          is_appendix?: boolean | null
          payment_value?: number | null
          project_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contracts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      depreciation_schedules: {
        Row: {
          accumulated_depreciation: number | null
          asset_master_id: string
          created_at: string
          depreciation_amount: number | null
          id: string
          is_processed: boolean | null
          nbv: number | null
          period_date: string
        }
        Insert: {
          accumulated_depreciation?: number | null
          asset_master_id: string
          created_at?: string
          depreciation_amount?: number | null
          id?: string
          is_processed?: boolean | null
          nbv?: number | null
          period_date: string
        }
        Update: {
          accumulated_depreciation?: number | null
          asset_master_id?: string
          created_at?: string
          depreciation_amount?: number | null
          id?: string
          is_processed?: boolean | null
          nbv?: number | null
          period_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "depreciation_schedules_asset_master_id_fkey"
            columns: ["asset_master_id"]
            isOneToOne: false
            referencedRelation: "asset_master_data"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_contracts: {
        Row: {
          contract_end_date: string | null
          contract_sign_date: string | null
          contract_type: string
          created_at: string
          employee_id: string
          id: string
          notes: string | null
          social_insurance_status: string | null
          start_work_date: string | null
          termination_date: string | null
          updated_at: string
          work_status: string | null
        }
        Insert: {
          contract_end_date?: string | null
          contract_sign_date?: string | null
          contract_type: string
          created_at?: string
          employee_id: string
          id?: string
          notes?: string | null
          social_insurance_status?: string | null
          start_work_date?: string | null
          termination_date?: string | null
          updated_at?: string
          work_status?: string | null
        }
        Update: {
          contract_end_date?: string | null
          contract_sign_date?: string | null
          contract_type?: string
          created_at?: string
          employee_id?: string
          id?: string
          notes?: string | null
          social_insurance_status?: string | null
          start_work_date?: string | null
          termination_date?: string | null
          updated_at?: string
          work_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_contracts_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employees: {
        Row: {
          address: string | null
          certificate_expiry_date: string | null
          certificate_photo_url: string | null
          certificate_photos: string[] | null
          citizen_id: string | null
          citizen_id_issue_date: string | null
          citizen_id_issue_place: string | null
          created_at: string
          date_joined: string
          date_of_birth: string | null
          department: string | null
          education_level: string | null
          emergency_contact: string | null
          employee_card_photo_url: string | null
          employee_card_photos: string[] | null
          employee_code: string | null
          ethnicity: string | null
          full_name: string
          gender: string | null
          id: string
          id_card_photo_url: string | null
          id_card_photos: string[] | null
          major: string | null
          marital_status: string | null
          notes: string | null
          phone: string | null
          position: string | null
          updated_at: string
          user_id: string | null
          work_type: string | null
        }
        Insert: {
          address?: string | null
          certificate_expiry_date?: string | null
          certificate_photo_url?: string | null
          certificate_photos?: string[] | null
          citizen_id?: string | null
          citizen_id_issue_date?: string | null
          citizen_id_issue_place?: string | null
          created_at?: string
          date_joined?: string
          date_of_birth?: string | null
          department?: string | null
          education_level?: string | null
          emergency_contact?: string | null
          employee_card_photo_url?: string | null
          employee_card_photos?: string[] | null
          employee_code?: string | null
          ethnicity?: string | null
          full_name: string
          gender?: string | null
          id?: string
          id_card_photo_url?: string | null
          id_card_photos?: string[] | null
          major?: string | null
          marital_status?: string | null
          notes?: string | null
          phone?: string | null
          position?: string | null
          updated_at?: string
          user_id?: string | null
          work_type?: string | null
        }
        Update: {
          address?: string | null
          certificate_expiry_date?: string | null
          certificate_photo_url?: string | null
          certificate_photos?: string[] | null
          citizen_id?: string | null
          citizen_id_issue_date?: string | null
          citizen_id_issue_place?: string | null
          created_at?: string
          date_joined?: string
          date_of_birth?: string | null
          department?: string | null
          education_level?: string | null
          emergency_contact?: string | null
          employee_card_photo_url?: string | null
          employee_card_photos?: string[] | null
          employee_code?: string | null
          ethnicity?: string | null
          full_name?: string
          gender?: string | null
          id?: string
          id_card_photo_url?: string | null
          id_card_photos?: string[] | null
          major?: string | null
          marital_status?: string | null
          notes?: string | null
          phone?: string | null
          position?: string | null
          updated_at?: string
          user_id?: string | null
          work_type?: string | null
        }
        Relationships: []
      }
      gin_items: {
        Row: {
          asset_master_id: string | null
          created_at: string
          gin_id: string
          id: string
          quantity: number | null
          return_condition: string | null
          return_date: string | null
          return_notes: string | null
          returned_quantity: number | null
          status: string | null
          total_cost: number | null
          unit_cost: number | null
        }
        Insert: {
          asset_master_id?: string | null
          created_at?: string
          gin_id: string
          id?: string
          quantity?: number | null
          return_condition?: string | null
          return_date?: string | null
          return_notes?: string | null
          returned_quantity?: number | null
          status?: string | null
          total_cost?: number | null
          unit_cost?: number | null
        }
        Update: {
          asset_master_id?: string | null
          created_at?: string
          gin_id?: string
          id?: string
          quantity?: number | null
          return_condition?: string | null
          return_date?: string | null
          return_notes?: string | null
          returned_quantity?: number | null
          status?: string | null
          total_cost?: number | null
          unit_cost?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "gin_items_asset_master_id_fkey"
            columns: ["asset_master_id"]
            isOneToOne: false
            referencedRelation: "asset_master_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gin_items_gin_id_fkey"
            columns: ["gin_id"]
            isOneToOne: false
            referencedRelation: "goods_issue_notes"
            referencedColumns: ["id"]
          },
        ]
      }
      goods_issue_notes: {
        Row: {
          created_at: string
          created_by: string | null
          gin_number: string
          id: string
          issue_date: string
          notes: string | null
          project_id: string | null
          purpose: string | null
          recipient: string | null
          total_value: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          gin_number: string
          id?: string
          issue_date?: string
          notes?: string | null
          project_id?: string | null
          purpose?: string | null
          recipient?: string | null
          total_value?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          gin_number?: string
          id?: string
          issue_date?: string
          notes?: string | null
          project_id?: string | null
          purpose?: string | null
          recipient?: string | null
          total_value?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "goods_issue_notes_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      goods_receipt_notes: {
        Row: {
          created_at: string
          created_by: string | null
          grn_number: string
          id: string
          notes: string | null
          receipt_date: string
          supplier: string | null
          total_value: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          grn_number: string
          id?: string
          notes?: string | null
          receipt_date?: string
          supplier?: string | null
          total_value?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          grn_number?: string
          id?: string
          notes?: string | null
          receipt_date?: string
          supplier?: string | null
          total_value?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      grn_items: {
        Row: {
          asset_master_id: string | null
          created_at: string
          grn_id: string
          id: string
          quantity: number | null
          total_cost: number | null
          unit_cost: number | null
        }
        Insert: {
          asset_master_id?: string | null
          created_at?: string
          grn_id: string
          id?: string
          quantity?: number | null
          total_cost?: number | null
          unit_cost?: number | null
        }
        Update: {
          asset_master_id?: string | null
          created_at?: string
          grn_id?: string
          id?: string
          quantity?: number | null
          total_cost?: number | null
          unit_cost?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "grn_items_asset_master_id_fkey"
            columns: ["asset_master_id"]
            isOneToOne: false
            referencedRelation: "asset_master_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grn_items_grn_id_fkey"
            columns: ["grn_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_notes"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_items: {
        Row: {
          brand_id: string | null
          business_type: string | null
          category_id: string | null
          created_at: string
          id: string
          min_stock_level: number | null
          product_code: string
          product_group_id: string | null
          product_name: string
          retail_price: number | null
          stock_quantity: number | null
          unit: string | null
          updated_at: string
          wholesale_price: number | null
        }
        Insert: {
          brand_id?: string | null
          business_type?: string | null
          category_id?: string | null
          created_at?: string
          id?: string
          min_stock_level?: number | null
          product_code: string
          product_group_id?: string | null
          product_name: string
          retail_price?: number | null
          stock_quantity?: number | null
          unit?: string | null
          updated_at?: string
          wholesale_price?: number | null
        }
        Update: {
          brand_id?: string | null
          business_type?: string | null
          category_id?: string | null
          created_at?: string
          id?: string
          min_stock_level?: number | null
          product_code?: string
          product_group_id?: string | null
          product_name?: string
          retail_price?: number | null
          stock_quantity?: number | null
          unit?: string | null
          updated_at?: string
          wholesale_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_inventory_brand"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_inventory_category"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_inventory_product_group"
            columns: ["product_group_id"]
            isOneToOne: false
            referencedRelation: "product_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      maintenance_records: {
        Row: {
          asset_master_id: string
          cost: number | null
          created_at: string
          description: string | null
          id: string
          maintenance_date: string
          maintenance_type: string
          performed_by: string | null
          reported_by: string | null
          vendor: string | null
        }
        Insert: {
          asset_master_id: string
          cost?: number | null
          created_at?: string
          description?: string | null
          id?: string
          maintenance_date?: string
          maintenance_type: string
          performed_by?: string | null
          reported_by?: string | null
          vendor?: string | null
        }
        Update: {
          asset_master_id?: string
          cost?: number | null
          created_at?: string
          description?: string | null
          id?: string
          maintenance_date?: string
          maintenance_type?: string
          performed_by?: string | null
          reported_by?: string | null
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "maintenance_records_asset_master_id_fkey"
            columns: ["asset_master_id"]
            isOneToOne: false
            referencedRelation: "asset_master_data"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean | null
          message: string | null
          reference_id: string | null
          title: string
          type: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string | null
          reference_id?: string | null
          title: string
          type?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string | null
          reference_id?: string | null
          title?: string
          type?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      org_chart_connections: {
        Row: {
          connection_type: string | null
          created_at: string | null
          id: string
          org_chart_id: string
          source_position_id: string
          target_position_id: string
        }
        Insert: {
          connection_type?: string | null
          created_at?: string | null
          id?: string
          org_chart_id: string
          source_position_id: string
          target_position_id: string
        }
        Update: {
          connection_type?: string | null
          created_at?: string | null
          id?: string
          org_chart_id?: string
          source_position_id?: string
          target_position_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "org_chart_connections_org_chart_id_fkey"
            columns: ["org_chart_id"]
            isOneToOne: false
            referencedRelation: "organization_charts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_chart_connections_source_position_id_fkey"
            columns: ["source_position_id"]
            isOneToOne: false
            referencedRelation: "org_chart_positions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_chart_connections_target_position_id_fkey"
            columns: ["target_position_id"]
            isOneToOne: false
            referencedRelation: "org_chart_positions"
            referencedColumns: ["id"]
          },
        ]
      }
      org_chart_positions: {
        Row: {
          color_scheme: string | null
          created_at: string | null
          employee_id: string | null
          height: number | null
          id: string
          org_chart_id: string
          position_key: string
          position_title: string
          width: number | null
          x_position: number | null
          y_position: number | null
        }
        Insert: {
          color_scheme?: string | null
          created_at?: string | null
          employee_id?: string | null
          height?: number | null
          id?: string
          org_chart_id: string
          position_key: string
          position_title: string
          width?: number | null
          x_position?: number | null
          y_position?: number | null
        }
        Update: {
          color_scheme?: string | null
          created_at?: string | null
          employee_id?: string | null
          height?: number | null
          id?: string
          org_chart_id?: string
          position_key?: string
          position_title?: string
          width?: number | null
          x_position?: number | null
          y_position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "org_chart_positions_org_chart_id_fkey"
            columns: ["org_chart_id"]
            isOneToOne: false
            referencedRelation: "organization_charts"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_charts: {
        Row: {
          created_at: string | null
          id: string
          investor: string | null
          owner: string | null
          project_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          investor?: string | null
          owner?: string | null
          project_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          investor?: string | null
          owner?: string | null
          project_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organization_charts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      product_categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      product_groups: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      project_items: {
        Row: {
          completion_percentage: number | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string | null
          id: string
          item_name: string
          project_id: string
          quantity: number | null
          start_date: string | null
          status: string | null
          total_price: number | null
          unit: string | null
          unit_price: number | null
          updated_at: string | null
        }
        Insert: {
          completion_percentage?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          item_name: string
          project_id: string
          quantity?: number | null
          start_date?: string | null
          status?: string | null
          total_price?: number | null
          unit?: string | null
          unit_price?: number | null
          updated_at?: string | null
        }
        Update: {
          completion_percentage?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          item_name?: string
          project_id?: string
          quantity?: number | null
          start_date?: string | null
          status?: string | null
          total_price?: number | null
          unit?: string | null
          unit_price?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_items_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_kpis: {
        Row: {
          created_at: string | null
          created_by: string | null
          current_value: number | null
          description: string | null
          due_date: string | null
          id: string
          kpi_name: string
          project_id: string
          status: string | null
          target_value: number | null
          unit: string | null
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          current_value?: number | null
          description?: string | null
          due_date?: string | null
          id?: string
          kpi_name: string
          project_id: string
          status?: string | null
          target_value?: number | null
          unit?: string | null
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          current_value?: number | null
          description?: string | null
          due_date?: string | null
          id?: string
          kpi_name?: string
          project_id?: string
          status?: string | null
          target_value?: number | null
          unit?: string | null
          updated_at?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "project_kpis_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          budget: number | null
          created_at: string
          created_by: string | null
          description: string | null
          end_date: string | null
          id: string
          location: string | null
          name: string
          priority: string
          start_date: string | null
          status: string
          updated_at: string
        }
        Insert: {
          budget?: number | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          location?: string | null
          name: string
          priority?: string
          start_date?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          budget?: number | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          location?: string | null
          name?: string
          priority?: string
          start_date?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assigned_to: string | null
          completion_percentage: number | null
          created_at: string
          created_by: string | null
          description: string | null
          due_date: string | null
          id: string
          priority: string | null
          project_id: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          completion_percentage?: number | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string | null
          project_id: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          completion_percentage?: number | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string | null
          project_id?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          id: string
          joined_at: string
          project_id: string
          role: string | null
          user_id: string
        }
        Insert: {
          id?: string
          joined_at?: string
          project_id: string
          role?: string | null
          user_id: string
        }
        Update: {
          id?: string
          joined_at?: string
          project_id?: string
          role?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      user_permissions: {
        Row: {
          allowed_modules: Json | null
          can_edit_modules: Json | null
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          allowed_modules?: Json | null
          can_edit_modules?: Json | null
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          allowed_modules?: Json | null
          can_edit_modules?: Json | null
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      warehouses: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user" | "accountant" | "hr_admin" | "project_manager"
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
    Enums: {
      app_role: ["admin", "user", "accountant", "hr_admin", "project_manager"],
    },
  },
} as const
