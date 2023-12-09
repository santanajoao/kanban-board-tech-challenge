import React from 'react';
import { SvgIcon, SvgIconProps } from './SvgIcon';

export default function CalendarFill(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 20">
      <path d="M2.625 17.1875C2.625 17.5332 2.96016 17.8125 3.375 17.8125H20.625C21.0398 17.8125 21.375 17.5332 21.375 17.1875V8.98438H2.625V17.1875ZM20.625 3.59375H16.6875V2.34375C16.6875 2.25781 16.6031 2.1875 16.5 2.1875H15.1875C15.0844 2.1875 15 2.25781 15 2.34375V3.59375H9V2.34375C9 2.25781 8.91563 2.1875 8.8125 2.1875H7.5C7.39687 2.1875 7.3125 2.25781 7.3125 2.34375V3.59375H3.375C2.96016 3.59375 2.625 3.87305 2.625 4.21875V7.65625H21.375V4.21875C21.375 3.87305 21.0398 3.59375 20.625 3.59375Z" />
    </SvgIcon>
  );
}