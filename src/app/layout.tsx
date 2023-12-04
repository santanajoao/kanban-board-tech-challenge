import type { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Taskban',
};

const libreFranklin = Libre_Franklin({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={libreFranklin.className}>{children}</body>
    </html>
  );
}
