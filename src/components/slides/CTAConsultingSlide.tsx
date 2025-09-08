import React from 'react';
import { CheckCircle, Clock, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTAConsultingSlide: React.FC = () => {
  const qualifications = [
    { icon: CheckCircle, text: "Empresa com faturamento R$ 200k+/mês", color: "text-green-400" },
    { icon: Users, text: "Equipe de vendas com 3+ pessoas", color: "text-blue-400" },
    { icon: Zap, text: "Quer aumentar conversões em 300%+", color: "text-neon-orange" },
    { icon: Clock, text: "Disponível para implementação em 30 dias", color: "text-purple-400" },
  ];

  return (
    <div className="slide-container relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="slide-content relative z-10">
        <div className="text-center mb-16 space-y-6">
          {/* Breaking Chains Effect */}
          <div className="relative">
            <h1 className="text-base md:text-lg lg:text-2xl font-black text-neon-red uppercase tracking-wider leading-none animate-slide-diagonal">
              QUEBRE SUAS
              <br />
              <span className="text-neon-orange relative">
                CORRENTES
              </span>
            </h1>
          </div>

          <p className="text-subtitle font-bold text-white">
            Consultoria GRATUITA para implementar EVA
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Offer Highlight */}
          <div className="bg-card/80 backdrop-blur-sm border-2 border-primary rounded-xl p-8 text-center animate-fade-slide-up">
            <div className="space-y-6">
              <div className="text-6xl font-black text-neon-orange animate-pulse-glow">
                GRATUITA
              </div>
              
              <h2 className="text-3xl font-bold text-white uppercase tracking-wide">
                CONSULTORIA ESTRATÉGICA EVA
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Análise completa do seu funil de vendas + estratégia personalizada 
                para implementar IA conversacional que <span className="text-neon-red font-bold">MULTIPLICA</span> suas vendas
              </p>

              {/* Value Stack */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 md:p-4">
                  <div className="text-lg md:text-2xl font-bold text-primary">R$ 5.000</div>
                  <div className="text-xs md:text-sm text-primary-foreground">Análise de funil</div>
                </div>
                <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-3 md:p-4">
                  <div className="text-lg md:text-2xl font-bold text-secondary">R$ 8.000</div>
                  <div className="text-xs md:text-sm text-white">Estratégia personalizada</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 md:p-4">
                  <div className="text-lg md:text-2xl font-bold text-green-400">R$ 3.000</div>
                  <div className="text-xs md:text-sm text-green-300">Roadmap implementação</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-black text-neon-red line-through opacity-60">R$ 16.000</div>
                <div className="text-6xl font-black text-green-400 animate-counter-up">GRÁTIS</div>
                <p className="text-sm text-green-300 uppercase tracking-wide">Para os primeiros 12 clientes</p>
              </div>
            </div>
          </div>

          {/* Qualification Checklist */}
          <div className="animate-fade-slide-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl font-bold text-center text-white mb-8 uppercase tracking-wide">
              VOCÊ SE QUALIFICA SE:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualifications.map((qual, index) => {
                const Icon = qual.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 bg-card/50 border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300"
                    style={{ animationDelay: `${0.7 + (index * 0.1)}s` }}
                  >
                    <Icon className={`w-6 h-6 ${qual.color}`} />
                    <span className="text-white font-medium">{qual.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center space-y-6 animate-fade-slide-up" style={{ animationDelay: '1s' }}>
            <Button className="btn-rebel text-2xl px-16 py-8 shadow-xl shadow-red-500/50">
              GARANTA SUA VAGA
            </Button>
            
            {/* Scarcity */}
            <div className="inline-flex items-center gap-3 bg-destructive/20 border border-destructive/50 rounded-lg px-6 py-3">
              <Clock className="w-5 h-5 text-destructive animate-pulse" />
              <span className="text-destructive font-bold uppercase tracking-wider">
                Apenas 12 vagas restantes
              </span>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="text-center animate-fade-slide-up" style={{ animationDelay: '1.2s' }}>
            <p className="text-sm text-muted-foreground">
              Não deixe seus concorrentes saírem na frente
            </p>
            <p className="text-base font-bold text-neon-orange uppercase tracking-wide mt-2">
              REVOLUCIONE AGORA OU FIQUE PARA TRÁS
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CTAConsultingSlide;