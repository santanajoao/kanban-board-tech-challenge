'use client';

import { useModal } from '@/contexts/ModalContext';
import { Button } from '../Controls/Button';
import { PriorityLabel } from '../PriorityLabel';
import { TaskList } from '@/types/task';
import { FaArrowsAltH } from 'react-icons/fa';
import { Title } from '../Title';
import { dateStringToDate } from '@/utils/date';
import { ButtonsContainer } from './CardForm';

type Props = {
  taskList: TaskList;
  cardIndex: number;
};

export default function CardDetailsModal({ taskList, cardIndex }: Props) {
  const { closeModal, openModal } = useModal();
  const task = taskList.tasks[cardIndex];

  return (
    <article className="text-primaryGray bg-white px-3 sm:px-6 sm:py-8 max-w-xl m-auto w-full py-6 rounded-xl backdrop:bg-black/50">
      <Title variant="primary">Detalhes do card</Title>

      <section className="mt-8">
        <Title as="h2" variant="definition-small">Título da task</Title>
        <p className="font-semibold text-sm">{task.title}</p>
      </section>

      <section className="mt-2">
        <Title as="h2" variant="definition-small">Descrição</Title>
        <p className="font-semibold text-sm">{task.description}</p>
      </section>

      <div className="flex items-center mt-2 gap-x-5 gap-y-2 justify-between flex-wrap">
        <section>
          <Title as="h2" variant="definition-small">Data final</Title>
          <time className="font-semibold text-sm">
            {dateStringToDate(task.endDate).toLocaleDateString()}
          </time>
        </section>

        <section className="flex items-center">
          <Title as="h2" variant="definition-small" className="mr-4 sm:mr-5">
            Priority
          </Title>
          <PriorityLabel className="text-sm" priority={task!.priority} />
        </section>

        <section className="flex items-center">
          <div className="mr-4 sm:mr-5">
            <Title as="h2" variant="definition-small">Coluna</Title>
            <p className="font-semibold text-sm">{taskList.title}</p>
          </div>

          <Button variant="secondary-fill-rounded" className="flex items-center gap-1 py-1">
            <FaArrowsAltH />
            <span>Mover</span>
          </Button>
        </section>
      </div>

      <ButtonsContainer>
        <Button
          variant="primary-fill-rounded"
          className="sm:w-44"
          type="button"
          onClick={() => openModal('editCard', { taskList, cardIndex })}
        >
          Editar
        </Button>

        <Button
          type="button"
          variant="neutral-outline-rounded"
          className="sm:w-44"
          onClick={() => closeModal('cardDetails')}
        >
          Fechar
        </Button>
      </ButtonsContainer>
    </article>
  );
}
