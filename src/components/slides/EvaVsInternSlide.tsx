import React from 'react';

const EvaVsInternSlide: React.FC = () => {
  const comparisons = [
    { category: "Conhecimento", human: "0%", eva: "100%", description: "EVA nasce sabendo tudo" },
    { category: "Disponibilidade", human: "40h/sem", eva: "168h/sem", description: "24/7 sem pausas" },
    { category: "Performance", human: "Variável", eva: "Constante", description: "Sempre no máximo" },
    { category: "Custo", human: "R$ 2.000+", eva: "R$ 777+", description: "80% mais barato" },
    { category: "Resultado", human: "30 vendas/mês", eva: "150+ vendas/mês", description: "5x mais vendas" },
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-title font-black text-foreground uppercase">
            EVA vs <span className="text-primary">ESTAGIÁRIO</span>
          </h1>
          <p className="text-body text-muted-foreground mt-4">
            Comparação detalhada: máquina vs humano
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6">
            {comparisons.map((comp, index) => (
              <div 
                key={index}
                className="stat-card animate-fade-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-4 gap-6 items-center">
                  <div className="font-bold text-white uppercase">
                    {comp.category}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400 mb-1">
                      {comp.human}
                    </div>
                    <div className="text-xs text-red-300 uppercase">Estagiário</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {comp.eva}
                    </div>
                    <div className="text-xs text-green-300 uppercase">EVA</div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {comp.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-primary uppercase tracking-wide">
            EVA: Conhecimento máximo desde o dia 1
          </p>
        </div>
      </div>
    </div>
  );
};

export default EvaVsInternSlide;