'use client';

import { IoMdClose } from 'react-icons/io';
import { Sheet, SheetContent } from '../ui/sheet';
import { Board, Calendar, Timeline } from '@/components/icons';
import { LiaThListSolid } from 'react-icons/lia';
import Link from 'next/link';

const navItems = [
  { Icon: Board, text: 'Quadro', href: '/' },
  { Icon: LiaThListSolid, text: 'Lista', href: '/list' },
  { Icon: Timeline, text: 'Timeline', href: '/timeline' },
  { Icon: Calendar, text: 'Calendário', href: '/calendar' },
];

import { k2d } from '@/fonts';

type Props = {
  closeMenu: () => void;
  isOpen: boolean;
  backdrop: boolean;
};

export function SideNavMenu({ closeMenu, isOpen, backdrop }: Props) {

  return (
    <Sheet open={isOpen} modal={backdrop}>
      <SheetContent side="left" className="flex flex-col">    
        <aside className="w-64 flex flex-col h-full bg-white px-2 py-3">
          <button
            type="button"
            onClick={closeMenu}
            className="text-2xl m-2 text-primaryPurple self-end sm:hidden"
            aria-label="Fechar menu lateral"
          >
            <IoMdClose />
          </button>

          <span className={`text-3xl ${k2d.className} mt-16 text-center text-primaryPurple`}>
            Taskban
          </span>

          <nav className="mt-16">
            <ul className="space-y-6">
              {navItems.map(({ text, Icon, href }) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="flex gap-x-5 py-2 px-14 w-full"
                  >
                    <Icon className="text-primaryPurple text-2xl" />

                    <span>{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </SheetContent>
    </Sheet>
  );
}
