import React from 'react';
import { Zap, Clock, Target } from 'lucide-react';

const ImmediateActionSlide: React.FC = () => {
  const chatExamples = [
    {
      title: "PROBLEMA → SOLUÇÃO → AÇÃO",
      problem: "Preciso aumentar vendas",
      solution: "EVA pode qualificar leads 24/7",
      action: "Agende demo agora mesmo",
      timing: "15 segundos",
      color: "border-red-500"
    },
    {
      title: "DÚVIDA → ESCLARECIMENTO → CONVERSÃO", 
      problem: "Como funciona a IA?",
      solution: "Vou mostrar um exemplo prático",
      action: "Quer ver funcionando ao vivo?",
      timing: "12 segundos",
      color: "border-orange-500"
    },
    {
      title: "INTERESSE → QUALIFICAÇÃO → FECHAMENTO",
      problem: "Quero conhecer a solução",
      solution: "Perfeito! Qual seu faturamento?",
      action: "Com R$ 500k: Demo Premium às 15h?",
      timing: "8 segundos",
      color: "border-green-500"
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-16">
          <h1 className="text-title font-black text-neon-red uppercase">
            AÇÃO <span className="text-neon-orange">IMEDIATA</span>
          </h1>
          <p className="text-body text-muted-foreground">
            EVA transforma conversas em conversões em segundos
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {chatExamples.map((example, index) => (
            <div 
              key={index}
              className={`bg-card/50 border-l-4 ${example.color} rounded-lg p-6 animate-fade-slide-up`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                {/* Header */}
                <div className="lg:col-span-4 mb-4">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide text-center">
                    {example.title}
                  </h3>
                </div>

                {/* Problem */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-400 text-xl">❗</span>
                  </div>
                  <h4 className="font-bold text-red-400 mb-2">PROBLEMA</h4>
                  <p className="text-sm text-red-300 italic">"{example.problem}"</p>
                </div>

                {/* Arrow */}
                <div className="text-center">
                  <Zap className="w-8 h-8 text-neon-orange mx-auto animate-pulse" />
                </div>

                {/* Solution */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-blue-400 mb-2">SOLUÇÃO EVA</h4>
                  <p className="text-sm text-blue-300 italic">"{example.solution}"</p>
                </div>

                {/* Action */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-400 text-xl">🎯</span>
                  </div>
                  <h4 className="font-bold text-green-400 mb-2">AÇÃO</h4>
                  <p className="text-sm text-green-300 italic font-bold">"{example.action}"</p>
                </div>

                {/* Timing */}
                <div className="lg:col-span-4 text-center mt-4">
                  <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-lg px-4 py-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-primary font-bold">
                      Tempo total: {example.timing}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-6">
          <p className="text-3xl font-black text-neon-red uppercase tracking-wide">
            ISSO É <span className="text-neon-orange">MÁQUINA DE VENDAS</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="stat-card">
              <div className="text-center">
                <div className="text-3xl font-black text-neon-red mb-2">0s</div>
                <div className="text-sm text-muted-foreground uppercase">Tempo de espera</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="text-center">
                <div className="text-3xl font-black text-neon-orange mb-2">3</div>
                <div className="text-sm text-muted-foreground uppercase">Passos para venda</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="text-center">
                <div className="text-3xl font-black text-green-400 mb-2">85%</div>
                <div className="text-sm text-muted-foreground uppercase">Taxa conversão</div>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground">
            Enquanto humanos perdem tempo, EVA está <span className="text-neon-red font-bold">FECHANDO VENDAS</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImmediateActionSlide;