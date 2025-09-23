import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SlideIndicator } from '@/components/ui/slide-indicator';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { usePresentation } from '@/hooks/use-presentation';

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
import ImmediateActionSlide from './slides/ImmediateActionSlide';

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
  const isMobile = useIsMobile();
  
  const presentation = usePresentation({
    slidesLength: slides.length,
    autoPlay,
    autoPlayInterval
  });

  const {
    currentSlide,
    isPlaying,
    isFullscreen,
    controlsVisible,
    hideControls,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePlay,
    toggleFullscreen,
    showControls,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  } = presentation;

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div 
      className="relative w-full h-full bg-background text-foreground overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseMove={showControls}
      onClick={showControls}
    >
      {/* Enhanced Progress Bar */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-50 h-1 bg-muted/50 transition-all duration-300",
        (hideControls || (!controlsVisible && (isMobile || isFullscreen))) && "opacity-0"
      )}>
        <div 
          className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary transition-all duration-500 ease-out shadow-glow"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Main Slide Content with enhanced transitions */}
      <div className="slide-container">
        <div key={currentSlide} className="animate-fade-in w-full h-full">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Enhanced Navigation Controls */}
      {!hideControls && (
        <div className={cn(
          "fixed z-50 flex items-center justify-between transition-all duration-500",
          "bg-card/95 backdrop-blur-md border border-border/80 rounded-xl shadow-2xl",
          isMobile 
            ? "bottom-4 left-4 right-4 p-3 h-14" 
            : "bottom-6 left-6 right-6 p-4 h-16",
          (!controlsVisible && (isMobile || isFullscreen)) && "opacity-0 pointer-events-none transform translate-y-4"
        )}
        style={isMobile ? { 
          bottom: `max(1rem, env(safe-area-inset-bottom))`,
          minHeight: '48px'
        } : {}}>
          
          {/* Left Controls */}
          <div className={cn("flex items-center", isMobile ? "gap-2" : "gap-3")}>
            <Button
              variant="outline"
              size={isMobile ? "sm" : "default"}
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={cn(
                "transition-all duration-200 hover:scale-105 active:scale-95",
                isMobile && "h-10 w-10 p-0 min-w-[40px]",
                "touch-manipulation border-primary/30 hover:border-primary/50"
              )}
            >
              <ChevronLeft className={cn(isMobile ? "w-4 h-4" : "w-5 h-5", "text-primary")} />
            </Button>
            
            {!isMobile && (
              <Button
                variant="outline"
                size="default"
                onClick={togglePlay}
                className="transition-all duration-200 hover:scale-105 active:scale-95 border-secondary/30 hover:border-secondary/50"
              >
                {isPlaying ? <Pause className="w-4 h-4 text-secondary" /> : <Play className="w-4 h-4 text-secondary" />}
              </Button>
            )}
          </div>

          {/* Enhanced Center - Slide Info & Indicators */}
          <div className="text-center flex-1 mx-4 space-y-1">
            <div className={cn("font-semibold", isMobile ? "text-xs" : "text-sm")}>
              {currentSlide + 1} / {slides.length}
            </div>
            {!isMobile && (
              <>
                <div className="text-xs text-muted-foreground truncate">
                  {slides[currentSlide].title}
                </div>
                <SlideIndicator
                  currentSlide={currentSlide}
                  totalSlides={slides.length}
                  onSlideSelect={goToSlide}
                  variant="dots"
                  dotSize="sm"
                  className="mt-1"
                />
              </>
            )}
            {isMobile && (
              <div className="flex justify-center mt-1">
                <SlideIndicator
                  currentSlide={currentSlide}
                  totalSlides={slides.length}
                  onSlideSelect={goToSlide}
                  variant="dots"
                  dotSize="sm"
                />
              </div>
            )}
          </div>

          {/* Right Controls */}
          <div className={cn("flex items-center", isMobile ? "gap-2" : "gap-3")}>
            <Button
              variant="outline"
              size={isMobile ? "sm" : "default"}
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={cn(
                "transition-all duration-200 hover:scale-105 active:scale-95",
                isMobile && "h-10 w-10 p-0 min-w-[40px]",
                "touch-manipulation border-primary/30 hover:border-primary/50"
              )}
            >
              <ChevronRight className={cn(isMobile ? "w-4 h-4" : "w-5 h-5", "text-primary")} />
            </Button>
            
            <Button
              variant="outline"
              size={isMobile ? "sm" : "default"}
              onClick={toggleFullscreen}
              className={cn(
                "transition-all duration-200 hover:scale-105 active:scale-95",
                isMobile && "h-10 w-10 p-0 min-w-[40px]",
                "touch-manipulation border-accent/30 hover:border-accent/50"
              )}
            >
              <Maximize2 className={cn(isMobile ? "w-4 h-4" : "w-5 h-5", "text-accent")} />
            </Button>

            {/* Menu button for additional options */}
            {!isMobile && (
              <Button
                variant="ghost"
                size="default"
                onClick={presentation.toggleControlsVisibility}
                className="transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Enhanced Slide Thumbnails */}
      {!isMobile && !hideControls && (
        <div className={cn(
          "fixed left-4 top-1/2 -translate-y-1/2 z-40",
          "flex flex-col gap-2 max-h-[75vh] overflow-y-auto scrollbar-hide",
          "bg-card/40 backdrop-blur-sm rounded-lg p-2 border border-border/50",
          (!controlsVisible && isFullscreen) && "opacity-0 pointer-events-none transition-all duration-300"
        )}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-12 h-8 rounded-md border-2 transition-all duration-200",
                "bg-card/60 backdrop-blur-sm text-xs font-medium",
                "hover:scale-110 active:scale-95",
                index === currentSlide 
                  ? "border-primary bg-primary/20 text-primary shadow-glow scale-110" 
                  : "border-border hover:border-primary/50 hover:bg-primary/5"
              )}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            >
              {slide.id}
            </button>
          ))}
        </div>
      )}

      {/* Enhanced Click to advance - desktop only */}
      {!isMobile && (
        <div 
          className="absolute inset-[5%] z-10 cursor-pointer"
          onClick={nextSlide}
          aria-label="Click to advance to next slide"
        />
      )}
    </div>
  );
};

export default Presentation;