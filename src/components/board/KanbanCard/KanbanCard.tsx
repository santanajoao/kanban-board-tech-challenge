import type { Task } from '@/types/task';
import { PriorityLabel } from '../../shared/PriorityLabel';
import { CardTimeDisplay } from './CardTimeDisplay';

export type KanbanCardProps = {
  task: Task;
};

export function KanbanCard({ task }: KanbanCardProps) {
  return (
    <div className="text-primaryGray cursor-pointer text-sm bg-white p-5 shadow-md sm:w-80">
      <h2 className="text-lg font-semibold mb-3">
        {task.title}
      </h2>

      <p className="mb-4">{task.description}</p>

      <div className="flex justify-between items-center">
        <CardTimeDisplay dateString={task.endDate} isDone={task.isDone} />

        <PriorityLabel priority={task.priority} />
      </div>
    </div>
  );
}
