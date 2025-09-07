import React from 'react';
import { User, Bot, Clock, CheckCircle } from 'lucide-react';

const DecisionTreeSlide: React.FC = () => {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-16">
          <h1 className="text-title font-black text-foreground uppercase">
            ÁRVORE DE <span className="text-primary">DECISÃO</span>
          </h1>
          <p className="text-body text-muted-foreground">
            Fluxo de qualificação e conversão
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Starting Point */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-blue-500/20 border border-blue-500/50 rounded-lg px-6 py-3">
              <span className="text-2xl">👤</span>
              <span className="text-xl font-bold text-blue-400">LEAD CHEGA</span>
            </div>
          </div>

          {/* Split Path - Left Aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Human Path */}
            <div className="space-y-6 animate-fade-slide-up">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-red-500/20 border border-red-500/50 rounded-lg px-6 py-3 mb-6">
                  <User className="w-6 h-6 text-red-400" />
                  <span className="text-xl font-bold text-red-400">ATENDIMENTO HUMANO</span>
                </div>
              </div>

              {/* Human Decision Tree */}
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-400">Demora para responder</span>
                  </div>
                  <p className="text-sm text-red-300">Cliente espera 5-10 minutos</p>
                </div>

                <div className="ml-6 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-red-400">❓</span>
                    <span className="font-bold text-red-400">Faz perguntas genéricas</span>
                  </div>
                  <p className="text-sm text-red-300">"Como posso ajudar?"</p>
                </div>

                <div className="ml-12 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-red-400">🤔</span>
                    <span className="font-bold text-red-400">Cliente explica tudo</span>
                  </div>
                  <p className="text-sm text-red-300">Mais 5 minutos perdidos</p>
                </div>

                <div className="ml-18 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-red-400">❌</span>
                    <span className="font-bold text-red-400">Talvez feche venda</span>
                  </div>
                  <p className="text-sm text-red-300">Taxa de conversão: 30%</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">⏱️ 5 min</div>
                <div className="text-sm text-red-300">Tempo médio</div>
              </div>
            </div>

            {/* EVA Path */}
            <div className="space-y-6 animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/50 rounded-lg px-6 py-3 mb-6">
                  <Bot className="w-6 h-6 text-green-400" />
                  <span className="text-xl font-bold text-green-400">ATENDIMENTO EVA</span>
                </div>
              </div>

              {/* EVA Decision Tree */}
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-400">Resposta instantânea</span>
                  </div>
                  <p className="text-sm text-green-300">0 segundos de espera</p>
                </div>

                <div className="ml-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-green-400">🎯</span>
                    <span className="font-bold text-green-400">Pergunta qualificadora</span>
                  </div>
                  <p className="text-sm text-green-300">"Qual seu faturamento mensal?"</p>
                </div>

                <div className="ml-12 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-green-400">⚡</span>
                    <span className="font-bold text-green-400">Qualifica e direciona</span>
                  </div>
                  <p className="text-sm text-green-300">Solução personalizada imediata</p>
                </div>

                <div className="ml-18 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-green-400">✅</span>
                    <span className="font-bold text-green-400">Fecha venda</span>
                  </div>
                  <p className="text-sm text-green-300">Taxa de conversão: 85%</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">⚡ 30s</div>
                <div className="text-sm text-green-300">Tempo médio</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-2xl font-bold text-foreground uppercase tracking-wide">
            EVA é <span className="text-primary">5x MAIS RÁPIDA</span>
          </p>
          <p className="text-muted-foreground">
            E 3x mais eficiente na conversão
          </p>
        </div>
      </div>
    </div>
  );
};

export default DecisionTreeSlide;