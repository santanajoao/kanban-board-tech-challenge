import { cn } from '@/utils/tailwind';
import React, { ComponentProps } from 'react';
import CalendarFill from '@/components/icons/CalendarFill';
import { FieldsetInputProps, inputVariants } from './variants';

interface Props extends Omit<ComponentProps<'input'>, 'className'>, FieldsetInputProps {
  classes?: {
    container?: string;
    label?: string;
    input?: string;
  },
}

export default function DatePicker({
  label, classes, variant, ...props
}: Props) {
  const variantClass = variant && inputVariants[variant];

  return (
    <label className={cn(variantClass?.container, classes?.container)}>
      <span
        className={cn(variantClass?.label, classes?.label)}
      >
        {label}
      </span>

      <input
        {...props}
        type="date"
        className={cn(variantClass?.input, classes?.input)}
      />

      <CalendarFill className="right-0 mr-2 bg-white absolute text-primaryPurple text-2xl" />
    </label>
  );
}
