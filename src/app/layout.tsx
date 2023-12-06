import type { Metadata } from 'next';
import './globals.css';
import { libreFranklin } from '@/fonts';

export const metadata: Metadata = {
  title: 'Taskban',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="h-full">
      <body className={`${libreFranklin.className} h-full flex flex-col`}>{children}</body>
    </html>
  );
}
