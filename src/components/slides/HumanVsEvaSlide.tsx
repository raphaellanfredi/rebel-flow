import React from 'react';
import { Clock, Frown, TrendingDown, Bot, Smile, TrendingUp } from 'lucide-react';

const HumanVsEvaSlide: React.FC = () => {
  const humanProblems = [
    { icon: Clock, text: "Chega atrasado", color: "text-red-400" },
    { icon: Frown, text: "Tem mau humor", color: "text-red-400" },
    { icon: TrendingDown, text: "Converte apenas 30%", color: "text-red-400" },
    { text: "Precisa de férias", color: "text-red-400" },
    { text: "Erra informações", color: "text-red-400" },
  ];

  const evaBenefits = [
    { icon: Bot, text: "24/7 sempre ativa", color: "text-green-400" },
    { icon: Smile, text: "Sempre focada", color: "text-green-400" },
    { icon: TrendingUp, text: "Converte 85%+", color: "text-green-400" },
    { text: "Nunca se cansa", color: "text-green-400" },
    { text: "100% precisa", color: "text-green-400" },
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-title font-black text-white uppercase mb-4">
            A <span className="text-neon-red">VERDADE</span> que te esconderam
          </h1>
        </div>

        {/* VS Layout */}
        <div className="vs-layout max-w-6xl mx-auto">
          {/* Human Side */}
          <div className="vs-side vs-human animate-fade-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-red-400 uppercase tracking-wide">
                👤 HUMANO
              </h2>
              <p className="text-red-300 mt-2">Vendedor tradicional</p>
            </div>
            
            <div className="space-y-4">
              {humanProblems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-red-400">
                      {Icon ? <Icon className="w-5 h-5" /> : <span className="text-xl">❌</span>}
                    </div>
                    <span className={`${problem.color} font-medium`}>
                      {problem.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <div className="text-4xl font-black text-red-400">
                R$ 3.000+
              </div>
              <div className="text-sm text-red-300">POR MÊS</div>
            </div>
          </div>

          {/* VS Center */}
          <div className="vs-center animate-pulse">
            <div className="text-6xl font-black text-neon-orange mb-4">
              VS
            </div>
            <div className="w-1 h-32 bg-gradient-to-b from-red-500 via-yellow-500 to-green-500 mx-auto"></div>
          </div>

          {/* EVA Side */}
          <div className="vs-side vs-eva animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 uppercase tracking-wide">
                🤖 EVA
              </h2>
              <p className="text-green-300 mt-2">IA Conversacional</p>
            </div>
            
            <div className="space-y-4">
              {evaBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                  >
                    <div className="text-green-400">
                      {Icon ? <Icon className="w-5 h-5" /> : <span className="text-xl">✅</span>}
                    </div>
                    <span className={`${benefit.color} font-medium`}>
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <div className="text-4xl font-black text-green-400">
                R$ 300
              </div>
              <div className="text-sm text-green-300">POR MÊS</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-slide-up" style={{ animationDelay: '1s' }}>
          <p className="text-2xl font-bold text-neon-red uppercase tracking-wide">
            A escolha é <span className="text-neon-orange">ÓBVIA</span>
          </p>
          <p className="text-muted-foreground mt-2">
            10x mais barato, 3x mais eficiente
          </p>
        </div>
      </div>
    </div>
  );
};

export default HumanVsEvaSlide;