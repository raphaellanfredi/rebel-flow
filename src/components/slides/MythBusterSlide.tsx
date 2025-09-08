import React from 'react';

const MythBusterSlide: React.FC = () => {
  return (
    <div className="slide-container relative overflow-hidden">
      {/* Explosion Effect Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-green-400/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="slide-content text-center relative z-10">
        <div className="space-y-16">
          {/* Main Title with Explosion Effect */}
          <div className="relative">
            <h1 className="text-hero font-black text-neon-red uppercase tracking-wider leading-none animate-slide-diagonal">
              DESTROÇANDO
              <br />
              <span className="text-neon-orange relative">
                MITOS
                {/* Crack Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-0.5 top-1/2 -rotate-12 opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-0.5 top-1/2 rotate-12 opacity-60"></div>
              </span>
            </h1>
            
            {/* Shatter Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/3 left-1/4 w-32 h-0.5 bg-white/40 rotate-45 blur-sm"></div>
              <div className="absolute top-2/3 right-1/4 w-24 h-0.5 bg-white/40 -rotate-45 blur-sm"></div>
              <div className="absolute bottom-1/3 left-1/3 w-20 h-0.5 bg-white/40 rotate-12 blur-sm"></div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-slide-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-wide">
              <span className="text-green-400">✅</span> As verdades que <span className="text-neon-red">NINGUÉM</span> te conta
              <br />
              sobre IA conversacional <span className="text-green-400">✅</span>
            </p>
          </div>

          {/* Warning Badge */}
          <div className="animate-fade-slide-up" style={{ animationDelay: '1s' }}>
            <div className="inline-flex items-center gap-3 bg-destructive/20 border border-destructive/50 rounded-lg px-6 py-3">
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
              <span className="text-lg font-bold text-destructive uppercase tracking-wider">
                ATENÇÃO: CONTEÚDO REVOLUCIONÁRIO
              </span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 animate-fade-slide-up" style={{ animationDelay: '1.5s' }}>
            <p className="text-xl text-muted-foreground">
              Prepare-se para <span className="text-neon-orange font-bold">QUEBRAR CORRENTES</span> mentais
            </p>
          </div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MythBusterSlide;