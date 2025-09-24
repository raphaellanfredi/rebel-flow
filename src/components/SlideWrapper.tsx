import React, { useEffect, useState } from 'react';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ 
  children, 
  className = '' 
}) => {
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    // Fix for mobile viewport height
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setViewportHeight(`${window.innerHeight}px`);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('orientationchange', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
    };
  }, []);

  return (
    <div 
      className={`slide-wrapper ${className}`}
      style={{
        minHeight: viewportHeight,
        width: '100vw',
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative',
        padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)'
      }}
    >
      <div className="slide-inner-content" style={{
        width: '100%',
        minHeight: '100%',
        padding: 'clamp(0.5rem, 2vw, 1rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        {children}
      </div>
    </div>
  );
};