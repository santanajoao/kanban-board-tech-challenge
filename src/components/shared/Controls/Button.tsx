import { cn } from '@/utils/tailwind';
import React, { ComponentProps } from 'react';

const variants = {
  'primary-fill-rounded': 'text-white text-sm uppercase rounded-full bg-primaryPurple border-2 border-primaryPurple',
  'danger-outline-rounded': 'uppercase text-sm rounded-full text-primaryRed bg-transparent border-2 border-primaryRed',
  'neutral-outline-rounded': 'uppercase text-sm rounded-full text-primaryGray bg-transparent border-2 border-primaryGray',
  'secondary-fill-rounded': 'text-white text-sm shadow-md rounded-full bg-secondaryPurple',
  'secondary-fill': 'text-white text-sm shadow-md rounded-lg bg-secondaryPurple',
};

interface Props extends ComponentProps<'button'> {
  variant?: keyof typeof variants;
}

export function Button({ className, variant, ...props }: Props) {
  const variantClass = variant && variants[variant];
  return (
    <button
      className={cn('p-2 font-semibold', variantClass, className)}
      {...props}
    />
  );
}
