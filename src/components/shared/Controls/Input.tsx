import { cn } from '@/utils/tailwind';
import React, { ComponentProps, ForwardedRef, forwardRef } from 'react';
import { FieldsetInputProps, inputVariants } from './variants';

interface Props extends ComponentProps<'input'>, FieldsetInputProps {}

export const Input = forwardRef(
  function Input($props: Props, ref: ForwardedRef<HTMLInputElement>) {
    const { type = 'text', label, className, variant, ...props } = $props;

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
          ref={ref}
        />
      </label>
    );
  }
);