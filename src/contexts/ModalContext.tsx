'use client';

import CreateCardModal from '@/components/shared/CreateCardModal';
import { ReactNode, createContext, useContext, useRef, useState } from 'react';

const modals = {
  'createCard': CreateCardModal,
};

type ModalName = keyof typeof modals;

type ContextValues = {
  openModal(modalName: ModalName): void;
  closeModal(modalName: ModalName): void;
};

const ModalContext = createContext<ContextValues | null>(null);

export function useModal(): ContextValues {
  const contextValues = useContext(ModalContext);
  if (!contextValues) {
    throw new Error('useModal should be used within ModalProvider');
  }
  return contextValues;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [modal, setModal] = useState<ModalName | null>(null);

  const openDialog = () => {
    if (!dialogRef || !dialogRef.current) return;

    dialogRef.current.showModal();
  };
  
  const closeDialog = () => {
    if (!dialogRef || !dialogRef.current) return;
    
    dialogRef.current.close();
  };

  const closeModal = () => {
    closeDialog();
    setModal(null);
  };

  const openModal = (modalName: ModalName) => {
    setModal(modalName);
    openDialog();
  };

  const values: ContextValues = {
    closeModal,
    openModal,
  };

  const Modal = modal && modals[modal];

  return (
    <ModalContext.Provider value={values}>
      <dialog
        ref={dialogRef}
        className="m-2 w-full bg-transparent"
      >
        {Modal && <Modal />}
      </dialog>

      {children}
    </ModalContext.Provider>
  );
}
