import { TaskPriority } from '@/types/task';
import { cn } from '@/utils/tailwind';

type Props = {
  priority: TaskPriority;
  className: string;
};

export function PriorityLabel({ priority, className }: Props) {
  const customStyles: Record<TaskPriority, string> = {
    'LOW': 'border text-primaryGreen border-primaryGreen',
    'MEDIUM': 'border text-primaryYellow border-primaryYellow',
    'HIGH': 'text-white bg-primaryRed',
  };

  return (
    <span
      className={cn(`w-20 inline-block text-center p-1 rounded-full ${customStyles[priority]}`, className)}
    >
      {priority}
    </span>
  );
}
