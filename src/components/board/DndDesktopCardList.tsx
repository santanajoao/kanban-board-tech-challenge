import useBoard from '@/hooks/useBoard';
import { CardListProps } from './CardList';
import { DndCardList } from './DndCardList';
import { useDrop } from 'react-dnd';

interface Props extends CardListProps {
  listIndex: number;
}

type ItemType = {
  type: string;
  cardIndex: number;
  listIndex: number;
};

export default function DndDesktopCardList({ taskList, listIndex }: Props) {
  const { moveCard } = useBoard();

  const handleDrop = (item: ItemType) => {
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
      className={`p-4 shadow-lg h-fit rounded-3xl ${dropData.isOver ? 'bg-red-300' : ''}`}
    >
      <h2 className="text-primaryGray text-lg font-semibold mb-8">
        {taskList.title} ({taskList.tasks.length})
      </h2>

      <DndCardList listIndex={listIndex} taskList={taskList} />
    </section>
  );
}
