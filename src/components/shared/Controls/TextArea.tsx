import { cn } from '@/utils/tailwind';
import React, { ComponentProps, ForwardedRef, forwardRef } from 'react';
import { FieldsetInputProps, inputVariants } from './variants';

interface TextAreaProps extends ComponentProps<'textarea'>, FieldsetInputProps {}

export const TextArea = forwardRef(
  function TextArea($props: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) {
    const { label, className, variant, ...props } = $props;

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
          ref={ref}
        />
      </label>
    );
  }
);