import { cn } from '@/utils/tailwind';
import React, { ChangeEventHandler } from 'react';

export type TextAreaProps = {
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  label: string;
  className?: string;
}

export default function TextArea({
  placeholder, value, onChange, label, className,
}: TextAreaProps) {
  return (
    <label className="relative">
      <span
        className="absolute left-0 right-0 w-fit current px-1 text-[11px] translate-x-2 text-primaryGray -translate-y-1/2 bg-white"
      >
        {label}
      </span>

      <textarea
        className={cn('border resize-none w-full border-secondaryGray rounded-md px-2 py-3 text-sm placeholder:font-semibold placeholder:text-secondaryGray', className)}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}
