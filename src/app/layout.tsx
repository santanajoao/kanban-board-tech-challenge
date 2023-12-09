import { libreFranklin } from '@/fonts';
import TaskProvider from '@/contexts/TaskContext';
import HeaderWithNavMenu from '@/components/shared/HeaderWithNavMenu';
import { ReactNode } from 'react';
import './globals.css';
import CreateCardModal from '@/components/shared/CreateCardModal';

export default function RootLayout({ children }: {
  children: ReactNode,
}) {
  return (
    <html lang="pt-br" className="h-full">
      <body className={`${libreFranklin.className} h-full flex flex-col`}>
        <TaskProvider>
          <div className="h-full max-h-full flex flex-col relative">
            <HeaderWithNavMenu />
            
            {children}

            <CreateCardModal />
          </div>
        </TaskProvider>
      </body>
    </html>
  );
}
