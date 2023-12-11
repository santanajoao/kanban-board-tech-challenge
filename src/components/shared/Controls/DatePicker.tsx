import { cn } from '@/utils/tailwind';
import React, { ComponentProps } from 'react';
import CalendarFill from '@/components/icons/CalendarFill';

interface Props extends ComponentProps<'input'> {
  label: string;
}

export default function DatePicker({
  label, className, ...props
}: Props) {
  return (
    <label className="relative flex w-full items-center max-w-[280px]">
      <span
        className="absolute left-0 top-0 w-fit current px-1 text-[11px] translate-x-2 text-primaryGray -translate-y-1/2 bg-white"
      >
        {label}
      </span>

      <input
        type="date"
        className={cn('after:invisible before:invisible border w-full border-secondaryGray rounded-md text-primaryGray px-2 py-3 text-sm placeholder:font-semibold placeholder:text-secondaryGray', className)}
        {...props}
      />

      <CalendarFill className="right-0 mr-2 bg-white absolute text-primaryPurple text-2xl" />
    </label>
  );
}
