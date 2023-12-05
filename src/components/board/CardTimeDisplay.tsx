'use client';

import React from 'react';
import Clock from '../icons/Clock';

type Props = {
  dateString: string;
};

export default function CardTimeDisplay({ dateString }: Props) {
  const today = new Date();
  const endDate = new Date(dateString);
  const timeIsUp = today > endDate;

  return (
    <div className={`flex gap-x-2 items-center ${timeIsUp ? 'fill-primaryRed text-primaryRed' : 'fill-primaryGray'}`}>
      <Clock className="w-6 fill-inherit" />

      <time dateTime={endDate.toUTCString()} className="text-inherit">{endDate.toLocaleDateString()}</time>
    </div>
  );
}
