import { useTasks } from '@/contexts/TaskContext';
import { TaskList } from '@/types/task';
import { useState } from 'react';

export default function useMobileBoard() {
  const { taskLists, setTaskLists } = useTasks();
  const [listIndex, setListIndex] = useState<number>(0);
  
  const nextBoard = () => {
    setListIndex((prev) => (prev + 1) % taskLists.length);
  };
  
  const prevBoard = () => {
    setListIndex((prev) => (prev === 0 ? taskLists.length - 1 : prev - 1));
  };

  const moveCard = (from: number, to: number) => {
    const listsJsonCopy = JSON.stringify(taskLists);
    const listsCopy = JSON.parse(listsJsonCopy) as TaskList[];

    const selectedTaskList = listsCopy[listIndex].tasks;

    const hovered = selectedTaskList[to];
    selectedTaskList[to] = selectedTaskList[from];
    selectedTaskList[from] = hovered;

    setTaskLists(listsCopy);
  };

  const selectedList = taskLists[listIndex];

  return {
    nextBoard,
    prevBoard,
    moveCard,
    selectedList,
    taskLists,
    listIndex,
    setListIndex,
  };
}
