import { libreFranklin } from '@/fonts';
import TaskProvider from '@/contexts/TaskContext';
import HeaderWithNavMenu from '@/components/shared/HeaderWithNavMenu';
import { ReactNode } from 'react';
import { ModalProvider } from '@/contexts/ModalContext';
import OpenTaskCreationModal from '@/components/shared/OpenTaskCreationModal';
import './globals.css';

export default function RootLayout({ children }: {
  children: ReactNode,
}) {
  return (
    <html lang="pt-br" className="h-full">
      <body className={`${libreFranklin.className} h-full flex flex-col`}>
        <TaskProvider>
          <ModalProvider>
            <div className="h-full max-h-full flex flex-col relative">
              <HeaderWithNavMenu />
              
              {children}

              <OpenTaskCreationModal />
            </div>
          </ModalProvider>
        </TaskProvider>
      </body>
    </html>
  );
}
