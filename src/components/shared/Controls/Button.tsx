import { cn } from '@/utils/tailwind';
import React, { ComponentProps } from 'react';

const variants = {
  'primary-fill-rounded': 'text-white  uppercase rounded-full bg-primaryPurple border-2 border-primaryPurple',
  'danger-outline-rounded': 'uppercase rounded-full text-primaryRed bg-transparent border-2 border-primaryRed',
  'secondary-fill': 'text-white text-sm shadow-md rounded-lg bg-secondaryPurple'
};

interface Props extends ComponentProps<'button'> {
  variant: keyof typeof variants;
}

export default function Button({ className, variant, ...props }: Props) {
  const variantClass = variants[variant];
  return (
    <button
      className={cn('p-2 font-semibold', variantClass, className)}
      {...props}
    />
  );
}
