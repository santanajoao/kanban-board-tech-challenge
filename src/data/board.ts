import type { Task, TaskList } from '@/types/task';

const todoTasks: Task[] = [
  {
    id: 1,
    title: 'Testar Navegadores',
    description: 'Verificar e garantir a compatibilidade da aplicação em diferentes navegadores.',
    endDate: '2023-11-25T00:00:00',
    priority: 'HIGH',
    isDone: false,
  },
  {
    id: 2,
    title: 'Atualizar Bibliotecas',
    description: 'Manter as libs atualizadas para garantir segurança e aproveitar novos recursos.',
    endDate: '2023-12-25T00:00:00',
    priority: 'LOW',
    isDone: false,
  },
  {
    id: 3,
    title: 'Implementar animações',
    description: 'Adicionar efeitos visuais e transições para melhorar a experiência do usuário.',
    endDate: '2023-12-25T00:00:00',
    priority: 'MEDIUM',
    isDone: false,
  },
  {
    id: 4,
    title: 'Definir armazenamento de datas',
    description: 'Definir uma forma eficiente de armazenar e fazer as comparações das datas.',
    endDate: '2023-12-25T00:00:00',
    priority: 'MEDIUM',
    isDone: false,
  },
];

const doingTasks: Task[] = [
  {
    id: 5,
    title: 'Implementar a troca de coluna/lista no mobile.',
    description: 'Permitir que o usuário mude entre colunas e listas para ver os cards.',
    endDate: '2023-12-08T00:00:00',
    priority: 'HIGH',
    isDone: false,
  },
];

const qaTasks: Task[] = [
  {
    id: 6,
    title: 'Testar aplicação',
    description: 'Garantir que todos as funcionalidades estão ok',
    endDate: '2023-12-09T00:00:00',
    priority: 'HIGH',
    isDone: false,
  },
];

const doneTasks: Task[] = [
  {
    id: 7,
    title: 'Criar header mobile',
    description: 'Criar o header mobile com o botão para abrir o menu lateral',
    endDate: '2023-12-05T00:00:00',
    priority: 'LOW',
    isDone: true,
  },
];

export const taskLists: TaskList[] = [
  { id: 1, title: 'Todo', tasks: todoTasks },
  { id: 2, title: 'Doing', tasks: doingTasks },
  { id: 3, title: 'QA', tasks: qaTasks },
  { id: 4, title: 'Done', tasks: doneTasks },
];
