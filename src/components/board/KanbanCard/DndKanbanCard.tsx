'use client';

import { useDrag, useDrop } from 'react-dnd';
import { KanbanCard, KanbanCardProps } from './KanbanCard';
import useMobileBoard from '@/hooks/useMobileBoard';

interface Props extends KanbanCardProps {
  cardIndex: number;
  listIndex: number;
}

type ItemType = {
  type: string;
  cardIndex: number;
  listIndex: number;
};

export function DndKanbanCard({ cardIndex, task, listIndex }: Props) {
  const { moveCard } = useMobileBoard();
  
  const [dragData, dragRef] = useDrag({
    type: 'CARD',
    item: { type: 'CARD', cardIndex, listIndex },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const handleDrop = (item: ItemType) => {
    const cardDragIndex = item.cardIndex;
    const listDragIndex = item.listIndex;
    if (cardDragIndex === cardIndex && listDragIndex === listIndex) return;

    moveCard(listDragIndex, listIndex, cardDragIndex, cardIndex);
    item.cardIndex = cardIndex;
  };

  const [dropData, dropRef] = useDrop({
    accept: 'CARD',
    collect: (monitor) => ({ isOver: monitor.isOver() }),
    drop: handleDrop,
  });

  return (
    <div
      ref={dropRef}
      className={`${dropData.isOver ? 'outline-2 outline-dashed outline-primaryPurple opacity-50' : ''} rounded-xl transition-opacity`}
    >
      <div
        ref={dragRef}
        className={`${dragData.isDragging ? 'opacity-50' : ''} overflow-hidden rounded-xl`}
      >
        <KanbanCard task={task} />
      </div>
    </div>
  );
}
