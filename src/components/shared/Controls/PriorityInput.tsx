import { TaskPriority } from '@/types/task';
import { ComponentProps } from 'react';
import { PriorityLabel } from '../PriorityLabel';

const priorities: TaskPriority[] = ['LOW', 'MEDIUM', 'HIGH'];

interface Props extends ComponentProps<'input'> {}

export default function PriorityInput(props: Props) {
  return (
    <fieldset className="flex gap-2 items-center">
      <legend className="w-fit text-primaryGray text-[11px] mb-1">Priority</legend>

      {priorities.map((priority) => (
        <label key={priority} className="h-fit cursor-pointer">
          <input
            defaultChecked={priority === 'LOW'}
            name="priority"
            {...props}
            type="radio"
            className="sr-only peer"
            value={priority}
          />

          <PriorityLabel
            priority={priority}
            className="peer-checked:outline-secondaryPurple peer-checked:outline-[3px] peer-checked:outline text-sm"
          />
        </label>
      ))}
    </fieldset>
  );
}
