'use client';

import { TaskCreation } from '@/types/task';
import { Input } from '../Controls/Input';
import { TextArea} from '../Controls/TextArea';
import { DatePicker } from '../Controls/DatePicker';
import { useTasks } from '@/contexts/TaskContext';
import { PriorityInput } from '../Controls/PriorityInput';
import { Button } from '../Controls/Button';
import { useModal } from '@/contexts/ModalContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTaskSchema } from '@/schemas/task';
import { ErrorMessage } from '../Controls/ErrorMessage';

export function CreateCardModal() {
  const { createTask } = useTasks();
  const { closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskCreation>({
    resolver: zodResolver(createTaskSchema),
  });

  const onSubmit = (data: TaskCreation) => {
    createTask(data);
    closeModal('createCard');
  };
  
  return (
    <section className="bg-white px-3 sm:px-6 sm:py-8 max-w-2xl m-auto w-full py-6 rounded-xl backdrop:bg-black/50">
      <h1 className="text-primaryPurple text-center text-2xl font-semibold">
        Novo Card
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-3">
        <div>
          <Input
            variant="outline-fieldset"
            label="Título da task"
            placeholder="Digite o título da task"
            className="peer/title"
            {...register('title')}
          />

          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </div>

        <div>
          <TextArea
            variant="outline-fieldset"
            label="Descrição"
            placeholder="Digite a descrição"
            className="h-20"
            {...register('description')}
          />

          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <div className="w-full">
            <DatePicker
              variant="outline-fieldset"
              classes={{ container: 'sm:max-w-[280px]' }}
              label="Data final"
              placeholder="Selecione a data de entrega"
              {...register('endDate')}
            />

            <ErrorMessage>{errors.endDate?.message}</ErrorMessage>
          </div>

          <div>
            <PriorityInput {...register('priority')} />

            <ErrorMessage>{errors.priority?.message}</ErrorMessage>
          </div>
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
