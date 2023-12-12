'use client';

export function dateStringToDate(dateString: string): Date {
  return new Date(`${dateString}T00:00:00`);
}
