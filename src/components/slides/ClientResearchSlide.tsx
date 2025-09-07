import React from 'react';
import { Clock, CheckCircle, Zap } from 'lucide-react';

const ClientResearchSlide: React.FC = () => {
  const desires = [
    { icon: Clock, percentage: 85, text: "Resposta IMEDIATA", color: "text-red-400" },
    { icon: CheckCircle, percentage: 92, text: "Informação CORRETA", color: "text-green-400" },
    { icon: Zap, percentage: 89, text: "Solução RÁPIDA", color: "text-orange-400" },
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-16">
          <h1 className="text-title font-black text-neon-red uppercase mb-8">
            O que cliente <span className="text-neon-orange">REALMENTE</span> quer?
          </h1>
          <p className="text-body text-muted-foreground">
            Pesquisa com +1000 clientes B2B no Brasil
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {desires.map((desire, index) => {
              const Icon = desire.icon;
              const circumference = 2 * Math.PI * 60;
              const strokeDasharray = circumference;
              const strokeDashoffset = circumference - (desire.percentage / 100) * circumference;

              return (
                <div 
                  key={index}
                  className="text-center animate-fade-slide-up"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Circular Progress */}
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <svg className="transform -rotate-90 w-40 h-40">
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-muted/20"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className={desire.color}
                        style={{
                          transition: 'stroke-dashoffset 2s ease-in-out',
                          animationDelay: `${index * 0.3}s`
                        }}
                      />
                    </svg>
                    
                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className={`p-3 rounded-full bg-card mb-2 ${desire.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className={`text-3xl font-black ${desire.color} animate-counter-up`}>
                        {desire.percentage}%
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                    {desire.text}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-xl font-bold text-neon-red uppercase tracking-wide">
            Cliente quer VELOCIDADE + PRECISÃO
          </p>
          <p className="text-muted-foreground">
            Exatamente o que a EVA oferece 24/7
          </p>
          
          <div className="inline-flex items-center gap-3 bg-primary/20 border border-primary/50 rounded-lg px-6 py-3 mt-6">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold uppercase tracking-wider">
              EVA entrega os 3 ao mesmo tempo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientResearchSlide;