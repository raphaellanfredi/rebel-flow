import React from 'react';
import { Play, Eye, Settings, Zap } from 'lucide-react';
import evaLogo from '@/assets/eva-logo-white.png';

const DemoSetupSlide: React.FC = () => {
  const scenarios = [
    {
      icon: "🎯",
      title: "LEAD QUALIFICAÇÃO",
      description: "Cliente interessado em produtos"
    },
    {
      icon: "💰", 
      title: "FECHAMENTO VENDA",
      description: "Prospect pronto para comprar"
    },
    {
      icon: "🔥",
      title: "OBJEÇÃO HANDLING",
      description: "Cliente com dúvidas sobre preço"
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-16">
          <h1 className="text-title font-black text-neon-red uppercase">
            SETUP DEMO <span className="text-neon-orange">EVA</span>
          </h1>
          <p className="text-body text-muted-foreground">
            Vamos ver a IA em ação ao vivo
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Demo Interface */}
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 mb-12 animate-fade-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left - EVA Interface */}
              <div className="lg:col-span-2 space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4 bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <img src={evaLogo} alt="EVA" className="w-12 h-12" />
                  <div>
                    <h3 className="text-xl font-bold text-primary">EVA INTELIGÊNCIA</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400 font-medium uppercase tracking-wide">
                        AO VIVO
                      </span>
                    </div>
                  </div>
                </div>

                {/* Framework FODA in Real Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-400 font-bold">F</span>
                      <span className="text-sm font-medium text-white">FOCO ATIVO</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Pergunta qualificadora pronta</div>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-orange-400 font-bold">O</span>
                      <span className="text-sm font-medium text-white">24/7 ONLINE</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Capturando leads agora</div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-400 font-bold">D</span>
                      <span className="text-sm font-medium text-white">DECISÃO IA</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Processamento instantâneo</div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-400 font-bold">A</span>
                      <span className="text-sm font-medium text-white">AÇÃO DIRETA</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Conduz para conversão</div>
                  </div>
                </div>

                {/* Live Metrics */}
                <div className="bg-muted/10 border border-muted/30 rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400 animate-counter-up">47</div>
                      <div className="text-xs text-muted-foreground">Conversas hoje</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neon-orange animate-counter-up">89%</div>
                      <div className="text-xs text-muted-foreground">Taxa qualificação</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neon-red animate-counter-up">12</div>
                      <div className="text-xs text-muted-foreground">Demos agendadas</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Scenarios */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white uppercase text-center">
                  CENÁRIOS DEMO
                </h3>
                
                {scenarios.map((scenario, index) => (
                  <div 
                    key={index}
                    className="bg-muted/10 border border-muted/30 rounded-lg p-4 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{scenario.icon}</span>
                      <div>
                        <h4 className="font-bold text-white text-sm">{scenario.title}</h4>
                        <p className="text-xs text-muted-foreground">{scenario.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Controls */}
          <div className="flex justify-center gap-6">
            <button className="btn-rebel flex items-center gap-3">
              <Play className="w-5 h-5" />
              INICIAR DEMO
            </button>
            
            <button className="btn-electric flex items-center gap-3">
              <Eye className="w-5 h-5" />
              MODO OBSERVAÇÃO
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-neon-red uppercase tracking-wide">
            FRAMEWORK FODA <span className="text-neon-orange">FUNCIONANDO</span>
          </p>
          <p className="text-muted-foreground mt-2">
            Veja a IA qualificar, decidir e converter em tempo real
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoSetupSlide;