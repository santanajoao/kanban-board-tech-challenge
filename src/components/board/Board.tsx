'use client';

import { useState } from 'react';
import { taskLists } from '@/data/board';
import { Swipable} from '../shared/Swipable';
import { DndCardList } from './DndCardList';
import useLocalStorage from '@/hooks/useLocalStorage';
import { TaskList } from '@/types/task';

export function Board() {
  const lists = useLocalStorage<TaskList[]>('taskLists', taskLists);
  const [listIndex, setListIndex] = useState<number>(0);

  const nextBoard = () => {
    setListIndex((prev) => (prev + 1) % lists.value.length);
  };
  
  const prevBoard = () => {
    setListIndex((prev) => (prev === 0 ? lists.value.length - 1 : prev - 1));
  };

  const moveCard = (from: number, to: number) => {
    const listsJsonCopy = JSON.stringify(lists.value);
    const listsCopy = JSON.parse(listsJsonCopy) as TaskList[];

    const selectedTaskList = listsCopy[listIndex].tasks;

    const hovered = selectedTaskList[to];
    selectedTaskList[to] = selectedTaskList[from];
    selectedTaskList[from] = hovered;

    lists.set(listsCopy);
  };
  
  const selectedList = lists.value[listIndex];
  const requiredSwipeDistance = 200;

  return (
    <Swipable
      minimumDistance={requiredSwipeDistance}
      onSwipeLeft={nextBoard}
      onSwipeRight={prevBoard}
      className="flex-1 overflow-y-auto flex flex-col"
    >
      <main className="bg-terciaryGray px-3 py-4 flex-1">
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
            {lists.value.map((list, index) => (
              <option key={list.id} value={index}>
                {list.title} ({list.tasks.length})
              </option>
            ))}
          </select>
        </div>
        
        <DndCardList moveCard={moveCard} tasks={selectedList.tasks} />
      </main>
    </Swipable>
  );
}
