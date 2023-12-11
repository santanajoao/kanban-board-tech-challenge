'use client';

import { k2d } from '@/fonts';
import { LuMenu } from 'react-icons/lu';
import Button from './Controls/Button';
import { useModal } from '@/contexts/ModalContext';

type Props = {
  openMenu: () => void;
};

export function Header({ openMenu }: Props) {
  const { openModal } = useModal();

  return (
    <header className="flex bg-primaryPurple px-3 py-2 sm:px-7 text-white sm:justify-end">
      <button
        type="button"
        onClick={openMenu}
        className="text-2xl sm:hidden"
        aria-label="Abrir menu lateral"
      >
        <LuMenu />
      </button>

      <h1 className={`text-2xl ${k2d.className} w-full text-center mr-6 sm:hidden`}>
        Taskban
      </h1>

      <Button
        variant="secondary-fill"
        type="button"
        className="hidden sm:inline-block"
        onClick={() => openModal('createCard')}
      >
        + Novo card
      </Button>
    </header>
  );
}
