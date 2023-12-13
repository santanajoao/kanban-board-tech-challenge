'use client';

import { PriorityLabel } from '@/components/shared/PriorityLabel';
import { useTasks } from '@/contexts/TaskContext';
import { dateStringToDate } from '@/utils/date';

export default function ListPage() {
  const { taskLists } = useTasks();

  const t = taskLists.flatMap((taskList) =>
    taskList.tasks.map((task) =>({ ...task, taskListTitle: taskList.title })),
  );

  const tasks = [...t, ...t, ...t];

  return (
    <div className="h-full p-1">
      <table className="bg-white w-full h-fit overflow-auto">
        <thead className="text-left">
          <tr>
            <th className="border py-1 px-2">Lista</th>
            <th className="border py-1 px-2">Título</th>
            <th className="border py-1 px-2">Priority</th>
            <th className="border py-1 px-2">Data de entrega</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="border py-1 px-2">{task.taskListTitle}</td>
              <td className="border py-1 px-2">{task.title}</td>
              <td className="border py-1 px-2">
                <PriorityLabel className="text-sm" priority={task.priority} />
              </td>
              <td className="border py-1 px-2">{dateStringToDate(task.endDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
