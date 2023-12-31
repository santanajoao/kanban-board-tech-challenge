'use client';

import useBoard from '@/hooks/useBoard';
import { DndCardList, DndCardListProps } from './DndCardList';
import { useDrop } from 'react-dnd';
import { DndCardItem } from '@/types/card';

interface Props extends DndCardListProps {}

export function DndDesktopCardList({ taskList, listIndex }: Props) {
  const { moveCard } = useBoard();

  const handleDrop = (item: DndCardItem) => {
    const cardDragIndex = item.cardIndex;
    const listDragIndex = item.listIndex;    
    if (listDragIndex === listIndex) return;

    moveCard(listDragIndex, listIndex, cardDragIndex, undefined);
  };

  const [dropData, dropRef] = useDrop({
    accept: 'CARD',
    collect: (monitor) => ({ isOver: monitor.isOver({ shallow: true }) }),
    drop: handleDrop,
    canDrop(_item, monitor) { return monitor.isOver({ shallow: true }); },
  });

  return (
    <section
      ref={dropRef}
      key={taskList.id}
      className={`p-4 shrink-0 min-w-[320px] shadow-lg h-fit rounded-3xl transition-colors ${dropData.isOver ? 'bg-secondaryPurple' : ''}`}
    >
      <h2 className="text-primaryGray text-lg font-semibold mb-8">
        {taskList.title} ({taskList.tasks.length})
      </h2>

      <DndCardList listIndex={listIndex} taskList={taskList} />
    </section>
  );
}
