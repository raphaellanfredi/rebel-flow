import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [hideControls, setHideControls] = useState(false);
  const isMobile = useIsMobile();
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

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
        case 'h':
        case 'H':
          e.preventDefault();
          setHideControls(!hideControls);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, hideControls]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {
        // Fallback for Safari on iOS
        const elem = document.documentElement as any;
        if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else {
        const doc = document as any;
        if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        }
      }
      setIsFullscreen(false);
    }
  };

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < slides.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  };

  // Auto-hide controls - Smart detection
  const showControls = () => {
    if (hideControls) return; // Don't show controls if user has hidden them
    setControlsVisible(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isMobile || isFullscreen) {
      controlsTimeoutRef.current = setTimeout(() => {
        setControlsVisible(false);
      }, 2000); // Faster hide for better UX
    }
  };

  useEffect(() => {
    if (hideControls) return; // Don't auto-show if user has hidden them
    if (isMobile || isFullscreen) {
      showControls();
    } else {
      setControlsVisible(true);
    }
  }, [isMobile, isFullscreen, hideControls]); // Removed currentSlide dependency

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
      {/* Progress Bar */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-50 h-1 bg-muted transition-all duration-300",
        (hideControls || (!controlsVisible && (isMobile || isFullscreen))) && "opacity-0"
      )}>
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Main Slide Content */}
      <div className="slide-container">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Controls - Mobile Optimized */}
      {!hideControls && (
        <div className={cn(
          "fixed z-50 flex items-center justify-between transition-all duration-500",
          "bg-card/95 backdrop-blur-md border border-border/80 rounded-lg shadow-xl",
          isMobile 
            ? "bottom-4 left-4 right-4 p-2.5 h-12" 
            : "bottom-6 left-6 right-6 p-4 h-16",
          (!controlsVisible && (isMobile || isFullscreen)) && "opacity-0 pointer-events-none transform translate-y-2"
        )}
        style={isMobile ? { 
          bottom: `max(1rem, env(safe-area-inset-bottom))`,
          minHeight: '44px' // iOS minimum touch target
        } : {}}>
          {/* Left Controls */}
          <div className={cn("flex items-center", isMobile ? "gap-2" : "gap-4")}>
            <Button
              variant="outline"
              size={isMobile ? "sm" : "sm"}
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={cn(
                isMobile && "h-9 w-9 p-0 min-w-[36px]", // Minimum touch target 44px
                "touch-manipulation"
              )}
            >
              <ChevronLeft className={cn(isMobile ? "w-4 h-4" : "w-4 h-4")} />
            </Button>
            
            {!isMobile && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            )}
          </div>

          {/* Center - Slide Info */}
          <div className="text-center flex-1 mx-4">
            <div className={cn("font-medium", isMobile ? "text-xs" : "text-sm")}>
              {currentSlide + 1} / {slides.length}
            </div>
            {!isMobile && (
              <div className="text-xs text-muted-foreground truncate">
                {slides[currentSlide].title}
              </div>
            )}
          </div>

          {/* Right Controls */}
          <div className={cn("flex items-center", isMobile ? "gap-2" : "gap-4")}>
            <Button
              variant="outline"
              size={isMobile ? "sm" : "sm"}
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={cn(
                isMobile && "h-9 w-9 p-0 min-w-[36px]",
                "touch-manipulation"
              )}
            >
              <ChevronRight className={cn(isMobile ? "w-4 h-4" : "w-4 h-4")} />
            </Button>
            
            <Button
              variant="outline"
              size={isMobile ? "sm" : "sm"}
              onClick={toggleFullscreen}
              className={cn(
                isMobile && "h-9 w-9 p-0 min-w-[36px]",
                "touch-manipulation"
              )}
            >
              <Maximize2 className={cn(isMobile ? "w-4 h-4" : "w-4 h-4")} />
            </Button>
          </div>
        </div>
      )}

      {/* Slide Thumbnails - Hidden on mobile */}
      {!isMobile && !hideControls && (
        <div className={cn(
          "fixed left-4 top-1/2 -translate-y-1/2 z-40",
          "flex flex-col gap-2 max-h-[80vh] overflow-y-auto",
          (!controlsVisible && isFullscreen) && "opacity-0 pointer-events-none transition-opacity duration-300"
        )}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-12 h-8 rounded border-2 transition-all duration-200",
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
      )}

      {/* Click to advance - desktop only */}
      {!isMobile && (
        <div 
          className="absolute inset-[5%] z-10 cursor-pointer"
          onClick={nextSlide}
        />
      )}
    </div>
  );
};

export default Presentation;