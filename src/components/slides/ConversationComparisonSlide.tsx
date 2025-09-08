import React from 'react';
import { MessageCircle, Clock } from 'lucide-react';

const ConversationComparisonSlide: React.FC = () => {
  const scatteredChat = [
    { text: "Oi, tudo bem?", time: "14:30", sender: "client" },
    { text: "Oi! Sim, tudo ótimo! Como posso ajudar?", time: "14:32", sender: "human" },
    { text: "Queria saber sobre seus produtos", time: "14:35", sender: "client" },
    { text: "Claro! Temos vários. Qual área te interessa?", time: "14:38", sender: "human" },
    { text: "Não sei bem... o que vocês fazem mesmo?", time: "14:45", sender: "client" },
    { text: "Ah, somos uma empresa de... espera, deixa eu verificar...", time: "14:50", sender: "human" },
  ];

  const focusedChat = [
    { text: "Olá! Sou a EVA. Vejo que está interessado em nossos produtos.", time: "14:30", sender: "eva" },
    { text: "Sim, quero saber mais", time: "14:30", sender: "client" },
    { text: "Perfeito! Qual o faturamento atual da sua empresa?", time: "14:30", sender: "eva" },
    { text: "R$ 500k/mês", time: "14:31", sender: "client" },
    { text: "Excelente! Nossa solução Premium é ideal. Agende uma demo agora?", time: "14:31", sender: "eva" },
    { text: "Sim, quero agendar!", time: "14:31", sender: "client" },
  ];

  const ChatBubble = ({ message, isEva = false }: { message: any, isEva?: boolean }) => (
    <div className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'} mb-2 md:mb-3`}>
      <div className={`max-w-[200px] md:max-w-xs px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-lg ${
        message.sender === 'client' 
          ? 'bg-blue-500/20 text-blue-100' 
          : isEva 
            ? 'chat-eva border' 
            : 'chat-human border'
      }`}>
        <p className="text-xs md:text-sm">{message.text}</p>
        <p className="text-xs opacity-60 mt-1">{message.time}</p>
      </div>
    </div>
  );

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-title font-black text-foreground uppercase">
            CONVERSA DISPERSA vs <span className="text-primary">FOCADA</span>
          </h1>
          <p className="text-body text-muted-foreground">
            A diferença que multiplica vendas
          </p>
        </div>

        <div className="container-responsive">
          <div className="grid-responsive-2col spacing-responsive max-w-6xl mx-auto">
          {/* Scattered Conversation */}
          <div className="space-y-4 md:space-y-6 animate-fade-slide-up">
            <div className="text-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-red-400 uppercase mb-2">
                🤯 CONVERSA HUMANA
              </h2>
              <p className="text-red-300 text-xs md:text-sm">Dispersa e improdutiva</p>
            </div>

            <div className="bg-card/50 border border-red-500/30 rounded-lg p-2 md:p-3 lg:p-4 conversation-chat min-h-[180px] max-h-[35vh] md:max-h-[45vh] overflow-y-auto">
              {scatteredChat.map((msg, index) => (
                <ChatBubble key={index} message={msg} />
              ))}
            </div>

            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-red-400">
                <Clock className="w-5 h-5" />
                <span className="font-bold">20 minutos</span>
              </div>
              <p className="text-sm text-red-300">Sem resultado concreto</p>
            </div>
          </div>

          {/* Focused Conversation */}
          <div className="space-y-4 md:space-y-6 animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-green-400 uppercase mb-2">
                🎯 CONVERSA EVA
              </h2>
              <p className="text-green-300 text-xs md:text-sm">Focada e eficiente</p>
            </div>

            <div className="bg-card/50 border border-green-500/30 rounded-lg p-2 md:p-3 lg:p-4 conversation-chat min-h-[180px] max-h-[35vh] md:max-h-[45vh] overflow-y-auto">
              {focusedChat.map((msg, index) => (
                <ChatBubble key={index} message={msg} isEva={true} />
              ))}
            </div>

            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Clock className="w-5 h-5" />
                <span className="font-bold">1 minuto</span>
              </div>
              <p className="text-sm text-green-300">Demo agendada ✅</p>
            </div>
          </div>
          </div>
        </div>

        {/* Comparison Arrow */}
        <div className="flex justify-center items-center my-8">
          <div className="text-6xl font-black text-neon-orange animate-pulse">
            →
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold text-neon-red uppercase tracking-wide">
            40x MAIS <span className="text-neon-orange">RÁPIDO</span>
          </p>
          <p className="text-muted-foreground">
            EVA vai direto ao ponto. Humano se perde no caminho.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationComparisonSlide;