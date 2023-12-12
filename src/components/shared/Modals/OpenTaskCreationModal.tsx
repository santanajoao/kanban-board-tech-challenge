'use client';

import { useModal } from '@/contexts/ModalContext';
import Button from '../Controls/Button';

export function OpenTaskCreationModal() {
  const { openModal } = useModal();

  return (
    <Button
      variant="secondary-fill"
      type="button"
      onClick={() => openModal('createCard')}
      className="absolute right-4 bottom-3 sm:hidden"
    >
      + Novo card
    </Button>
  );
}
