import type { Task, TaskList } from '@/types/task';
import Link from 'next/link';
import { ReactNode } from 'react';
import { KanbanCard } from './KanbanCard';

export type CardListProps = {
  taskList: TaskList;
  children?: (task: Task, cardIndex: number) => ReactNode;
};

export function CardList({ taskList, children }: CardListProps) {
  return (
    <ul className="space-y-4 w-fit">
      {taskList.tasks.map((task, index) => (
        <li key={task.id}>
          <Link
            href={`/card/${task.id  }`}
            className="block rounded-xl outline-2 outline outline-transparent focus:outline-secondaryPurple hover:outline-secondaryPurple"
          >
            {children ? children(task, index) : <KanbanCard task={task} />}
          </Link>
        </li>
      ))}
    </ul>
  );
}
