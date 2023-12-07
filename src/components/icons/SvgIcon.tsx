import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SvgIconProps extends ComponentProps<'svg'> {}

export default function SvgIcon({ className, ...props }: SvgIconProps) {
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={twMerge(className)}
    />
  );
}
