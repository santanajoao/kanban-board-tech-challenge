'use client';

import { IoMdClose } from 'react-icons/io';
import { Board, Calendar, Timeline } from '@/components/icons';
import { LiaThListSolid } from 'react-icons/lia';
import { k2d } from '@/fonts';
import Link from 'next/link';
import { Sheet, SheetContent } from '../ui/sheet';

type Props = {
  closeMenu: () => void;
  isOpen: boolean;
};

const navItems = [
  { Icon: Board, text: 'Quadro', href: '/' },
  { Icon: LiaThListSolid, text: 'Lista', href: '/list' },
  { Icon: Timeline, text: 'Timeline', href: '/timeline' },
  { Icon: Calendar, text: 'Calendário', href: '/calendar' },
];

export function SideNavMenu({ closeMenu, isOpen }: Props) {
  return (
    <Sheet open={isOpen}>
      <SheetContent side="left">
        <aside className="flex flex-col h-full w-fit bg-white px-2 py-3">
          <button
            type="button"
            onClick={closeMenu}
            className="text-2xl text-primaryPurple self-end"
            aria-label="Fechar menu lateral"
          >
            <IoMdClose />
          </button>

          <div className="mt-16 h-full flex flex-col">
            <span className={`text-3xl ${k2d.className} text-center text-primaryPurple`}>
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
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
}
