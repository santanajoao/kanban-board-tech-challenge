import { Task } from '@/types/task';
import PriorityLabel from './PriorityLabel';
import CardTimeDisplay from './CardTimeDisplay';

type Props = {
  task: Task;
};

export default function KanbanCard({ task }: Props) {
  return (
    <div className="text-primaryGray cursor-pointer text-sm bg-white p-5 shadow-md">
      <h3 className="text-xl font-semibold mb-3">
        {task.title}
      </h3>

      <p className="mb-4">{task.description}</p>

      <div className="flex justify-between items-center">
        <CardTimeDisplay dateString={task.endDate} />

        <PriorityLabel priority={task.priority} />
      </div>
    </div>
  );
}
