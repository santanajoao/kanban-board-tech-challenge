'use client';

import { useState } from 'react';
import { Header } from '@/components/shared/Header';
import { SideNavMenu } from '@/components/shared/SideNavMenu';
import { Board } from '@/components/board/Board';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => { setIsOpen(false); };
  const openMenu = () => { setIsOpen(true); };

  return (
    <div className="h-full max-h-full flex flex-col">
      <SideNavMenu isOpen={isOpen} closeMenu={closeMenu} />

      <Header openMenu={openMenu} />

      <Board />
    </div>
  );
}
