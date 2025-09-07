import React from 'react';
import { Users, TrendingUp, Target } from 'lucide-react';

const IntroSlide: React.FC = () => {
  const stats = [
    { icon: Users, value: "200+", label: "Empresas Implementadas", color: "text-neon-red" },
    { icon: TrendingUp, value: "5x", label: "ROI Médio", color: "text-neon-orange" },
    { icon: Target, value: "85%", label: "Conversão Média", color: "text-green-400" },
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio */}
          <div className="space-y-6 animate-fade-slide-up">
            <div className="space-y-4">
              <h1 className="text-title font-bold text-neon-red uppercase">
                Especialista em
                <br />
                <span className="text-white">IA Conversacional</span>
              </h1>
              
              <div className="w-24 h-1 bg-primary"></div>
              
              <p className="text-body text-muted-foreground leading-relaxed">
                Desenvolvedor do Framework FODA que revolucionou como empresas 
                vendem através de IA. Transformando conversas em conversões há mais de 5 anos.
              </p>
              
              <div className="space-y-2">
                <p className="text-sm text-primary font-medium">✓ Criador do Método EVA</p>
                <p className="text-sm text-primary font-medium">✓ +50 Milhões em Vendas Geradas</p>
                <p className="text-sm text-primary font-medium">✓ Expert em Automação Inteligente</p>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-white mb-8">
              NÚMEROS QUE <span className="text-neon-red">IMPRESSIONAM</span>
            </h2>
            
            <div className="grid gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="stat-card group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-primary/20 ${stat.color}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <div className={`text-4xl font-black ${stat.color} animate-counter-up`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center pt-6">
              <p className="text-sm text-neon-orange font-bold uppercase tracking-wider">
                RESULTADOS COMPROVADOS EM MERCADO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;