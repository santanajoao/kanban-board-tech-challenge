import { cn } from '@/utils/tailwind';
import React, { ComponentProps } from 'react';
import { FieldsetInputProps, inputVariants } from './variants';

interface TextAreaProps extends ComponentProps<'textarea'>, FieldsetInputProps {}

export default function TextArea({
  label, className, variant, ...props
}: TextAreaProps) {
  const variantClass = variant && inputVariants[variant];
  
  return (
    <label className={cn(variantClass?.container)}>
      <span
        className={cn(variantClass?.label)}
      >
        {label}
      </span>

      <textarea
        className={cn('resize-none', variantClass?.input, className)}
        {...props}
      />
    </label>
  );
}
