'use client';

import { IoMdClose } from 'react-icons/io';
import { Sheet, SheetContent } from '../ui/sheet';
import SideNavBar from './SideNavBar';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Props = {
  closeMenu: () => void;
  isOpen: boolean;
};

export function SideNavMenu({ closeMenu, isOpen }: Props) {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <Sheet open={isMobile ? isOpen : true} modal={isMobile}>
      <SheetContent side="left" className="flex flex-col">
        <button
          type="button"
          onClick={closeMenu}
          className="text-2xl m-2 text-primaryPurple self-end sm:invisible"
          aria-label="Fechar menu lateral"
        >
          <IoMdClose />
        </button>
    
        <SideNavBar />
      </SheetContent>
    </Sheet>
  );
}
