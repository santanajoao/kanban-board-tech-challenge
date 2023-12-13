'use client';

import { TaskCreation, TaskList } from '@/types/task';
import { useTasks } from '@/contexts/TaskContext';
import { Button } from '../Controls/Button';
import { useModal } from '@/contexts/ModalContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTaskSchema } from '@/schemas/task';
import { Title } from '../Title';
import { Section, ButtonsContainer, Fields, Form } from './CardForm';

type Props = {
  taskList: TaskList;
  cardIndex: number;
};

export function EditCardModal({ taskList, cardIndex }: Props) {
  const { editTask } = useTasks();
  const { openModal } = useModal();
  const task = taskList.tasks[cardIndex];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskCreation>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: task,
  });

  const onSubmit = (data: TaskCreation) => {
    editTask(taskList.id, task.id, data);
    openModal('cardDetails', { taskList, cardIndex });
  };
  
  return (
    <Section>
      <Title variant="primary">Editar Card</Title>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fields errors={errors} register={register} />

        <ButtonsContainer>
          <Button variant="primary-fill-rounded" className="sm:w-44" type="submit">
            Salvar
          </Button>

          <Button
            onClick={() => openModal('cardDetails', { taskList, cardIndex })}
            className="sm:w-44"
            variant="danger-outline-rounded"
            type="button"
          >
            Cancelar
          </Button>
        </ButtonsContainer>
      </Form>
    </Section>
  );
}
