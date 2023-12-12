'use client';

import { useTasks } from '@/contexts/TaskContext';
import { jsonCopy } from '@/utils/copy';

export default function useBoard() {
  const { taskLists, setTaskLists } = useTasks();
  
  const moveCard = (fromList: number, toList: number, fromCard: number, toCard: number) => {
    const listsCopy = jsonCopy(taskLists);

    const initialTaskList = listsCopy[fromList].tasks;
    const targetTaskList = listsCopy[toList].tasks;

    const dragged = initialTaskList[fromCard];
    const target = targetTaskList[toCard];
    dragged.isDone = toList === 3;
    target.isDone = fromList === 3;
    
    targetTaskList[toCard] = dragged;
    initialTaskList[fromCard] = target;

    setTaskLists(listsCopy);
  };

  return {
    moveCard,
    taskLists,
    setTaskLists,
  };
}
