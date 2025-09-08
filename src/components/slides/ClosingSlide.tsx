import React from 'react';
// EVA logo removed - using text instead

const ClosingSlide: React.FC = () => {
  return (
    <div className="slide-container relative overflow-hidden">
      {/* Dramatic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="slide-content text-center relative z-10 min-h-screen flex flex-col justify-center py-8">
        {/* Main Brand - EVA Removed */}
        <div className="animate-fade-slide-up mb-12">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary animate-pulse-glow tracking-wider">
              TRANSFORMAÇÃO
            </h1>
            {/* Glow Effect Around Text */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150 -z-10"></div>
          </div>
        </div>

        {/* Main Tagline */}
        <div className="space-y-8 md:space-y-10 animate-fade-slide-up mb-16" style={{ animationDelay: '0.5s' }}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            IA que <span className="text-green-400">NUNCA</span> falha,
            <br />
            <span className="text-green-400">NUNCA</span> falta,
            <br />
            <span className="text-green-400">SEMPRE</span> converte
          </h1>
        </div>

        {/* Breaking Chains Message */}
        <div className="space-y-8 animate-fade-slide-up mb-12" style={{ animationDelay: '1s' }}>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-neon-orange uppercase tracking-wider">
              QUEBRE ESSAS CORRENTES
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Liberte sua empresa das limitações humanas. 
            <br />
            <span className="text-green-400 font-bold">A revolução da IA conversacional começou.</span>
          </p>
        </div>

        {/* Contact Information - Discrete but Present */}
        <div className="space-y-6 animate-fade-slide-up mt-auto" style={{ animationDelay: '1.5s' }}>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Desenvolvido com 🔥 pela equipe de IA</p>
            <p className="text-xs opacity-60">Transformando conversas em conversões desde 2019</p>
          </div>
          
          {/* Social Links - Minimal */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              LinkedIn
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Instagram
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClosingSlide;