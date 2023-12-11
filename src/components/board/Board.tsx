'use client';

import { Swipable} from '../shared/Swipable';
import { DndCardList } from './DndCardList';
import useMobileBoard from '@/hooks/useMobileBoard';

export function Board() {
  const {
    nextBoard,
    prevBoard,
    selectedList,
    taskLists,
    listIndex,
    setListIndex,
  } = useMobileBoard();

  const requiredSwipeDistance = 200;

  return (
    <Swipable
      minimumDistance={requiredSwipeDistance}
      onSwipeLeft={nextBoard}
      onSwipeRight={prevBoard}
      className="flex-1 overflow-y-auto flex flex-col"
    >
      <article className="px-3 py-4 flex-1">
        <div className="m-auto w-fit mb-4">
          <label htmlFor="board-list-select" className="sr-only">
            Selecionar lista de tarefas
          </label>

          <select
            value={listIndex}
            className="bg-transparent p-1 font-bold text-primaryGray cursor-pointer"
            id="board-list-select"
            onChange={(e) => setListIndex(+e.target.value)}
          >
            {taskLists.map((list, index) => (
              <option key={list.id} value={index}>
                {list.title} ({list.tasks.length})
              </option>
            ))}
          </select>
        </div>
        
        <DndCardList tasks={selectedList.tasks} />
      </article>
    </Swipable>
  );
}
