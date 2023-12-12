import { libreFranklin } from '@/fonts';
import TaskProvider from '@/contexts/TaskContext';
import { ReactNode } from 'react';
import { ModalProvider } from '@/contexts/ModalContext';
import { OpenTaskCreationModal } from '@/components/shared/Modals/OpenTaskCreationModal';
import { HeaderWithNavMenu } from '@/components/shared/HeaderWithNavMenu';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Taskban',
  description: 'Taskban é uma ferramenta de organização e gerenciamento de tarefas que funciona no seu computador ou celular. Taskban conta com diferentes tipos de visualização: quadro, lista, calendário e linha do tempo.',
  keywords: ['kanban', 'quadro', 'organização', 'gerenciamento', 'tarefa', 'agilismo', 'projeto', 'prazos', 'lista', 'planejamento'],
  authors: [
    { name: 'santanajoao', url: 'https://github.com/santanajoao' },
    { name: 'João Pedro Santana', url: 'https://www.linkedin.com/in/joaopedrosantanac/' },
  ],
};

export default function RootLayout({ children }: {
  children: ReactNode,
}) {
  return (
    <html lang="pt-br" className="h-full">
      <body className={`${libreFranklin.className} h-full flex flex-col`}>
        <TaskProvider>
          <ModalProvider>
            <div className="h-full max-h-full flex relative bg-terciaryGray">
              <HeaderWithNavMenu>
                {children}
              </HeaderWithNavMenu>
              
              <OpenTaskCreationModal />
            </div>
          </ModalProvider>
        </TaskProvider>
      </body>
    </html>
  );
}
