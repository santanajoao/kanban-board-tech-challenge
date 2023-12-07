'use client';

import React, { useState } from 'react';
import { boards } from '@/data/boards';
import Swipable from '../shared/Swipable';
import CardList from './CardList';

export default function Board() {
  const [boardIndex, setBoardIndex] = useState<number>(0);

  const nextBoard = () => {
    setBoardIndex((prev) => (prev + 1) % boards.length);
  };
  
  const prevBoard = () => {
    setBoardIndex((prev) => (prev === 0 ? boards.length - 1 : prev - 1));
  };
  
  const selectedBoard = boards[boardIndex];
  const requiredSwipeDistance = 200;

  return (
    <Swipable
      minimumDistance={requiredSwipeDistance}
      onSwipeLeft={prevBoard}
      onSwipeRight={nextBoard}
      className="flex-1 overflow-y-auto flex flex-col"
    >
      <main className="bg-terciaryGray px-3 py-4 flex-1">
        <div className="m-auto w-fit mb-4">
          <label htmlFor="board-list-select" className="sr-only">
            Selecionar lista de tarefas
          </label>

          <select
            value={boardIndex}
            className="bg-transparent p-1 font-bold text-primaryGray cursor-pointer"
            id="board-list-select"
            onChange={(e) => setBoardIndex(+e.target.value)}
          >
            {boards.map((board, index) => (
              <option key={board.id} value={index}>
                {board.title} ({board.tasks.length})
              </option>
            ))}
          </select>
        </div>

        <CardList tasks={selectedBoard.tasks} />
      </main>
    </Swipable>
  );
}
