import React from 'react';
import { Button } from '@/components/ui/button';

const TitleSlide: React.FC = () => {
  return (
    <div className="slide-container diagonal-lines">
      <div className="slide-content relative">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse gpu-accelerated"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-2xl animate-pulse-glow gpu-accelerated"></div>
        </div>

        {/* Content Centralizado */}
        <div className="text-center space-y-lg animate-fade-slide-up relative z-10">
          <div className="space-y-md">
            <h1 className="text-hero font-black text-foreground uppercase tracking-wider leading-none gpu-accelerated">
              O MAPA DO TESOURO
              <br />
              <span className="text-primary text-glow-red">DA IA</span>
            </h1>
            
            <h2 className="text-subtitle font-bold text-foreground uppercase tracking-wide">
              Método <span className="text-secondary text-glow-orange">FODA</span> para Multiplicar Vendas
            </h2>
          </div>
          
          <div className="space-y-md">
            <p className="text-body font-medium text-muted-foreground uppercase tracking-wider max-w-4xl mx-auto">
              IA que <span className="text-green-400 font-bold text-glow-orange">NUNCA</span> falha, 
              <span className="text-green-400 font-bold text-glow-orange"> NUNCA</span> falta, 
              <span className="text-green-400 font-bold text-glow-orange"> SEMPRE</span> converte
            </p>
          </div>
          
          <div className="animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button className="btn-rebel text-body px-xl py-md focus-visible-outline gpu-accelerated">
              QUEBRAR AS CORRENTES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;