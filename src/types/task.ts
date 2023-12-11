export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export type Task = {
  id: number;
  title: string;
  description: string;
  endDate: string;
  priority: TaskPriority;
  isDone: boolean;
};

export type TaskCreation = Omit<Task, 'isDone' | 'id'>;

export type TaskList = {
  id: number;
  title: string;
  tasks: Task[];
};
