import React from 'react';
import { Target, Clock, Zap, Rocket } from 'lucide-react';

const FrameworkFodaSlide: React.FC = () => {
  const fodaElements = [
    {
      letter: "F",
      title: "FOCO LASER",
      description: "Conversa direcionada ao objetivo",
      icon: Target,
      color: "from-red-500 to-red-600",
      delay: 0
    },
    {
      letter: "O", 
      title: "OPORTUNIDADE 24/7",
      description: "Vendas acontecem a qualquer hora",
      icon: Clock,
      color: "from-orange-500 to-orange-600",
      delay: 0.3
    },
    {
      letter: "D",
      title: "DECISÃO INSTANTÂNEA", 
      description: "Respostas inteligentes em segundos",
      icon: Zap,
      color: "from-yellow-500 to-yellow-600",
      delay: 0.6
    },
    {
      letter: "A",
      title: "AÇÃO IMEDIATA",
      description: "Conduz direto para a conversão",
      icon: Rocket,
      color: "from-green-500 to-green-600",
      delay: 0.9
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-16">
          <h1 className="text-title font-black text-neon-red uppercase mb-8">
            FRAMEWORK <span className="text-neon-orange">FODA</span>
          </h1>
          <p className="text-body text-muted-foreground">
            O método que multiplica vendas através de IA conversacional
          </p>
        </div>

        {/* Central Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-primary-glow shadow-glow animate-pulse-glow">
            <span className="text-4xl font-black text-white">FODA</span>
          </div>
        </div>

        {/* FODA Grid */}
        <div className="foda-grid max-w-6xl mx-auto">
          {fodaElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <div 
                key={index}
                className="foda-item animate-fade-slide-up"
                style={{ animationDelay: `${element.delay}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* Letter Badge */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${element.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-black text-white">
                      {element.letter}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                        {element.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {element.description}
                    </p>
                  </div>
                </div>

                {/* Connection Lines */}
                {index < 3 && (
                  <div className="absolute -bottom-6 left-1/2 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent hidden md:block"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-2xl font-bold text-neon-red uppercase tracking-wide">
            4 pilares para <span className="text-neon-orange">SUCESSO GARANTIDO</span>
          </p>
          <p className="text-muted-foreground">
            Cada elemento trabalhando em sinergia para maximizar conversões
          </p>
        </div>

        {/* Framework Connections */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Add subtle connection lines between elements */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FrameworkFodaSlide;