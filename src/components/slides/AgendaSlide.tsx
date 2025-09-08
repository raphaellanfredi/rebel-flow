import React from 'react';
import { Target, Clock, Zap, Rocket } from 'lucide-react';

const AgendaSlide: React.FC = () => {
  const agendaItems = [
    {
      icon: Target,
      title: "DESTROÇANDO MITOS",
      description: "Verdades que ninguém te conta sobre IA",
      time: "5 min",
      color: "border-l-red-500"
    },
    {
      icon: Clock,
      title: "FRAMEWORK FODA",
      description: "O método que multiplica suas vendas",
      time: "15 min", 
      color: "border-l-orange-500"
    },
    {
      icon: Zap,
      title: "EVA EM AÇÃO",
      description: "Demo ao vivo do sistema funcionando",
      time: "10 min",
      color: "border-l-yellow-500"
    },
    {
      icon: Rocket,
      title: "IMPLEMENTAÇÃO",
      description: "Como aplicar na sua empresa hoje",
      time: "10 min",
      color: "border-l-green-500"
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-16">
          <h1 className="text-title font-black text-neon-red uppercase mb-4">
            AGENDA DA <span className="text-neon-orange">REVOLUÇÃO</span>
          </h1>
          <p className="text-body text-muted-foreground">
            Prepare-se para descobrir o que pode mudar seu negócio para sempre
          </p>
        </div>

        <div className="relative container-responsive">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-green-500"></div>

          {/* Timeline Items */}
          <div className="space-y-4 md:space-y-8">
            {agendaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className={`relative md:pl-20 animate-fade-slide-up timeline-mobile`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden md:block absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg shadow-red-500/50"></div>
                  
                  {/* Content Card */}
                  <div className={`stat-card border-l-4 ${item.color}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/20 text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-neon-orange">
                          {item.time}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase">
                          DURAÇÃO
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg font-bold text-neon-red uppercase tracking-wider animate-pulse-glow">
            🔥 PREPARE-SE PARA A REVOLUÇÃO 🔥
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgendaSlide;