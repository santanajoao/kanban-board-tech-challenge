import { cn } from '@/utils/tailwind';
import { ComponentProps } from 'react';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const variants = {
  'primary': 'text-primaryPurple text-center text-2xl font-semibold',
  'definition-small': 'text-xs text-primaryGray',
};

interface Props extends ComponentProps<Headings> {
  as?: Headings;
  variant?: keyof typeof variants;
}

export function Title({ as = 'h1', variant, className, ...props }: Props) {
  const Component = as;

  const variantClass = variant && variants[variant];

  return (
    <Component {...props} className={cn(variantClass, className)} />
  );
}
