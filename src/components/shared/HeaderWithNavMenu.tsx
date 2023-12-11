'use client';

import { ReactNode, useState } from 'react';
import { Header } from './Header';
import { SideNavMenu } from './SideNavMenu';

type Props = {
  children: ReactNode;
}

export default function HeaderWithNavMenu({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => { setIsOpen(false); };
  const openMenu = () => { setIsOpen(true); };

  return (
    <>
      <SideNavMenu closeMenu={closeMenu} isOpen={isOpen} />

      <div className="sm:ml-64 h-full flex flex-col w-full max-h-full">
        <Header openMenu={openMenu} />
                
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </>
  );
}
