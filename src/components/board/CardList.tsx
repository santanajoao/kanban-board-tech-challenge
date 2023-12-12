import type { Task } from '@/types/task';
import Link from 'next/link';
import { ReactNode } from 'react';
import { KanbanCard } from './KanbanCard';

export type CardListProps = {
  tasks: Task[];
  children?: (task: Task, cardIndex: number) => ReactNode;
};

export function CardList({ tasks, children }: CardListProps) {
  return (
    <ul className="space-y-4">
      {tasks.map((task, index) => (
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
