'use client';

import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  children: ReactNode;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  minimumDistance: number;
  className?: string;
};

export default function Swipable({
  children, onSwipeLeft, onSwipeRight, minimumDistance, className,
}: Props) {
  const touchStartX = useRef(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleTouchEnd = (e: TouchEvent) => {
    const swipeDistance =  e.changedTouches[0].screenX - touchStartX.current;
    const swipedRight = swipeDistance <= -minimumDistance;
    const swipedLeft = swipeDistance >= minimumDistance;

    if (swipedRight) {      
      onSwipeLeft();
    }
    
    if (swipedLeft) {
      onSwipeRight();
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  useEffect(() => {
    if(!elementRef.current) return;    
    elementRef.current.addEventListener('touchstart', handleTouchStart);
    elementRef.current.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (!elementRef.current) return;
      elementRef.current.removeEventListener('touchstart', handleTouchStart);
      elementRef.current.removeEventListener('touchend', handleTouchEnd);
    };
  }, [elementRef]);
  
  return <div className={className} ref={elementRef}>{children}</div>;
}
