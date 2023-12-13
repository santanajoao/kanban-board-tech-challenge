import { TaskCreation } from '@/types/task';
import { FormEventHandler, ReactNode } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '../Controls/ErrorMessage';
import { TextArea } from '../Controls/TextArea';
import { Input } from '../Controls/Input';
import { DatePicker } from '../Controls/DatePicker';
import { PriorityInput } from '../Controls/PriorityInput';

type SectionProps = {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <section className="bg-white px-3 sm:px-6 sm:py-8 max-w-2xl m-auto w-full py-6 rounded-xl backdrop:bg-black/50">
      {children}
    </section>
  );
}

type FormProps = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export function Form({ children, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3">
      {children}
    </form>
  );
}

type FieldsProps = {
  register: UseFormRegister<TaskCreation>;
  errors: FieldErrors<TaskCreation>;
}

export function Fields({ register, errors }: FieldsProps) {
  return (
    <>
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
    </>
  );
}

type ButtonsContainerProps = {
  children: ReactNode;
}


export function ButtonsContainer({ children }: ButtonsContainerProps) {
  return (
    <div className="mt-4 sm:mt-10 sm:gap-4 flex flex-col sm:flex-row gap-2 justify-end">
      {children}
    </div>
  );
}
