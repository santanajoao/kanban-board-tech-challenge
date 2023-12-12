'use client';

import React from 'react';
import { CardList, CardListProps } from './CardList';
import { DndKanbanCard } from './DndKanbanCard';

interface Props extends CardListProps {
  listIndex: number;
}

export function DndCardList({ tasks, listIndex }: Props) {

  return (
    <CardList tasks={tasks}>
      {(task, index) => (
        <DndKanbanCard task={task} listIndex={listIndex} cardIndex={index} />
      )}
    </CardList>
  );
}
