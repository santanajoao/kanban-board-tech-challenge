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
  { Icon: Board, text: 'Quadro' },
  { Icon: LiaThListSolid, text: 'Lista' },
  { Icon: Timeline, text: 'Timeline' },
  { Icon: Calendar, text: 'Calendário' },
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
              {navItems.map(({ text, Icon }) => (
                <li key={text}>
                  <button type="button" className="flex gap-x-5 py-2 px-14 w-full">
                    <Icon className="fill-primaryPurple w-6 text-2xl" />

                    <span>{text}</span>
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
