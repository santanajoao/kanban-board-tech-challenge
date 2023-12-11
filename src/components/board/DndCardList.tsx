import React from 'react';
import { DndProvider } from 'react-dnd';
import { CardList, CardListProps } from './CardList';
import { DndKanbanCard } from './DndKanbanCard';
import { TouchBackend } from 'react-dnd-touch-backend';

// TODO:
// - CardList mobile usara TouchBackend, CardList desktop usará o padrão

export function DndCardList({ tasks }: CardListProps) {
  return (
    <DndProvider
      backend={TouchBackend}
      options={{ delayTouchStart: 100, delayMouseStart: 0, }}
    >
      <CardList tasks={tasks}>
        {(task, index) => (
          <DndKanbanCard task={task} index={index} />
        )}
      </CardList>
    </DndProvider>
  );
}
