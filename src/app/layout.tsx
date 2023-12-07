import { type Metadata } from 'next';
import { libreFranklin } from '@/fonts';
import './globals.css';

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
