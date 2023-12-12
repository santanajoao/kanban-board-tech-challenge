'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import DesktopBoard from './DesktopBoard';
import { MobileBoard } from './MobileBoard';
import { useEffect, useState } from 'react';

export function Board() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [showMobile, setShowMobile] = useState(false);
  
  useEffect(() => {
    setShowMobile(isMobile);
  }, [isMobile]);

  if (showMobile) {
    return <MobileBoard />;
  }

  return <DesktopBoard />;
}
