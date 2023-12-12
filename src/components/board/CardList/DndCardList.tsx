import React from 'react';
import { CardList, CardListProps } from './CardList';
import { DndKanbanCard } from '../KanbanCard/DndKanbanCard';

interface Props extends CardListProps {
  listIndex: number;
}

export function DndCardList({ taskList, listIndex }: Props) {
  return (
    <CardList taskList={taskList}>
      {(task, index) => (
        <DndKanbanCard task={task} listIndex={listIndex} cardIndex={index} />
      )}
    </CardList>
  );
}
