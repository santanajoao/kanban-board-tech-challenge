import React from 'react';
import KanbanCard from './KanbanCard';
import { Task } from '@/types/task';
import Link from 'next/link';

const tasks: Task[] = [
  { id: 1, title: 'Testar Navegadores', description: 'Verificar e garantir a compatibilidade da aplicação em diferentes navegadores.', endDate: '2023-11-25T00:00:00', priority: 'HIGH' },
  { id: 2, title: 'Atualizar Bibliotecas', description: 'Manter as libs atualizadas para garantir segurança e aproveitar novos recursos.', endDate: '2023-12-25T00:00:00', priority: 'LOW' },
  { id: 3, title: 'Implementar animações', description: 'Adicionar efeitos visuais e transições para melhorar a experiência do usuário.', endDate: '2023-12-25T00:00:00', priority: 'MEDIUM' },
  { id: 4, title: 'Definir armazenamento de datas', description: 'Definir uma forma eficiente de armazenar e fazer as comparações das datas.', endDate: '2023-12-25T00:00:00', priority: 'MEDIUM' },
];

export default function Board() {
  return (
    <main className="bg-terciaryGray px-3 py-4 flex-1 overflow-y-auto">
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
  );
}
