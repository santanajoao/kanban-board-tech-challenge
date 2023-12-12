/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import CardDetailsModal from '@/components/shared/Modals/CardDetailsModal';
import { CreateCardModal } from '@/components/shared/Modals/CreateCardModal';
import { ReactNode, createContext, useContext, useRef, useState } from 'react';

const modals = {
  'createCard': CreateCardModal,
  'cardDetails': CardDetailsModal,
};

type ModalName = keyof typeof modals;

type ContextValues = {
  openModal(modalName: ModalName, data: unknown): void;
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
  const [modalData, setModalData] = useState<Record<string, unknown> | null>(null);

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

  const openModal = (modalName: ModalName, data?: Record<string, unknown>) => {
    setModalData(data ?? null);
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
        className="w-full bg-transparent h-full"
      >
        <div className="flex items-center h-full">
          {Modal && <Modal {...(modalData as any)} />}
        </div>
      </dialog>

      {children}
    </ModalContext.Provider>
  );
}
