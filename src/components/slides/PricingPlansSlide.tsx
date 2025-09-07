import React from 'react';
import { Check, Crown, Zap } from 'lucide-react';

const PricingPlansSlide: React.FC = () => {
  const plans = [
    {
      name: "EVA 1",
      subtitle: "Para começar",
      price: "777",
      setup: "6.643,91",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Até 1.500 atendimentos/mês",
        "3 mensagens de recuperação",
        "Disparo em massa segmentado",
        "1 conexão (WhatsApp ou Instagram)",
        "3 usuários",
        "CRM nativo",
        "Integração Google Agenda"
      ],
      accent: "border-primary/50 bg-primary/5",
      popular: false
    },
    {
      name: "EVA PRO",
      subtitle: "Recomendado",
      price: "1.529,99",
      setup: "6.643,91",
      icon: <Crown className="w-8 h-8 text-secondary" />,
      features: [
        "Até 3.500 atendimentos/mês",
        "3 mensagens de recuperação",
        "Disparo em massa segmentado",
        "2 conexões (WhatsApp + Instagram)",
        "7 usuários",
        "CRM nativo",
        "Integração Google Agenda"
      ],
      accent: "border-secondary bg-secondary/10 scale-105",
      popular: true
    },
    {
      name: "EVA BLACK",
      subtitle: "Máxima performance",
      price: "3.509,99",
      setup: "6.643,91",
      icon: <Crown className="w-8 h-8" />,
      features: [
        "Até 9.600 atendimentos/mês",
        "Suporte Premium",
        "Infraestrutura escalável",
        "7 mensagens de recuperação",
        "Disparo em massa segmentado",
        "2 conexões (WhatsApp + Instagram)",
        "7 usuários",
        "CRM nativo",
        "Integração Google Agenda"
      ],
      accent: "border-primary/50 bg-primary/5",
      popular: false
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-neon-red uppercase tracking-wider mb-6">
            ESCOLHA SEU
            <span className="text-neon-orange block">ARSENAL</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Diferentes níveis de firepower para diferentes batalhas
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`
                relative p-8 rounded-2xl border-2 transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                ${plan.accent}
                ${plan.popular ? 'shadow-2xl shadow-secondary/20' : ''}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                    🔥 RECOMENDADO
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wide">
                  {plan.subtitle}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8 space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    Implantação
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    R$ {plan.setup}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    Mensalidade
                  </div>
                  <div className={`text-4xl font-black ${plan.popular ? 'text-secondary' : 'text-primary'}`}>
                    R$ {plan.price}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-secondary' : 'text-primary'}`} />
                    <span className="text-sm text-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button className={`
                  w-full py-4 px-6 rounded-lg font-bold uppercase tracking-wider
                  transition-all duration-300 hover:scale-105
                  ${plan.popular 
                    ? 'bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl hover:shadow-secondary/50' 
                    : 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/50'
                  }
                `}>
                  {plan.popular ? 'QUERO DOMINAR' : 'ESCOLHER PLANO'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            <span className="text-neon-red font-bold">Implementação em 21 dias</span> • 
            <span className="text-neon-orange font-bold"> Sem multa de cancelamento</span> • 
            <span className="text-green-400 font-bold"> ROI garantido 5x</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlansSlide;