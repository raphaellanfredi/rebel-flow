import React from 'react';
import { MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

const EvaInActionSlide: React.FC = () => {
  const demoSteps = [
    {
      step: 1,
      timestamp: "14:30:12",
      message: "Olá! Sou a EVA. Vi que você está interessado em nossa solução de IA.",
      annotation: "FOCO: Qualificação imediata",
      type: "eva"
    },
    {
      step: 2, 
      timestamp: "14:30:15",
      message: "Sim, quero saber mais sobre como pode ajudar minha empresa",
      annotation: "Cliente engajado",
      type: "client"
    },
    {
      step: 3,
      timestamp: "14:30:18", 
      message: "Perfeito! Para personalizar a demonstração: qual o faturamento mensal da sua empresa?",
      annotation: "OPORTUNIDADE: Qualificação estratégica",
      type: "eva"
    },
    {
      step: 4,
      timestamp: "14:30:25",
      message: "Faturamos cerca de R$ 800mil por mês",
      annotation: "Lead qualificado - Alto valor",
      type: "client"
    },
    {
      step: 5,
      timestamp: "14:30:28",
      message: "Excelente! Para empresas do seu porte, nossa EVA Premium pode aumentar conversões em até 300%. Posso agendar uma demo personalizada agora?",
      annotation: "DECISÃO: Solução específica + AÇÃO: CTA direto",
      type: "eva"
    },
    {
      step: 6,
      timestamp: "14:30:35",
      message: "Sim! Quero ver funcionando",
      annotation: "CONVERSÃO REALIZADA ✅",
      type: "client"
    }
  ];

  const ChatBubble = ({ step, isEva }: { step: any, isEva: boolean }) => (
    <div className={`flex ${isEva ? 'justify-start' : 'justify-end'} mb-6 animate-fade-slide-up`} style={{ animationDelay: `${step.step * 0.5}s` }}>
      <div className="max-w-md">
        <div className={`px-4 py-3 rounded-lg border ${
          isEva 
            ? 'bg-primary/20 border-primary/50 text-primary-foreground' 
            : 'bg-blue-500/20 border-blue-500/50 text-blue-100'
        }`}>
          <p className="text-sm mb-2">{step.message}</p>
          <p className="text-xs opacity-60">{step.timestamp}</p>
        </div>
        
        {/* Annotation */}
        <div className={`mt-2 flex items-center gap-2 ${isEva ? 'justify-start' : 'justify-end'}`}>
          <ArrowRight className={`w-4 h-4 text-neon-orange ${!isEva && 'rotate-180'}`} />
          <span className="text-xs text-neon-orange font-bold uppercase tracking-wide">
            {step.annotation}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-title font-black text-neon-red uppercase">
            EVA EM <span className="text-neon-orange">AÇÃO</span>
          </h1>
          <p className="text-body text-muted-foreground">
            Demo real: de interesse à conversão em 23 segundos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Chat Interface */}
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 mb-8">
            <div className="h-96 overflow-y-auto space-y-4">
              {demoSteps.map((step) => (
                <ChatBubble 
                  key={step.step} 
                  step={step} 
                  isEva={step.type === 'eva'} 
                />
              ))}
            </div>
          </div>

          {/* Framework FODA Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="stat-card bg-red-500/10 border-red-500/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">F</div>
                <div className="text-sm text-red-300">FOCO aplicado</div>
                <div className="text-xs text-muted-foreground mt-1">Pergunta qualificadora</div>
              </div>
            </div>

            <div className="stat-card bg-orange-500/10 border-orange-500/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">O</div>
                <div className="text-sm text-orange-300">OPORTUNIDADE</div>
                <div className="text-xs text-muted-foreground mt-1">Cliente R$ 800k</div>
              </div>
            </div>

            <div className="stat-card bg-yellow-500/10 border-yellow-500/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">D</div>
                <div className="text-sm text-yellow-300">DECISÃO</div>
                <div className="text-xs text-muted-foreground mt-1">EVA Premium</div>
              </div>
            </div>

            <div className="stat-card bg-green-500/10 border-green-500/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">A</div>
                <div className="text-sm text-green-300">AÇÃO</div>
                <div className="text-xs text-muted-foreground mt-1">Demo agendada</div>
              </div>
            </div>
          </div>

          {/* Metrics Sidebar */}
          <div className="bg-muted/10 border border-muted/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white text-center mb-6">
              MÉTRICAS EM TEMPO REAL
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-green-400 animate-counter-up">23s</div>
                <div className="text-sm text-green-300">Tempo total</div>
              </div>
              
              <div>
                <div className="text-3xl font-black text-neon-orange animate-counter-up">6</div>
                <div className="text-sm text-orange-300">Mensagens apenas</div>
              </div>
              
              <div>
                <div className="text-3xl font-black text-neon-red animate-counter-up">1</div>
                <div className="text-sm text-red-300">Demo agendada</div>
              </div>
              
              <div>
                <div className="text-3xl font-black text-blue-400 animate-counter-up">100%</div>
                <div className="text-sm text-blue-300">Taxa conversão</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-neon-red uppercase tracking-wide">
            FRAMEWORK FODA <span className="text-neon-orange">FUNCIONANDO</span>
          </p>
          <p className="text-muted-foreground mt-2">
            De desconhecido para lead qualificado em menos de 30 segundos
          </p>
        </div>
      </div>
    </div>
  );
};

export default EvaInActionSlide;