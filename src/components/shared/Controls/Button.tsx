import { cn } from '@/utils/tailwind';
import React, { ComponentProps } from 'react';

const variants = {
  'primary-fill-rounded': 'bg-primaryPurple border-2 border-primaryPurple',
  'danger-outline-rounded': 'text-primaryRed bg-transparent border-2 border-primaryRed',
};

interface Props extends ComponentProps<'button'> {
  variant: keyof typeof variants;
}

export default function Button({ className, variant, ...props }: Props) {
  const variantClass = variants[variant];
  return (
    <button
      className={cn('uppercase text-white bg-primaryPurple border-2 border-primaryPurple rounded-full p-2 font-semibold', variantClass, className)}
      {...props}
    />
  );
}
