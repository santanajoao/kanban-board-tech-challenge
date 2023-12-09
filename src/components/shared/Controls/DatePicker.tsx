import { cn } from '@/utils/tailwind';
import React from 'react';
import { TextAreaProps } from './TextArea';
import CalendarFill from '@/components/icons/CalendarFill';

export default function DatePicker({
  placeholder, value, onChange, label, className,
}: TextAreaProps) {
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <CalendarFill className="right-0 mr-2 bg-white absolute text-primaryPurple text-2xl" />
    </label>
  );
}
