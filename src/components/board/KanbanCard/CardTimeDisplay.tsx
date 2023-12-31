'use client';

import { Clock } from '../../icons/Clock';
import { CircleCheck } from '../../icons';
import { dateStringToDate } from '@/utils/date';

type Props = {
  dateString: string;
  isDone: boolean
};

export function CardTimeDisplay({ dateString, isDone }: Props) {
  const today = new Date();
  const endDate = dateStringToDate(dateString);
  const timeIsUp = today > endDate;
  const commonClasses = 'flex gap-x-2 items-center';

  if (isDone) {
    return (
      <div className={`${commonClasses} text-primaryGreen`}>
        <CircleCheck className="text-2xl" />
        
        <span>Finalizado</span>
      </div>
    );
  }

  return (
    <div className={`${commonClasses} ${timeIsUp ? 'text-primaryRed' : 'text-primaryGray'}`}>
      <Clock className="text-2xl" />

      <time dateTime={endDate.toUTCString()} className="text-inherit">
        {endDate.toLocaleDateString()}
      </time>
    </div>
  );
}
