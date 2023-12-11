import { cn } from '@/utils/tailwind';
import React, { ComponentProps } from 'react';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label: string;
}

export default function TextArea({
  label, className, ...props
}: TextAreaProps) {
  return (
    <label className="relative text-primaryGray">
      <span
        className="absolute left-0 right-0 w-fit current px-1 text-[11px] translate-x-2 -translate-y-1/2 bg-white"
      >
        {label}
      </span>

      <textarea
        className={cn('border resize-none w-full border-secondaryGray rounded-md px-2 py-3 text-sm placeholder:font-semibold placeholder:text-secondaryGray', className)}
        {...props}
      />
    </label>
  );
}
