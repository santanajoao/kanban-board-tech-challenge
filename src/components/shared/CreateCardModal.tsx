'use client';

import { TaskCreation, TaskPriority } from '@/types/task';
import { FormEventHandler, useRef } from 'react';
import { PriorityLabel } from '../board/PriorityLabel';
import Input from './Controls/Input';
import TextArea from './Controls/TextArea';
import DatePicker from './Controls/DatePicker';
import { useTasks } from '@/contexts/TaskContext';

const priorities: TaskPriority[] = ['LOW', 'MEDIUM', 'HIGH'];

export default function CreateCardModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { createTask } = useTasks();

  const openDialog = () => {
    if (!dialogRef || !dialogRef.current) return;

    dialogRef.current.showModal();
  };
  
  const closeDialog = () => {
    if (!dialogRef || !dialogRef.current) return;
    
    dialogRef.current.close();
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const fields = Object.fromEntries(formData.entries()) as TaskCreation;
    createTask(fields);
    closeDialog();
  };

  return (
    <>
      <dialog ref={dialogRef} className="px-3 sm:px-6 sm:py-8 max-w-2xl w-full py-6 rounded-xl backdrop:bg-black/50">
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

          <div className="flex items-center flex-col gap-3 sm:flex-row sm:justify-between">
            <DatePicker
              name="endDate"
              label="Data final"
              placeholder="Selecione a data de entrega"
            />

            <fieldset className="flex gap-2 items-center">
              <legend className="w-fit text-primaryGray text-[11px] mb-1">Priority</legend>

              {priorities.map((priority) => (
                <label key={priority} className="h-fit cursor-pointer">
                  <input
                    type="radio"
                    defaultChecked={priority === 'LOW'}
                    name="priority"
                    className="sr-only peer"
                    value={priority}
                  />

                  <PriorityLabel
                    priority={priority}
                    className="peer-checked:outline-secondaryPurple peer-checked:outline-[3px] peer-checked:outline text-sm"
                  />
                </label>
              ))}
            </fieldset>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <button
              type="submit"
              className="uppercase text-white bg-primaryPurple border-2 border-primaryPurple rounded-full p-2 font-semibold"
            >
              Criar
            </button>

            <button
              onClick={closeDialog}
              type="button"
              className="uppercase text-primaryRed bg-transparent border-2 border-primaryRed rounded-full p-2 font-semibold"
            >
              Cancelar
            </button>
          </div>
        </form>
      </dialog>

      <button
        type="button"
        onClick={openDialog}
        className="absolute right-4 text-sm bottom-3 p-2 shadow-md rounded-lg bg-secondaryPurple text-white"
      >
        + Novo card
      </button>
    </>
  );
}
