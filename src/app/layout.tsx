import { libreFranklin } from '@/fonts';
import TaskProvider from '@/contexts/TaskContext';
import HeaderWithNavMenu from '@/components/shared/HeaderWithNavMenu';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="h-full">
      <body className={`${libreFranklin.className} h-full flex flex-col`}>
        <TaskProvider>
          <div className="h-full max-h-full flex flex-col relative">
            <HeaderWithNavMenu />
            
            {children}

            <button className="absolute right-4 text-sm bottom-3 p-2 shadow-md rounded-lg bg-secondaryPurple text-white">
              + Novo card
            </button>
          </div>
        </TaskProvider>
      </body>
    </html>
  );
}
