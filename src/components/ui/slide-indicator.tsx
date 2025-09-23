import React from 'react';
import { cn } from '@/lib/utils';
import { Progress } from './progress';

interface SlideIndicatorProps {
  currentSlide: number;
  totalSlides: number;
  onSlideSelect?: (index: number) => void;
  variant?: 'dots' | 'progress' | 'both';
  className?: string;
  dotSize?: 'sm' | 'md' | 'lg';
  showNumbers?: boolean;
}

export const SlideIndicator: React.FC<SlideIndicatorProps> = ({
  currentSlide,
  totalSlides,
  onSlideSelect,
  variant = 'both',
  className,
  dotSize = 'md',
  showNumbers = false
}) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const dotSizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const renderDots = () => (
    <div className={cn(
      "flex items-center justify-center gap-2 flex-wrap",
      "max-w-full overflow-x-auto scrollbar-hide"
    )}>
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          onClick={() => onSlideSelect?.(index)}
          className={cn(
            "rounded-full transition-all duration-300 border-2 flex-shrink-0",
            dotSizeClasses[dotSize],
            "hover:scale-110 active:scale-95",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
            index === currentSlide
              ? "bg-primary border-primary shadow-glow scale-110"
              : "bg-muted border-muted-foreground/30 hover:border-primary/50",
            onSlideSelect && "cursor-pointer"
          )}
          aria-label={`Go to slide ${index + 1}`}
          disabled={!onSlideSelect}
        >
          {showNumbers && (
            <span className={cn(
              "text-xs font-medium flex items-center justify-center w-full h-full",
              index === currentSlide ? "text-primary-foreground" : "text-muted-foreground"
            )}>
              {index + 1}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  const renderProgress = () => (
    <div className="w-full space-y-2">
      <Progress value={progress} className="h-1.5" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Slide {currentSlide + 1}</span>
        <span>{totalSlides} slides</span>
      </div>
    </div>
  );

  return (
    <div className={cn("space-y-3", className)}>
      {(variant === 'progress' || variant === 'both') && renderProgress()}
      {(variant === 'dots' || variant === 'both') && renderDots()}
    </div>
  );
};