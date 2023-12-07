import type { Task } from '@/types/task';
import Link from 'next/link';
import { KanbanCard } from './KanbanCard';

type Props = {
  tasks: Task[];
};

export function CardList({ tasks }: Props) {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.id}>
          <Link
            href={`/card/${task.id  }`}
            className="block overflow-hidden rounded-xl outline-2 outline outline-transparent focus:outline-secondaryPurple hover:outline-secondaryPurple"
          >
            <KanbanCard task={task} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
