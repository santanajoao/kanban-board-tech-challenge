'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { SideNavMenu, SideNavMenuProps } from './SideNavMenu';
import { NavBar } from './NavBar';

export function SideBar(props: SideNavMenuProps) {
  const isDesktop = useMediaQuery('(min-width: 640px)');
  const [showDesktop, setShowDesktop] = useState(false);
  
  useEffect(() => {
    setShowDesktop(isDesktop);
  }, [isDesktop]);

  if (showDesktop) {
    return <NavBar />;
  }

  return <SideNavMenu {...props} />;
}
