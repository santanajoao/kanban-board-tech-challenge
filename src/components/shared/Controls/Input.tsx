import { cn } from '@/utils/tailwind';
import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'input'> {
  label: string;
}

export default function Input({
  type = 'text', label, className, ...props
}: Props) {
  return (
    <label className="relative">
      <span
        className="absolute left-0 right-0 w-fit current px-1 text-[11px] translate-x-2 text-primaryGray -translate-y-1/2 bg-white"
      >
        {label}
      </span>

      <input
        type={type}
        className={cn('border w-full border-secondaryGray rounded-md text-primaryGray px-2 py-3 text-sm placeholder:font-semibold placeholder:text-secondaryGray', className)}
        {...props}
      />
    </label>
  );
}
