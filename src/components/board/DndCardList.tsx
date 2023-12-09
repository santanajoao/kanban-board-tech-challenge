'use client';

import React from 'react';
import { DndProvider } from 'react-dnd';
import { CardListProps } from './CardList';
import Link from 'next/link';
import { DndKanbanCard } from './DndKanbanCard';
import { TouchBackend } from 'react-dnd-touch-backend';

// TODO:
// - criar contexto para informações sobre boards e tasks
// - CardList mobile usara TouchBackend, CardList desktop usará o padrão
// - tentar usar shadcn

interface Props extends CardListProps {
  moveCard: (to: number, from: number) => void;
}

export function DndCardList({ tasks, moveCard }: Props) {
  return (
    <DndProvider
      backend={TouchBackend}
      options={{ delayTouchStart: 100, delayMouseStart: 0, }}
    >
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={task.id}>
            <Link
              href={`/card/${task.id  }`}
              className="block"
            >
              <DndKanbanCard task={task} index={index} moveCard={moveCard} />
            </Link>
          </li>
        ))}
      </ul>
    </DndProvider>
  );
}
