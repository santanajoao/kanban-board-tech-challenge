'use client';

import { TaskPriority } from '@/types/task';
import { useRef } from 'react';
import { PriorityLabel } from '../board/PriorityLabel';
import Input from './Controls/Input';
import TextArea from './Controls/TextArea';
import DatePicker from './Controls/DatePicker';

const priorities: TaskPriority[] = ['LOW', 'MEDIUM', 'HIGH'];

export default function CreateCardModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    if (!dialogRef || !dialogRef.current) return;

    dialogRef.current.showModal();
  };
  
  const closeDialog = () => {
    if (!dialogRef || !dialogRef.current) return;
    
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="px-3 sm:px-6 sm:py-8 max-w-2xl w-full py-6 rounded-xl backdrop:bg-black/50">
        <h1 className="text-primaryPurple text-center text-2xl font-semibold">
          Novo Card
        </h1>

        <form className="mt-8 flex flex-col gap-3">
          <Input
            label="Título da task"
            placeholder="Digite o título da task"
          />

          <TextArea
            label="Descrição"
            placeholder="Digite a descrição"
            className="h-20"
          />

          <div className="flex flex-col sm:flex-row sm:justify-between">
            <DatePicker
              label="Data final"
              placeholder="Selecione a data de entrega"
            />

            <fieldset className="flex gap-2 items-center">
              <legend className="w-fit text-primaryGray text-[11px] ml-3 mb-1">Priority</legend>

              {priorities.map((priority) => (
                <label key={priority} className="h-fit cursor-pointer">
                  <input type="radio" name="priority" className="sr-only peer"/>
                  <PriorityLabel priority={priority} className="peer-checked:outline-secondaryPurple peer-checked:outline-2 peer-checked:outline text-sm" />
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
