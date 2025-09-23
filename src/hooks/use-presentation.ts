import { useState, useEffect, useRef, useCallback } from 'react';
import { useIsMobile } from './use-mobile';

export interface UsePresentation {
  currentSlide: number;
  isPlaying: boolean;
  isFullscreen: boolean;
  controlsVisible: boolean;
  hideControls: boolean;
  touchStartX: React.MutableRefObject<number>;
  touchEndX: React.MutableRefObject<number>;
  controlsTimeoutRef: React.MutableRefObject<NodeJS.Timeout | undefined>;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  togglePlay: () => void;
  toggleFullscreen: () => void;
  toggleControlsVisibility: () => void;
  showControls: () => void;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
  setCurrentSlide: (slide: number) => void;
  setIsPlaying: (playing: boolean) => void;
}

interface UsePresentationProps {
  slidesLength: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const usePresentation = ({
  slidesLength,
  autoPlay = false,
  autoPlayInterval = 30000
}: UsePresentationProps): UsePresentation => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [hideControls, setHideControls] = useState(false);
  const isMobile = useIsMobile();
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  // Enhanced navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesLength);
  }, [slidesLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesLength) % slidesLength);
  }, [slidesLength]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slidesLength) {
      setCurrentSlide(index);
    }
  }, [slidesLength]);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
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
  }, []);

  const toggleControlsVisibility = useCallback(() => {
    setHideControls(prev => !prev);
  }, []);

  // Enhanced auto-hide controls with better UX
  const showControls = useCallback(() => {
    if (hideControls) return;
    setControlsVisible(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isMobile || isFullscreen) {
      controlsTimeoutRef.current = setTimeout(() => {
        setControlsVisible(false);
      }, 3000); // Slightly longer timeout for better UX
    }
  }, [hideControls, isMobile, isFullscreen]);

  // Enhanced touch gesture handling
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 75; // Increased threshold for better UX
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe && currentSlide < slidesLength - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  }, [currentSlide, slidesLength, nextSlide, prevSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesLength);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, slidesLength]);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Prevent default for presentation keys
      const presentationKeys = ['ArrowRight', 'ArrowLeft', ' ', 'f', 'F11', 'p', 'h', 'H', 'Home', 'End'];
      if (presentationKeys.includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          nextSlide();
          break;
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'f':
        case 'F11':
          toggleFullscreen();
          break;
        case 'p':
          togglePlay();
          break;
        case 'Home':
          goToSlide(0);
          break;
        case 'End':
          goToSlide(slidesLength - 1);
          break;
        case 'h':
        case 'H':
          toggleControlsVisibility();
          break;
        // Number keys for direct slide navigation
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          const slideNumber = parseInt(e.key) - 1;
          if (slideNumber < slidesLength) {
            goToSlide(slideNumber);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, toggleFullscreen, togglePlay, goToSlide, toggleControlsVisibility, slidesLength]);

  // Auto-show controls management
  useEffect(() => {
    if (hideControls) return;
    if (isMobile || isFullscreen) {
      showControls();
    } else {
      setControlsVisible(true);
    }
  }, [isMobile, isFullscreen, hideControls, showControls]);

  return {
    currentSlide,
    isPlaying,
    isFullscreen,
    controlsVisible,
    hideControls,
    touchStartX,
    touchEndX,
    controlsTimeoutRef,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePlay,
    toggleFullscreen,
    toggleControlsVisibility,
    showControls,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    setCurrentSlide,
    setIsPlaying
  };
};