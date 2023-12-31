'use client';

import { TaskCreation } from '@/types/task';
import { useTasks } from '@/contexts/TaskContext';
import { Button } from '../Controls/Button';
import { useModal } from '@/contexts/ModalContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTaskSchema } from '@/schemas/task';
import { Title } from '../Title';
import { Section, ButtonsContainer, Fields, Form } from './CardForm';

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
    <Section>
      <Title variant="primary">Novo Card</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fields errors={errors} register={register} />

        <ButtonsContainer>
          <Button variant="primary-fill-rounded" className="sm:w-44" type="submit">
            Criar
          </Button>

          <Button onClick={() => closeModal('createCard')} className="sm:w-44" variant="danger-outline-rounded" type="button">
            Cancelar
          </Button>
        </ButtonsContainer>
      </Form>
    </Section>
  );
}
