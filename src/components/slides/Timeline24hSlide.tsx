import React from 'react';

const Timeline24hSlide: React.FC = () => {
  const salesHours = [2, 7, 14, 18, 21, 23]; // Hours when sales typically happen
  const competitorHours = [9, 10, 11, 14, 15, 16, 17]; // Business hours only

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-16">
          <h1 className="text-title font-black text-neon-red uppercase">
            TIMELINE <span className="text-neon-orange">24H</span>
          </h1>
          <p className="text-body text-muted-foreground">
            Quando as vendas realmente acontecem
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 24h Clock */}
          <div className="relative w-80 h-80 mx-auto mb-12">
            <svg className="w-full h-full transform -rotate-90">
              {/* Clock face */}
              <circle
                cx="160"
                cy="160"
                r="140"
                fill="transparent"
                stroke="hsl(var(--border))"
                strokeWidth="2"
              />
              
              {/* Hour markers */}
              {Array.from({ length: 24 }, (_, i) => {
                const angle = (i * 15) - 90; // 360/24 = 15 degrees per hour
                const x1 = 160 + 120 * Math.cos(angle * Math.PI / 180);
                const y1 = 160 + 120 * Math.sin(angle * Math.PI / 180);
                const x2 = 160 + 130 * Math.cos(angle * Math.PI / 180);
                const y2 = 160 + 130 * Math.sin(angle * Math.PI / 180);
                
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Sales opportunity dots */}
              {salesHours.map((hour, index) => {
                const angle = (hour * 15) - 90;
                const x = 160 + 110 * Math.cos(angle * Math.PI / 180);
                const y = 160 + 110 * Math.sin(angle * Math.PI / 180);
                
                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="8"
                    fill="hsl(var(--primary))"
                    className="animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                );
              })}

              {/* Competitor hours (business hours only) */}
              {competitorHours.map((hour, index) => {
                const angle = (hour * 15) - 90;
                const x = 160 + 85 * Math.cos(angle * Math.PI / 180);
                const y = 160 + 85 * Math.sin(angle * Math.PI / 180);
                
                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="hsl(var(--muted-foreground))"
                    fillOpacity="0.5"
                  />
                );
              })}
            </svg>

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-black text-neon-red">24H</div>
                <div className="text-sm text-muted-foreground">VENDAS</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="stat-card">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                <div>
                  <h3 className="font-bold text-primary">EVA - 24/7 ATIVA</h3>
                  <p className="text-sm text-muted-foreground">
                    Captura vendas em todos os horários
                  </p>
                  <p className="text-lg font-bold text-green-400">
                    {salesHours.length} oportunidades
                  </p>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-muted-foreground/50 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-muted-foreground">CONCORRÊNCIA - 8h-18h</h3>
                  <p className="text-sm text-muted-foreground">
                    Apenas horário comercial
                  </p>
                  <p className="text-lg font-bold text-red-400">
                    {competitorHours.length} oportunidades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-2xl font-bold text-neon-red uppercase tracking-wide">
            EVA captura <span className="text-neon-orange">71%</span> mais vendas
          </p>
          <p className="text-muted-foreground">
            Enquanto a concorrência dorme, EVA está vendendo
          </p>
          
          <div className="inline-flex items-center gap-3 bg-primary/20 border border-primary/50 rounded-lg px-6 py-3 mt-6">
            <span className="text-primary font-bold uppercase tracking-wider">
              Vendas perdidas = Oportunidades da EVA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline24hSlide;