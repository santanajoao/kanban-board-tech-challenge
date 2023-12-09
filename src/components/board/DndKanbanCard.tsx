import { useDrag, useDrop } from 'react-dnd';
import { KanbanCard, KanbanCardProps } from './KanbanCard';

interface Props extends KanbanCardProps {
  index: number;
  moveCard: (from: number, to: number) => void;
}

export function DndKanbanCard({ index, moveCard, task }: Props) {
  const [dragData, dragRef] = useDrag({
    type: 'CARD',
    item: { type: 'CARD', index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [dropData, dropRef] = useDrop({
    accept: 'CARD',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item: { type: string, index: number }) => {
      const dragIndex = item.index;
      const dropIndex = index;
      if (dragIndex === dropIndex) return;

      moveCard(dragIndex, dropIndex);
      item.index = dropIndex;
    },
  });

  return (
    <div
      ref={dropRef}
      className={`${dropData.isOver ? 'outline-2 outline-dashed outline-primaryPurple opacity-50' : ''} rounded-2xl transition-opacity`}
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
