'use client';

import { taskLists } from '@/data/board';
import useLocalStorage from '@/hooks/useLocalStorage';
import { TaskList } from '@/types/task';
import { ReactNode, createContext, useContext } from 'react';

type ContextValues = {
  taskLists: TaskList[];
  setTaskLists: (value: TaskList[]) => void;
};

const TaskContext = createContext<ContextValues | null>(null);

export function useTasks(): ContextValues {
  const contextValues = useContext(TaskContext);
  if (!contextValues) {
    throw new Error('useTasks should be used within TaskProvider');
  }
  return contextValues;
}

export default function TaskProvider({ children }: { children: ReactNode }) {
  const lists = useLocalStorage<TaskList[]>('taskLists', taskLists);
  
  const setTaskLists = (value: TaskList[]) => { lists.set(value); };

  const values: ContextValues = {
    taskLists: lists.value,
    setTaskLists,
  };

  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
}
