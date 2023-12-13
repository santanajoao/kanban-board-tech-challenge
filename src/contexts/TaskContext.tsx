'use client';

import { taskLists } from '@/data/board';
import useLocalStorage from '@/hooks/useLocalStorage';
import { Task, TaskCreation, TaskList } from '@/types/task';
import { jsonCopy } from '@/utils/copy';
import { ReactNode, createContext, useContext } from 'react';

type ContextValues = {
  taskLists: TaskList[];
  setTaskLists: (value: TaskList[]) => void;
  createTask: (task: TaskCreation) => void;
  editTask: (taskId: number, cardId: number, data: TaskCreation) => void;
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
  
  const createTask = (task: TaskCreation) => {
    const newTask: Task = {
      ...task,
      isDone: false,
      id: Date.now(),
    };

    const listsCopy = jsonCopy(lists.value);
    const todoTasks = listsCopy[0].tasks;
    todoTasks.push(newTask);

    lists.set(listsCopy);
  };

  const editTask = (listId: number, cardId: number, data: TaskCreation) => {
    const taskList = lists.value.find((list) => list.id === listId)!;
    const taskIndex = taskList.tasks.findIndex((task) => task.id === cardId)!;
    const task = taskList.tasks[taskIndex];

    const editedTask: Task = { ...task, ...data };
    taskList.tasks[taskIndex] = editedTask;
  };

  const values: ContextValues = {
    taskLists: lists.value,
    setTaskLists,
    createTask,
    editTask,
  };

  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
}
