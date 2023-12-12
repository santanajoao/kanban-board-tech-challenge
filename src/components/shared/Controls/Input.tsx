import { cn } from '@/utils/tailwind';
import React, { ComponentProps } from 'react';
import { FieldsetInputProps, inputVariants } from './variants';

interface Props extends ComponentProps<'input'>, FieldsetInputProps {}

export default function Input({
  type = 'text', label, className, variant, ...props
}: Props) {
  const variantClass = variant && inputVariants[variant];

  return (
    <label className={cn(variantClass?.container)}>
      <span
        className={cn(variantClass?.label)}
      >
        {label}
      </span>

      <input
        type={type}
        className={cn(variantClass?.input, className)}
        {...props}
      />
    </label>
  );
}
