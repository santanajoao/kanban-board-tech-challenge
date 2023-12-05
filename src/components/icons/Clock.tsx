import React from 'react';
import SvgIcon from './SvgIcon';
import { SvgIconProps } from '@mui/material';

export default function Clock(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 25 24" {...props}>
      <path d="M12.4138 2C6.70966 2 2.06897 6.486 2.06897 12C2.06897 17.514 6.70966 22 12.4138 22C18.1179 22 22.7586 17.514 22.7586 12C22.7586 6.486 18.1179 2 12.4138 2ZM12.4138 20C7.8507 20 4.13794 16.411 4.13794 12C4.13794 7.589 7.8507 4 12.4138 4C16.9769 4 20.6897 7.589 20.6897 12C20.6897 16.411 16.9769 20 12.4138 20Z"/>
      <path d="M13.4483 7H11.3793V13H17.5862V11H13.4483V7Z"/>
    </SvgIcon>
  );
}
