import React from 'react';
import { Button } from '@/components/ui/button';

const TitleSlide: React.FC = () => {
  return (
    <div className="slide-container diagonal-lines">
      <div className="slide-content relative">
        {/* Content Centralizado */}
        <div className="text-center space-y-8 animate-fade-slide-up">
          <div className="space-y-6">
            <h1 className="text-hero font-black text-foreground uppercase tracking-wider leading-none">
              O MAPA DO TESOURO
              <br />
              <span className="text-primary">DA IA</span>
            </h1>
            
            <h2 className="text-subtitle font-bold text-foreground uppercase tracking-wide">
              Método FODA para Multiplicar Vendas
            </h2>
          </div>
          
          <div className="mt-16">
            <p className="text-xl font-medium text-muted-foreground uppercase tracking-wider">
              IA que <span className="text-green-400 font-bold">NUNCA</span> falha, 
              <span className="text-green-400 font-bold"> NUNCA</span> falta, 
              <span className="text-green-400 font-bold"> SEMPRE</span> converte
            </p>
          </div>
          
          <div className="mt-12">
            <Button className="btn-rebel text-lg px-12 py-6">
              QUEBRAR AS CORRENTES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;