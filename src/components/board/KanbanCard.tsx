import type { Task } from '@/types/task';
import { PriorityLabel } from './PriorityLabel';
import { CardTimeDisplay } from './CardTimeDisplay';

type Props = {
  task: Task;
};

export function KanbanCard({ task }: Props) {
  return (
    <div className="text-primaryGray cursor-pointer text-sm bg-white p-5 shadow-md">
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
