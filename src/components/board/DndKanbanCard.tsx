'use client';

import { useDrag, useDrop } from 'react-dnd';
import { KanbanCard, KanbanCardProps } from './KanbanCard';
import useMobileBoard from '@/hooks/useMobileBoard';

interface Props extends KanbanCardProps {
  index: number;
}

type ItemType = {
  type: string;
  index: number;
};

export function DndKanbanCard({ index, task }: Props) {
  const { moveCard} = useMobileBoard();
  
  const [dragData, dragRef] = useDrag({
    type: 'CARD',
    item: { type: 'CARD', index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const handleDrop = (item: ItemType) => {
    const dragIndex = item.index;
    const dropIndex = index;
    if (dragIndex === dropIndex) return;

    moveCard(dragIndex, dropIndex);
    item.index = dropIndex;
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
