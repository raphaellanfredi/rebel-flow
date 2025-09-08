import React from 'react';
import { Users, TrendingUp, Target, CheckCircle } from 'lucide-react';

const IntroSlide: React.FC = () => {
  const stats = [
    { 
      icon: Users, 
      value: "200+", 
      label: "Empresas Implementadas", 
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    { 
      icon: TrendingUp, 
      value: "5x", 
      label: "ROI Médio", 
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    { 
      icon: Target, 
      value: "85%", 
      label: "Conversão Média", 
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
  ];

  const credentials = [
    "Criador do Método FODA",
    "+20 Milhões em Vendas Geradas", 
    "Expert em Automação Inteligente"
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="intro-grid">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-title text-foreground font-bold uppercase tracking-wide">
                  Especialista em
                  <br />
                  <span className="text-primary">IA Conversacional</span>
                </h1>
                
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              
                <p className="text-body text-muted-foreground leading-relaxed max-w-lg">
                  Desenvolvedor do <span className="text-primary font-semibold">Método FODA</span> que revolucionou como empresas 
                  vendem através de IA. Transformando conversas em conversões há mais de 5 anos.
                </p>
              
              <div className="credentials-list">
                {credentials.map((credential, index) => (
                  <div key={index} className="credential-item">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="text-center mb-8">
              <h2 className="text-subtitle font-bold text-foreground mb-2">
                NÚMEROS QUE <span className="text-primary">IMPRESSIONAM</span>
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="stat-card group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`stat-icon ${stat.bgColor}`}>
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className={`stat-value ${stat.color}`}>
                          {stat.value}
                        </div>
                        <div className="stat-label text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center pt-6 border-t border-border/30">
              <p className="text-sm text-secondary font-semibold uppercase tracking-wider">
                Resultados Comprovados em Mercado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;