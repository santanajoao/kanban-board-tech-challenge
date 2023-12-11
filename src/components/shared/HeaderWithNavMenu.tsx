'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Header } from './Header';
import { SideNavMenu } from './SideNavMenu';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Props = {
  children: ReactNode;
}

export default function HeaderWithNavMenu({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 640px)');

  const closeMenu = () => { setIsOpen(false); };
  const openMenu = () => { setIsOpen(true); };

  useEffect(() => {
    if (isDesktop && !isOpen) {
      setIsOpen(true);
    }
  }, [isDesktop]);

  return (
    <>
      <SideNavMenu backdrop={!isDesktop} closeMenu={closeMenu} isOpen={isOpen} />

      <div className="sm:ml-64 h-full flex flex-col w-full max-h-full">
        <Header openMenu={openMenu} />
                
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </>
  );
}
