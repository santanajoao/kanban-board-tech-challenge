import { SvgIconProps } from '@mui/material';
import SvgIcon from './SvgIcon';

export default function Calendar(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 25 26" {...props}>
      <path d="M19.0625 11.6875H16.4375V14.3125H19.0625V11.6875Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.9375 2.5H7.25V3.8125H17.75V2.5H19.0625V3.8125H21.6875H23V5.125V22.1875V23.5H21.6875H3.3125H2V22.1875V5.125V3.8125H3.3125H5.9375V2.5ZM21.6875 5.125H3.3125V22.1875H21.6875V5.125Z" className="fill-inherit"/>
      <path d="M19.7188 7.09375H5.28125V9.71875H19.7188V7.09375Z"/>
    </SvgIcon>
  );
}
