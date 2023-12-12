'use client';

import { ReactNode, useState } from 'react';
import { Header } from './Header';
import { SideBar } from './SideBar/SideBar';

type Props = {
  children: ReactNode;
}

export function HeaderWithNavMenu({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => { setIsOpen(false); };
  const openMenu = () => { setIsOpen(true); };

  return (
    <>
      <SideBar closeMenu={closeMenu} isOpen={isOpen} />

      <div className="h-full overflow-auto flex-1 flex flex-col max-h-full">
        <Header openMenu={openMenu} />

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </>
  );
}
