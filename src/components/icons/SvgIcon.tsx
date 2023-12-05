import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SvgIconProps extends ComponentProps<'svg'> {}

export default function SvgIcon({ className, ...props }: SvgIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('w-4', className)}
    />
  );
}
