import React from 'react';
import { CardList, CardListProps } from './CardList';
import { DndKanbanCard } from '../KanbanCard/DndKanbanCard';

export interface DndCardListProps extends CardListProps {
  listIndex: number;
}

export function DndCardList({ taskList, listIndex }: DndCardListProps) {
  return (
    <CardList taskList={taskList}>
      {(task, index) => (
        <DndKanbanCard task={task} listIndex={listIndex} cardIndex={index} />
      )}
    </CardList>
  );
}
