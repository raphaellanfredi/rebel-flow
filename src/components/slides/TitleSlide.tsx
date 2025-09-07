import React from 'react';
import { Button } from '@/components/ui/button';
import evaLogoBrand from '@/assets/eva-logo-white.png';

const TitleSlide: React.FC = () => {
  return (
    <div className="slide-container diagonal-lines">
      <div className="slide-content text-center space-y-8 animate-fade-slide-up">
        {/* EVA Logo */}
        <div className="absolute top-8 right-8">
          <img src={evaLogoBrand} alt="EVA Inteligência" className="h-16 w-auto" />
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-hero font-black text-neon-red uppercase tracking-wider leading-none">
            O MAPA DO TESOURO
            <br />
            <span className="text-neon-orange">DA IA</span>
          </h1>
          
          <h2 className="text-subtitle font-bold text-white uppercase tracking-wide">
            Framework FODA para Multiplicar Vendas
          </h2>
        </div>

        {/* Tagline */}
        <div className="mt-16">
          <p className="text-xl font-medium text-muted-foreground uppercase tracking-wider">
            IA que <span className="text-neon-red font-bold">NUNCA</span> falha, 
            <span className="text-neon-red font-bold"> NUNCA</span> falta, 
            <span className="text-neon-red font-bold"> SEMPRE</span> converte
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Button className="btn-rebel text-lg px-12 py-6">
            INICIAR REVOLUÇÃO
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;