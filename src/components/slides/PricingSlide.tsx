import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

const PricingSlide: React.FC = () => {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h1 className="text-title font-black text-center text-neon-red mb-16">
          ESCOLHA SUA <span className="text-neon-orange">REVOLUÇÃO</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* EVA 1 */}
          <div className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">EVA 1</h3>
            <div className="text-3xl font-black mb-6" style={{ color: '#FFD700' }}>
              R$ 777<span className="text-lg">/mês</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Até 1.500 atendimentos/mês</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>3 mensagens follow-up</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>1 conexão (WhatsApp/Instagram)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>3 usuários</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>CRM nativo + Google Agenda</span>
              </li>
            </ul>
            
            <div className="text-center border-t border-border pt-6">
              <div className="text-sm text-muted-foreground">Implantação</div>
              <div className="text-xl font-bold">R$ 6.643,91</div>
            </div>
          </div>

          {/* EVA PRO - RECOMENDADO */}
          <div className="bg-card/80 backdrop-blur-sm border-2 border-green-500 rounded-xl p-8 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500 px-4 py-2 rounded-full flex items-center gap-2">
                <Star className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">RECOMENDADO</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">EVA PRO</h3>
            <div className="text-4xl font-black mb-6" style={{ color: '#FFD700' }}>
              R$ 1.530<span className="text-lg">/mês</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Até 3.500 atendimentos/mês</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>3 mensagens follow-up</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>2 conexões (WhatsApp/Instagram)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>7 usuários</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>CRM nativo + Google Agenda</span>
              </li>
            </ul>
            
            <div className="text-center border-t border-border pt-6">
              <div className="text-sm text-muted-foreground">Implantação</div>
              <div className="text-xl font-bold">R$ 6.643,91</div>
            </div>
          </div>

          {/* EVA BLACK */}
          <div className="bg-card/60 backdrop-blur-sm border border-white rounded-xl p-8 hover:border-white/70 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">EVA BLACK</h3>
            <div className="text-3xl font-black mb-6" style={{ color: '#FFD700' }}>
              R$ 3.510<span className="text-lg">/mês</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Até 9.600 atendimentos/mês</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>7 mensagens follow-up</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Suporte Premium</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Infraestrutura escalável</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>2 conexões + 7 usuários</span>
              </li>
            </ul>
            
            <div className="text-center border-t border-border pt-6">
              <div className="text-sm text-muted-foreground">Implantação</div>
              <div className="text-xl font-bold">R$ 6.643,91</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSlide;