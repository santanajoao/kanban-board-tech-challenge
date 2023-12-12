import React from 'react';
import { CardList, CardListProps } from './CardList';
import { DndKanbanCard } from './DndKanbanCard';

export function DndCardList({ tasks }: CardListProps) {
  return (
    <CardList tasks={tasks}>
      {(task, index) => (
        <DndKanbanCard task={task} index={index} />
      )}
    </CardList>
  );
}
