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
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      boas_intencoes: {
        Row: {
          atendimentoFinalizado: boolean | null
          botOff: boolean | null
          FollowUp: number | null
          id: number
          id_msg: string | null
          nome: string | null
          possuiThread: boolean | null
          remoteJid: string | null
          Thread: string | null
          timeStemp: string | null
        }
        Insert: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          id_msg?: string | null
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string | null
          Thread?: string | null
          timeStemp?: string | null
        }
        Update: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          id_msg?: string | null
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string | null
          Thread?: string | null
          timeStemp?: string | null
        }
        Relationships: []
      }
      "Clientes RPM": {
        Row: {
          Cliente: string
          created_at: string
          id: number
        }
        Insert: {
          Cliente?: string
          created_at?: string
          id?: number
        }
        Update: {
          Cliente?: string
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      configuracoes_meucarrinho: {
        Row: {
          acrescimo_cartao: number | null
          api_key_pagarme: string | null
          horas_vencimento_pix: number | null
          id: number
          juros_parcelas: number | null
          parcelamento_maximo: number | null
          percentual_pix: number | null
          qtd_parcela_sem_juros: number | null
        }
        Insert: {
          acrescimo_cartao?: number | null
          api_key_pagarme?: string | null
          horas_vencimento_pix?: number | null
          id?: number
          juros_parcelas?: number | null
          parcelamento_maximo?: number | null
          percentual_pix?: number | null
          qtd_parcela_sem_juros?: number | null
        }
        Update: {
          acrescimo_cartao?: number | null
          api_key_pagarme?: string | null
          horas_vencimento_pix?: number | null
          id?: number
          juros_parcelas?: number | null
          parcelamento_maximo?: number | null
          percentual_pix?: number | null
          qtd_parcela_sem_juros?: number | null
        }
        Relationships: []
      }
      contaazul_tokens: {
        Row: {
          access_token: string | null
          bling_access_token: string | null
          bling_expires_in: string | null
          bling_refresh_token: string | null
          bling_scope: string | null
          cliente: string | null
          created_at: string
          expira_em: string | null
          id: number
          refresh_token: string | null
          ultimo_pedido: number | null
        }
        Insert: {
          access_token?: string | null
          bling_access_token?: string | null
          bling_expires_in?: string | null
          bling_refresh_token?: string | null
          bling_scope?: string | null
          cliente?: string | null
          created_at?: string
          expira_em?: string | null
          id?: number
          refresh_token?: string | null
          ultimo_pedido?: number | null
        }
        Update: {
          access_token?: string | null
          bling_access_token?: string | null
          bling_expires_in?: string | null
          bling_refresh_token?: string | null
          bling_scope?: string | null
          cliente?: string | null
          created_at?: string
          expira_em?: string | null
          id?: number
          refresh_token?: string | null
          ultimo_pedido?: number | null
        }
        Relationships: []
      }
      disparo_irium_Fundamental: {
        Row: {
          id: number
          nome: string | null
          numero: number | null
          status: string | null
        }
        Insert: {
          id?: number
          nome?: string | null
          numero?: number | null
          status?: string | null
        }
        Update: {
          id?: number
          nome?: string | null
          numero?: number | null
          status?: string | null
        }
        Relationships: []
      }
      disparo_irium_ingles: {
        Row: {
          id: number
          nome: string | null
          numero: number | null
          status: string | null
        }
        Insert: {
          id?: number
          nome?: string | null
          numero?: number | null
          status?: string | null
        }
        Update: {
          id?: number
          nome?: string | null
          numero?: number | null
          status?: string | null
        }
        Relationships: []
      }
      disparo_ribus: {
        Row: {
          id: number
          nome: string | null
          numero: number | null
          status: string | null
        }
        Insert: {
          id?: number
          nome?: string | null
          numero?: number | null
          status?: string | null
        }
        Update: {
          id?: number
          nome?: string | null
          numero?: number | null
          status?: string | null
        }
        Relationships: []
      }
      disparo_zommer: {
        Row: {
          id: number
          nome: string | null
          numero: number | null
          status: string | null
        }
        Insert: {
          id?: number
          nome?: string | null
          numero?: number | null
          status?: string | null
        }
        Update: {
          id?: number
          nome?: string | null
          numero?: number | null
          status?: string | null
        }
        Relationships: []
      }
      EVA: {
        Row: {
          atendimentoFinalizado: boolean | null
          botOff: boolean | null
          FollowUp: number | null
          id: number
          id_database_page: string | null
          nome: string | null
          possuiThread: boolean | null
          remoteJid: string
          Thread: string | null
          timeStemp: string | null
        }
        Insert: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          id_database_page?: string | null
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid: string
          Thread?: string | null
          timeStemp?: string | null
        }
        Update: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          id_database_page?: string | null
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string
          Thread?: string | null
          timeStemp?: string | null
        }
        Relationships: []
      }
      itens_pedido_meucarrinho: {
        Row: {
          cor: string | null
          cor_sku: string | null
          id: number
          id_capa: number
          id_produto: number
          observacao: string | null
          produto_pai: string | null
          quantidade: number
          url_logo: string | null
          url_mockup: string | null
          valor_total: number | null
          valor_unitario: number
        }
        Insert: {
          cor?: string | null
          cor_sku?: string | null
          id?: number
          id_capa: number
          id_produto: number
          observacao?: string | null
          produto_pai?: string | null
          quantidade: number
          url_logo?: string | null
          url_mockup?: string | null
          valor_total?: number | null
          valor_unitario: number
        }
        Update: {
          cor?: string | null
          cor_sku?: string | null
          id?: number
          id_capa?: number
          id_produto?: number
          observacao?: string | null
          produto_pai?: string | null
          quantidade?: number
          url_logo?: string | null
          url_mockup?: string | null
          valor_total?: number | null
          valor_unitario?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_itens_pedido_capas"
            columns: ["id_capa"]
            isOneToOne: false
            referencedRelation: "pedido_capa_meucarrinho"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_itens_pedido_produtos"
            columns: ["id_produto"]
            isOneToOne: false
            referencedRelation: "produtos_meucarrinho"
            referencedColumns: ["id"]
          },
        ]
      }
      Leads_boasintencoes: {
        Row: {
          AtendimentoFinalizado: boolean | null
          conversation_history: Json | null
          id: number
          nome: string | null
          remoteJid: string | null
          response_id: string | null
          Timestamp: string | null
          Tokens: number | null
        }
        Insert: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          id?: number
          nome?: string | null
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Update: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          id?: number
          nome?: string | null
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Relationships: []
      }
      Leads_meu_carrinho: {
        Row: {
          AtendimentoFinalizado: boolean | null
          conversation_history: Json | null
          FollowUp: string | null
          FollowUp1_enviado_em: string | null
          FollowUp2_enviado_em: string | null
          FollowUp3_enviado_em: string | null
          id: number
          nome: string | null
          remoteJid: string | null
          response_id: string | null
          Timestamp: string | null
          Tokens: number | null
        }
        Insert: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          FollowUp?: string | null
          FollowUp1_enviado_em?: string | null
          FollowUp2_enviado_em?: string | null
          FollowUp3_enviado_em?: string | null
          id?: number
          nome?: string | null
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Update: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          FollowUp?: string | null
          FollowUp1_enviado_em?: string | null
          FollowUp2_enviado_em?: string | null
          FollowUp3_enviado_em?: string | null
          id?: number
          nome?: string | null
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Relationships: []
      }
      Leads_saudemax: {
        Row: {
          AtendimentoFinalizado: boolean | null
          conversation_history: Json | null
          id: number
          nome: string | null
          remoteJid: string | null
          response_id: string | null
          Timestamp: string | null
          Tokens: number | null
        }
        Insert: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          id?: number
          nome?: string | null
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Update: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          id?: number
          nome?: string | null
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Relationships: []
      }
      Leads_unibras: {
        Row: {
          AtendimentoFinalizado: boolean | null
          conversation_history: Json | null
          id: number
          nome: string | null
          remoteJid: string | null
          response_id: string | null
          Timestamp: string | null
          Tokens: number | null
        }
        Insert: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          id?: number
          nome?: string | null
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Update: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          id?: number
          nome?: string | null
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Relationships: []
      }
      Leads_Vênus: {
        Row: {
          AtendimentoFinalizado: boolean | null
          conversation_history: Json | null
          FollowUp: string | null
          FollowUp1_enviado_em: string | null
          FollowUp2_enviado_em: string | null
          FollowUp3_enviado_em: string | null
          id: number
          remoteJid: string | null
          response_id: string | null
          Timestamp: string | null
          Tokens: number | null
        }
        Insert: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          FollowUp?: string | null
          FollowUp1_enviado_em?: string | null
          FollowUp2_enviado_em?: string | null
          FollowUp3_enviado_em?: string | null
          id?: number
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Update: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          FollowUp?: string | null
          FollowUp1_enviado_em?: string | null
          FollowUp2_enviado_em?: string | null
          FollowUp3_enviado_em?: string | null
          id?: number
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Relationships: []
      }
      Leads_Viajecer: {
        Row: {
          AtendimentoFinalizado: boolean | null
          conversation_history: Json | null
          id: number
          remoteJid: string | null
          response_id: string | null
          Timestamp: string | null
          Tokens: number | null
        }
        Insert: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          id?: number
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Update: {
          AtendimentoFinalizado?: boolean | null
          conversation_history?: Json | null
          id?: number
          remoteJid?: string | null
          response_id?: string | null
          Timestamp?: string | null
          Tokens?: number | null
        }
        Relationships: []
      }
      "lista.grupos1": {
        Row: {
          grupo: string
          id: number
          timestamp: string | null
        }
        Insert: {
          grupo: string
          id?: number
          timestamp?: string | null
        }
        Update: {
          grupo?: string
          id?: number
          timestamp?: string | null
        }
        Relationships: []
      }
      "lista.gruposrpm": {
        Row: {
          grupo: string
          id: number
          timestamp: string | null
        }
        Insert: {
          grupo: string
          id?: number
          timestamp?: string | null
        }
        Update: {
          grupo?: string
          id?: number
          timestamp?: string | null
        }
        Relationships: []
      }
      mariani: {
        Row: {
          atendimentoFinalizado: boolean | null
          botOff: boolean | null
          FollowUp: number | null
          id: number
          nome: string | null
          possuiThread: boolean | null
          remoteJid: string
          Thread: string | null
          timeStemp: string | null
        }
        Insert: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid: string
          Thread?: string | null
          timeStemp?: string | null
        }
        Update: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string
          Thread?: string | null
          timeStemp?: string | null
        }
        Relationships: []
      }
      "messages.grupo1": {
        Row: {
          grupoJid: string
          id: number
          message: string | null
          nome: string | null
          remoteJid: string | null
          timestamp: string | null
        }
        Insert: {
          grupoJid: string
          id?: number
          message?: string | null
          nome?: string | null
          remoteJid?: string | null
          timestamp?: string | null
        }
        Update: {
          grupoJid?: string
          id?: number
          message?: string | null
          nome?: string | null
          remoteJid?: string | null
          timestamp?: string | null
        }
        Relationships: []
      }
      "messages.grupo1_rpm": {
        Row: {
          grupoJid: string
          id: number
          message: string | null
          nome: string | null
          remoteJid: string | null
          timestamp: string | null
        }
        Insert: {
          grupoJid: string
          id?: number
          message?: string | null
          nome?: string | null
          remoteJid?: string | null
          timestamp?: string | null
        }
        Update: {
          grupoJid?: string
          id?: number
          message?: string | null
          nome?: string | null
          remoteJid?: string | null
          timestamp?: string | null
        }
        Relationships: []
      }
      "noticias-IA": {
        Row: {
          content: string | null
          id: number
          imageUrl: string | null
          productUrl: string | null
          publishedDateTime: string
          status: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          id?: number
          imageUrl?: string | null
          productUrl?: string | null
          publishedDateTime?: string
          status?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          id?: number
          imageUrl?: string | null
          productUrl?: string | null
          publishedDateTime?: string
          status?: string | null
          title?: string | null
        }
        Relationships: []
      }
      pedido_capa_meucarrinho: {
        Row: {
          cliente: string
          data_criacao: string | null
          empresa: string | null
          forma_pagamento: string | null
          id: number
          id_pagarme: string | null
          order_code: string | null
          status: string | null
          telefone: string | null
          url: string | null
        }
        Insert: {
          cliente: string
          data_criacao?: string | null
          empresa?: string | null
          forma_pagamento?: string | null
          id?: number
          id_pagarme?: string | null
          order_code?: string | null
          status?: string | null
          telefone?: string | null
          url?: string | null
        }
        Update: {
          cliente?: string
          data_criacao?: string | null
          empresa?: string | null
          forma_pagamento?: string | null
          id?: number
          id_pagarme?: string | null
          order_code?: string | null
          status?: string | null
          telefone?: string | null
          url?: string | null
        }
        Relationships: []
      }
      produtos_meucarrinho: {
        Row: {
          cor: string | null
          descricao: string | null
          id: number
          sku_cor: string
          sku_pai: string
          status: string | null
          valor_unitario: number | null
        }
        Insert: {
          cor?: string | null
          descricao?: string | null
          id: number
          sku_cor: string
          sku_pai: string
          status?: string | null
          valor_unitario?: number | null
        }
        Update: {
          cor?: string | null
          descricao?: string | null
          id?: number
          sku_cor?: string
          sku_pai?: string
          status?: string | null
          valor_unitario?: number | null
        }
        Relationships: []
      }
      ribus: {
        Row: {
          atendimentoFinalizado: boolean | null
          botOff: boolean | null
          FollowUp: number | null
          id: number
          nome: string | null
          possuiThread: boolean | null
          remoteJid: string | null
          Thread: string | null
          timeStemp: string | null
        }
        Insert: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string | null
          Thread?: string | null
          timeStemp?: string | null
        }
        Update: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string | null
          Thread?: string | null
          timeStemp?: string | null
        }
        Relationships: []
      }
      saudemax: {
        Row: {
          AtendimentoFinalizado: boolean
          id: number
          nome: string | null
          remoteJid: string | null
          Timestamp: string | null
        }
        Insert: {
          AtendimentoFinalizado: boolean
          id?: number
          nome?: string | null
          remoteJid?: string | null
          Timestamp?: string | null
        }
        Update: {
          AtendimentoFinalizado?: boolean
          id?: number
          nome?: string | null
          remoteJid?: string | null
          Timestamp?: string | null
        }
        Relationships: []
      }
      Tools_EVA: {
        Row: {
          descrição: string | null
          id: number
          nome: string | null
          tool: Json | null
          type: string | null
        }
        Insert: {
          descrição?: string | null
          id?: number
          nome?: string | null
          tool?: Json | null
          type?: string | null
        }
        Update: {
          descrição?: string | null
          id?: number
          nome?: string | null
          tool?: Json | null
          type?: string | null
        }
        Relationships: []
      }
      Tools_Function: {
        Row: {
          descrição: string | null
          id: number
          nome: string | null
          tool: Json | null
          type: string | null
        }
        Insert: {
          descrição?: string | null
          id?: number
          nome?: string | null
          tool?: Json | null
          type?: string | null
        }
        Update: {
          descrição?: string | null
          id?: number
          nome?: string | null
          tool?: Json | null
          type?: string | null
        }
        Relationships: []
      }
      venus: {
        Row: {
          atendimentoFinalizado: boolean | null
          ativo: string | null
          bot_lastInteraction: string | null
          botOff: boolean | null
          contact_id: string | null
          data_agendamento: string | null
          email_usuario: string | null
          FollowUp: number | null
          hora_agendamento: string | null
          id: number
          id_calendar: string | null
          lead_id: string | null
          link_meet: string | null
          nome: string | null
          numero_formatado: string | null
          possui_automacao_atendimento: string | null
          possui_processo_comercial: string | null
          possuiThread: boolean | null
          remoteJid: string | null
          serviço_agendamento: string | null
          site_usuario: string | null
          task_id: string | null
          Thread: string | null
          timeStemp: string | null
          user_lastInteraction: string | null
        }
        Insert: {
          atendimentoFinalizado?: boolean | null
          ativo?: string | null
          bot_lastInteraction?: string | null
          botOff?: boolean | null
          contact_id?: string | null
          data_agendamento?: string | null
          email_usuario?: string | null
          FollowUp?: number | null
          hora_agendamento?: string | null
          id?: number
          id_calendar?: string | null
          lead_id?: string | null
          link_meet?: string | null
          nome?: string | null
          numero_formatado?: string | null
          possui_automacao_atendimento?: string | null
          possui_processo_comercial?: string | null
          possuiThread?: boolean | null
          remoteJid?: string | null
          serviço_agendamento?: string | null
          site_usuario?: string | null
          task_id?: string | null
          Thread?: string | null
          timeStemp?: string | null
          user_lastInteraction?: string | null
        }
        Update: {
          atendimentoFinalizado?: boolean | null
          ativo?: string | null
          bot_lastInteraction?: string | null
          botOff?: boolean | null
          contact_id?: string | null
          data_agendamento?: string | null
          email_usuario?: string | null
          FollowUp?: number | null
          hora_agendamento?: string | null
          id?: number
          id_calendar?: string | null
          lead_id?: string | null
          link_meet?: string | null
          nome?: string | null
          numero_formatado?: string | null
          possui_automacao_atendimento?: string | null
          possui_processo_comercial?: string | null
          possuiThread?: boolean | null
          remoteJid?: string | null
          serviço_agendamento?: string | null
          site_usuario?: string | null
          task_id?: string | null
          Thread?: string | null
          timeStemp?: string | null
          user_lastInteraction?: string | null
        }
        Relationships: []
      }
      viajecer: {
        Row: {
          atendimentoFinalizado: boolean | null
          botOff: boolean | null
          FollowUp: number | null
          id: number
          id_msg: string | null
          nome: string | null
          possuiThread: boolean | null
          remoteJid: string | null
          Thread: string | null
          timeStemp: string | null
        }
        Insert: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          id_msg?: string | null
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string | null
          Thread?: string | null
          timeStemp?: string | null
        }
        Update: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          id_msg?: string | null
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string | null
          Thread?: string | null
          timeStemp?: string | null
        }
        Relationships: []
      }
      whatsapp_fazenda_santarosa: {
        Row: {
          atendimentoFinalizado: boolean | null
          botOff: boolean | null
          FollowUp: number | null
          id: number
          id_msg: string | null
          nome: string | null
          possuiThread: boolean | null
          remoteJid: string | null
          Thread: string | null
          timeStemp: string | null
        }
        Insert: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          id_msg?: string | null
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string | null
          Thread?: string | null
          timeStemp?: string | null
        }
        Update: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          id_msg?: string | null
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string | null
          Thread?: string | null
          timeStemp?: string | null
        }
        Relationships: []
      }
      zommer: {
        Row: {
          atendimentoFinalizado: boolean | null
          botOff: boolean | null
          FollowUp: number | null
          id: number
          nome: string | null
          possuiThread: boolean | null
          remoteJid: string
          Thread: string | null
          timeStemp: string | null
        }
        Insert: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid: string
          Thread?: string | null
          timeStemp?: string | null
        }
        Update: {
          atendimentoFinalizado?: boolean | null
          botOff?: boolean | null
          FollowUp?: number | null
          id?: number
          nome?: string | null
          possuiThread?: boolean | null
          remoteJid?: string
          Thread?: string | null
          timeStemp?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      match_documents: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
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
