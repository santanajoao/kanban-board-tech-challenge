'use client';

import { IoMdClose } from 'react-icons/io';
import { Sheet, SheetContent } from '../ui/sheet';

import NavBar from './NavBar';

export type SideNavMenuProps = {
  closeMenu: () => void;
  isOpen: boolean;
};

export function SideNavMenu({ closeMenu, isOpen }: SideNavMenuProps) {
  return (
    <Sheet open={isOpen}>
      <SheetContent side="left" className="flex flex-col">    
        <button
          type="button"
          onClick={closeMenu}
          className="text-2xl m-2 text-primaryPurple self-end sm:invisible"
          aria-label="Fechar menu lateral"
        >
          <IoMdClose />
        </button>

        <NavBar />
      </SheetContent>
    </Sheet>
  );
}
