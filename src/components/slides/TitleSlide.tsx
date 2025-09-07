import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
// Removed eva-logo import - using custom logo only
import { LogoUpload } from '@/components/LogoUpload';

const TitleSlide: React.FC = () => {
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  return (
    <div className="slide-container diagonal-lines">
      <div className="slide-content relative">
        {/* Logo Upload Component */}
        <LogoUpload onLogoChange={setCustomLogo} currentLogo={customLogo} />
        
        {/* Company Logo - NOVA POSIÇÃO */}
        {customLogo && (
          <div className="flex justify-between items-start mb-12">
            <div></div> {/* Spacer */}
            <img 
              src={customLogo} 
              alt="Logo da Empresa" 
              className="h-24 md:h-32 w-auto opacity-90" 
            />
          </div>
        )}
        
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
              IA que <span className="text-primary font-bold">NUNCA</span> falha, 
              <span className="text-primary font-bold"> NUNCA</span> falta, 
              <span className="text-primary font-bold"> SEMPRE</span> converte
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