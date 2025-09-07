import React from 'react';
import { Target, Clock, Zap, Rocket } from 'lucide-react';

const FrameworkFodaSlide: React.FC = () => {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Título */}
        <div className="text-center mb-20">
          <h1 className="text-title font-black text-white mb-4">
            MÉTODO <span className="text-neon-red">EXCLUSIVO</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            O framework que separa amadores de profissionais
          </p>
        </div>

        {/* PALAVRA FODA GIGANTE */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div 
              className="font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              style={{ 
                fontSize: 'clamp(8rem, 20vw, 16rem)',
                lineHeight: '0.8',
                letterSpacing: '0.1em',
                textShadow: '0 0 100px rgba(255, 0, 0, 0.5)'
              }}
            >
              FODA
            </div>
            {/* Efeito de brilho */}
            <div 
              className="absolute inset-0 font-black text-primary/20 blur-sm"
              style={{ 
                fontSize: 'clamp(8rem, 20vw, 16rem)',
                lineHeight: '0.8',
                letterSpacing: '0.1em'
              }}
            >
              FODA
            </div>
          </div>
        </div>

        {/* Grid dos 4 pilares */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* F - FOCO */}
          <div className="group text-center">
            <div className="mb-6 mx-auto w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <div className="text-6xl font-black text-primary mb-4">F</div>
            <h3 className="text-xl font-bold text-white mb-3">FOCO LASER</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Uma missão clara: converter lead em reunião. Sem dispersão, sem papo furado.
            </p>
          </div>

          {/* O - OPORTUNIDADE */}
          <div className="group text-center">
            <div className="mb-6 mx-auto w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/30 transition-all duration-300">
              <Clock className="w-10 h-10 text-secondary" />
            </div>
            <div className="text-6xl font-black text-secondary mb-4">O</div>
            <h3 className="text-xl font-bold text-white mb-3">OPORTUNIDADE 24/7</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nunca perde uma chance. Enquanto concorrência dorme, EVA vende.
            </p>
          </div>

          {/* D - DECISÃO */}
          <div className="group text-center">
            <div className="mb-6 mx-auto w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <div className="text-6xl font-black text-primary mb-4">D</div>
            <h3 className="text-xl font-bold text-white mb-3">DECISÃO INSTANTÂNEA</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Qualifica na primeira pergunta. Sem dúvidas, sem hesitação.
            </p>
          </div>

          {/* A - AÇÃO */}
          <div className="group text-center">
            <div className="mb-6 mx-auto w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/30 transition-all duration-300">
              <Rocket className="w-10 h-10 text-secondary" />
            </div>
            <div className="text-6xl font-black text-secondary mb-4">A</div>
            <h3 className="text-xl font-bold text-white mb-3">AÇÃO IMEDIATA</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fecha antes da concorrência. Agenda reunião em 3 mensagens.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-white mb-4">
            Não é chatbot. É <span className="text-neon-red">MÁQUINA DE VENDAS</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default FrameworkFodaSlide;