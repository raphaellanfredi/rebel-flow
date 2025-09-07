import React from 'react';
import { TrendingUp, DollarSign, Users } from 'lucide-react';

const CasesResultsSlide: React.FC = () => {
  const cases = [
    {
      name: "Ana - E-commerce",
      photo: "👩‍💼",
      before: {
        conversions: "25%",
        revenue: "R$ 50k/mês",
        leads: "200/mês"
      },
      after: {
        conversions: "78%",
        revenue: "R$ 250k/mês", 
        leads: "800/mês"
      },
      roi: "5x",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Ricardo - SaaS",
      photo: "👨‍💻",
      before: {
        conversions: "18%",
        revenue: "R$ 80k/mês",
        leads: "150/mês"
      },
      after: {
        conversions: "85%",
        revenue: "R$ 400k/mês",
        leads: "600/mês"
      },
      roi: "5x",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Patricia - Consultoria",
      photo: "👩‍🏫", 
      before: {
        conversions: "30%",
        revenue: "R$ 120k/mês",
        leads: "100/mês"
      },
      after: {
        conversions: "90%",
        revenue: "R$ 600k/mês",
        leads: "400/mês"
      },
      roi: "5x",
      color: "from-green-500 to-green-600"
    }
  ];

  const CaseCard = ({ caseData, index }: { caseData: any, index: number }) => (
    <div 
      className="stat-card animate-fade-slide-up hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <div className="text-center mb-6">
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${caseData.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
          <span className="text-3xl">{caseData.photo}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{caseData.name}</h3>
      </div>

      {/* Before/After Grid */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <h4 className="text-sm font-bold text-red-400 uppercase mb-2">ANTES</h4>
            <div className="space-y-2">
              <div>
                <div className="text-lg font-bold text-red-400">{caseData.before.conversions}</div>
                <div className="text-xs text-red-300">Conversão</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-400">{caseData.before.revenue}</div>
                <div className="text-xs text-red-300">Faturamento</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-400">{caseData.before.leads}</div>
                <div className="text-xs text-red-300">Leads</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-sm font-bold text-green-400 uppercase mb-2">DEPOIS</h4>
            <div className="space-y-2">
              <div>
                <div className="text-lg font-bold text-green-400 animate-counter-up">{caseData.after.conversions}</div>
                <div className="text-xs text-green-300">Conversão</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-400 animate-counter-up">{caseData.after.revenue}</div>
                <div className="text-xs text-green-300">Faturamento</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-400 animate-counter-up">{caseData.after.leads}</div>
                <div className="text-xs text-green-300">Leads</div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Badge */}
        <div className="text-center pt-4 border-t border-border">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-lg px-4 py-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary font-bold">ROI: {caseData.roi}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-16">
          <h1 className="text-title font-black text-neon-red uppercase">
            CASES - <span className="text-neon-orange">NÚMEROS</span>
          </h1>
          <p className="text-body text-muted-foreground">
            Resultados reais de clientes que implementaram EVA
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {cases.map((caseData, index) => (
            <CaseCard key={index} caseData={caseData} index={index} />
          ))}
        </div>

        {/* Overall Stats */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat-card text-center">
              <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-black text-green-400 animate-counter-up">R$ 1.25M</div>
              <div className="text-sm text-green-300">Faturamento adicional gerado</div>
            </div>

            <div className="stat-card text-center">
              <TrendingUp className="w-12 h-12 text-neon-orange mx-auto mb-4" />
              <div className="text-4xl font-black text-neon-orange animate-counter-up">5x</div>
              <div className="text-sm text-orange-300">ROI médio em 90 dias</div>
            </div>

            <div className="stat-card text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-black text-blue-400 animate-counter-up">1800</div>
              <div className="text-sm text-blue-300">Leads qualificados/mês</div>
            </div>
          </div>
        </div>

        {/* Testimonial Highlight */}
        <div className="text-center space-y-6 animate-fade-slide-up" style={{ animationDelay: '1s' }}>
          <div className="bg-card/50 border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <p className="text-xl font-medium text-white italic mb-4">
              "A EVA transformou completamente nossa estratégia de vendas. 
              Em 60 dias, triplicamos nossas conversões e quintuplicamos o faturamento. 
              É a melhor decisão que tomamos nos últimos 5 anos."
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl">👩‍💼</span>
              <div>
                <div className="font-bold text-primary">Ana Silva</div>
                <div className="text-sm text-muted-foreground">CEO, E-commerce Fashion</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-neon-red uppercase tracking-wide">
            MÉDIA <span className="text-neon-orange">5x ROI</span> EM 90 DIAS
          </p>
          <p className="text-muted-foreground mt-2">
            Resultados consistentes em diferentes segmentos
          </p>
        </div>
      </div>
    </div>
  );
};

export default CasesResultsSlide;