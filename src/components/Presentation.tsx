import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import all slides
import TitleSlide from './slides/TitleSlide';
import IntroSlide from './slides/IntroSlide';
import AgendaSlide from './slides/AgendaSlide';
import MythBusterSlide from './slides/MythBusterSlide';
import HumanVsEvaSlide from './slides/HumanVsEvaSlide';
import EvaVsInternSlide from './slides/EvaVsInternSlide';
import ClientResearchSlide from './slides/ClientResearchSlide';
import FrameworkFodaSlide from './slides/FrameworkFodaSlide';
import ConversationComparisonSlide from './slides/ConversationComparisonSlide';
import Timeline24hSlide from './slides/Timeline24hSlide';
import DecisionTreeSlide from './slides/DecisionTreeSlide';

import DemoSetupSlide from './slides/DemoSetupSlide';
import EvaInActionSlide from './slides/EvaInActionSlide';
import CasesResultsSlide from './slides/CasesResultsSlide';
import CTAConsultingSlide from './slides/CTAConsultingSlide';
import PricingSlide from './slides/PricingSlide';
import ClosingSlide from './slides/ClosingSlide';

const slides = [
  { id: 1, component: TitleSlide, title: "O Mapa do Tesouro da IA" },
  { id: 2, component: IntroSlide, title: "Apresentação + Credibilidade" },
  { id: 3, component: AgendaSlide, title: "Agenda Visual" },
  { id: 4, component: MythBusterSlide, title: "Destroçando Mitos" },
  { id: 5, component: HumanVsEvaSlide, title: "Humano vs EVA" },
  { id: 6, component: EvaVsInternSlide, title: "EVA vs Estagiário" },
  { id: 7, component: ClientResearchSlide, title: "Pesquisa Cliente" },
  { id: 8, component: FrameworkFodaSlide, title: "Framework FODA" },
  { id: 9, component: ConversationComparisonSlide, title: "Conversa Dispersa vs Focada" },
  { id: 10, component: Timeline24hSlide, title: "Timeline 24H" },
  { id: 11, component: DecisionTreeSlide, title: "Árvore de Decisão" },
  
  { id: 13, component: DemoSetupSlide, title: "Setup Demo EVA" },
  { id: 14, component: EvaInActionSlide, title: "EVA em Ação" },
  { id: 15, component: CasesResultsSlide, title: "Cases - Números" },
  { id: 16, component: CTAConsultingSlide, title: "CTA Consultoria" },
  { id: 17, component: PricingSlide, title: "Planos EVA" },
  { id: 18, component: ClosingSlide, title: "Fechamento" },
];

interface PresentationProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Presentation: React.FC<PresentationProps> = ({ 
  autoPlay = false, 
  autoPlayInterval = 30000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'f':
        case 'F11':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'p':
          e.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className={`presentation-container ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Main Slide Content */}
      <div className="slide-container">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Controls */}
      <div className={cn(
        "fixed bottom-6 left-6 right-6 z-50 flex items-center justify-between",
        "bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4",
        isFullscreen && "opacity-0 hover:opacity-100 transition-opacity duration-300"
      )}>
        {/* Left Controls */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>

        {/* Center - Slide Info */}
        <div className="text-center">
          <div className="text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
          <div className="text-xs text-muted-foreground">
            {slides[currentSlide].title}
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFullscreen}
          >
            F
          </Button>
        </div>
      </div>

      {/* Slide Thumbnails */}
      <div className={cn(
        "fixed left-4 top-1/2 -translate-y-1/2 z-40",
        "flex flex-col gap-2 max-h-[80vh] overflow-y-auto",
        isFullscreen && "opacity-0 hover:opacity-100 transition-opacity duration-300"
      )}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-16 h-12 rounded border-2 transition-all duration-200",
              "bg-card/60 backdrop-blur-sm text-xs font-medium",
              index === currentSlide 
                ? "border-primary bg-primary/20 text-primary" 
                : "border-border hover:border-primary/50"
            )}
          >
            {slide.id}
          </button>
        ))}
      </div>

      {/* Click to advance */}
      <div 
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Presentation;