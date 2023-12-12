'use client';

import type { Task, TaskList } from '@/types/task';
import { ReactNode } from 'react';
import { KanbanCard } from '../KanbanCard/KanbanCard';
import { useModal } from '@/contexts/ModalContext';

export type CardListProps = {
  taskList: TaskList;
  children?: (task: Task, cardIndex: number) => ReactNode;
};

export function CardList({ taskList, children }: CardListProps) {
  const { openModal } = useModal();

  return (
    <ul className="space-y-4 w-full">
      {taskList.tasks.map((task, index) => (
        <li key={task.id}>
          <button
            onClick={() => openModal('cardDetails', { taskList, cardIndex: index })}
            type="button"
            className="block rounded-xl outline-2 outline outline-transparent focus:outline-secondaryPurple hover:outline-secondaryPurple w-full text-left"
          >
            {children ? children(task, index) : <KanbanCard task={task} />}
          </button>
        </li>
      ))}
    </ul>
  );
}
