import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Board, Calendar, Timeline } from '@/components/icons';
import { LiaThListSolid } from 'react-icons/lia';
import { Drawer } from '@mui/material';
import { k2d } from '@/fonts';

type Props = {
  closeMenu: () => void;
  isOpen: boolean;
};

const navItems = [
  { icon: Board, text: 'Quadro' },
  { icon: LiaThListSolid, text: 'Lista' },
  { icon: Timeline, text: 'Timeline' },
  { icon: Calendar, text: 'Calendário' },
];

export default function SideNavMenu({ closeMenu, isOpen }: Props) {
  return (
    <Drawer anchor="left" open={isOpen} variant="temporary" onClose={closeMenu}>

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
              {navItems.map((item) => (
                <li key={item.text}>
                  <button type="button" className="flex gap-x-5 py-2 px-14 w-full">
                    <item.icon className="fill-primaryPurple w-6 text-2xl" />

                    <span>{item.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </Drawer>
  );
}
