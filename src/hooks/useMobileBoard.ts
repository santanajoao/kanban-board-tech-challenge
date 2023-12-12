'use client';

import { useState } from 'react';
import useBoard from './useBoard';

export default function useMobileBoard() {
  const { taskLists, moveCard } = useBoard();
  const [listIndex, setListIndex] = useState<number>(0);
  
  const nextBoard = () => {
    setListIndex((prev) => (prev + 1) % taskLists.length);
  };
  
  const prevBoard = () => {
    setListIndex((prev) => (prev === 0 ? taskLists.length - 1 : prev - 1));
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
