'use client';

import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { LiaThListSolid } from 'react-icons/lia';
import { K2D } from 'next/font/google';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import { Board, Calendar, Timeline } from '@/components/icons';
import { Task } from '@/types/task';
import KanbanCard from '@/components/board/KanbanCard';
import Link from 'next/link';

const k2d = K2D({ subsets: ['latin'], weight: ['700'] });

const navItems = [
  { icon: Board, text: 'Quadro' },
  { icon: LiaThListSolid, text: 'Lista' },
  { icon: Timeline, text: 'Timeline' },
  { icon: Calendar, text: 'Calendário' },
];

const tasks: Task[] = [
  { id: 1, title: 'Testar Navegadores', description: 'Verificar e garantir a compatibilidade da aplicação em diferentes navegadores.', endDate: '2023-11-25T00:00:00', priority: 'HIGH' },
  { id: 2, title: 'Atualizar Bibliotecas', description: 'Manter as libs atualizadas para garantir segurança e aproveitar novos recursos.', endDate: '2023-12-25T00:00:00', priority: 'LOW' },
  { id: 3, title: 'Implementar animações', description: 'Adicionar efeitos visuais e transições para melhorar a experiência do usuário.', endDate: '2023-12-25T00:00:00', priority: 'MEDIUM' },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => { setIsOpen(false); };
  const openMenu = () => { setIsOpen(true); };

  return (
    <div>
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

      <header className="flex bg-primaryPurple px-3 py-2 text-white">
        <button
          type="button"
          onClick={openMenu}
          className="text-2xl"
          aria-label="Abrir menu lateral"
        >
          <LuMenu />
        </button>

        <h1 className={`text-2xl ${k2d.className} w-full text-center mr-6`}>
            Taskban
        </h1>
      </header>

      <main className="bg-terciaryGray px-3 py-4">
        <div className="m-auto w-fit mb-4">
          <label htmlFor="board-list-select" className="sr-only">
            Selecionar lista de cartões
          </label>

          <select className="bg-transparent p-1 font-bold text-primaryGray cursor-pointer" id="board-list-select">
            <option value="" className="">Todo (4)</option>
            <option value="" className="">Doing (1)</option>
            <option value="" className="">QA (1)</option>
            <option value="" className="">Done (1)</option>
          </select>
        </div>

        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id}>
              <Link
                href={''}
                className="block overflow-hidden rounded-xl focus:outline-secondaryPurple"
              >
                <KanbanCard task={task} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
