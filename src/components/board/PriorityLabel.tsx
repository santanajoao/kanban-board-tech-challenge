import { TaskPriority } from '@/types/task';

type Props = {
  priority: TaskPriority;
};

export default function PriorityLabel({ priority }: Props) {
  const customStyles: Record<TaskPriority, string> = {
    'LOW': 'border text-primaryGreen border-primaryGreen',
    'MEDIUM': 'border text-primaryYellow border-primaryYellow',
    'HIGH': 'text-white bg-primaryRed',
  };

  return (
    <span
      className={`w-20 text-center p-1 rounded-full ${customStyles[priority]}`}
    >
      {priority}
    </span>
  );
}
