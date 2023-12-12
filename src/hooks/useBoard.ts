'use client';

import { useTasks } from '@/contexts/TaskContext';
import { jsonCopy } from '@/utils/copy';

export default function useBoard() {
  const { taskLists, setTaskLists } = useTasks();
  
  const moveCard = (fromList: number, toList: number, fromCard: number, toCard?: number) => {
    const listsCopy = jsonCopy(taskLists);

    const initialTaskList = listsCopy[fromList].tasks;
    const targetTaskList = listsCopy[toList].tasks;

    const dragged = initialTaskList[fromCard];
    dragged.isDone = toList === 3;
    
    if (toCard !== undefined) {
      const target = targetTaskList[toCard];
      target.isDone = fromList === 3;
    
      targetTaskList[toCard] = dragged;
      initialTaskList[fromCard] = target;
    } else {
      targetTaskList.push(dragged);
      initialTaskList.splice(fromCard, 1);
    }

    setTaskLists(listsCopy);
  };

  return {
    moveCard,
    taskLists,
    setTaskLists,
  };
}
