'use client';

import { TaskCreation } from '@/types/task';
import { FormEventHandler } from 'react';
import Input from './Controls/Input';
import TextArea from './Controls/TextArea';
import DatePicker from './Controls/DatePicker';
import { useTasks } from '@/contexts/TaskContext';
import PriorityInput from './Controls/PriorityInput';
import Button from './Controls/Button';
import { useModal } from '@/contexts/ModalContext';

export default function CreateCardModal() {
  const { createTask } = useTasks();
  const { closeModal } = useModal();

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const fields = Object.fromEntries(formData.entries()) as TaskCreation;
    createTask(fields);
    closeModal('createCard');
  };

  return (
    <section className="bg-white px-3 sm:px-6 sm:py-8 max-w-2xl w-full py-6 rounded-xl backdrop:bg-black/50">
      <h1 className="text-primaryPurple text-center text-2xl font-semibold">
        Novo Card
      </h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
        <Input
          label="Título da task"
          placeholder="Digite o título da task"
          name="title"
          className="peer/title"
        />

        <TextArea
          name="description"
          label="Descrição"
          placeholder="Digite a descrição"
          className="h-20"
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <DatePicker
            name="endDate"
            classes={{ container: 'sm:max-w-[280px] w-full' }}
            label="Data final"
            placeholder="Selecione a data de entrega"
          />

          <PriorityInput />
        </div>

        <div className="mt-4 sm:mt-10 sm:gap-4 flex flex-col sm:flex-row gap-2 justify-end">
          <Button variant="primary-fill-rounded" className="sm:w-44" type="submit">
            Criar
          </Button>

          <Button onClick={() => closeModal('createCard')} className="sm:w-44" variant="danger-outline-rounded" type="button">
            Cancelar
          </Button>
        </div>
      </form>
    </section>
  );
}
