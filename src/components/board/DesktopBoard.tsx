'use client';

import { useTasks } from '@/contexts/TaskContext';
import { DndCardList } from './DndCardList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function DesktopBoard() {
  const { taskLists } = useTasks();

  return (
    <DndProvider backend={HTML5Backend}>
      <ul className="flex px-3 py-4 flex-1 gap-4">
        {taskLists.map((taskList) => (
          <section key={taskList.id} className="p-4 shadow-lg h-fit rounded-3xl">
            <h2 className="text-primaryGray text-lg font-semibold mb-8">
              {taskList.title} ({taskList.tasks.length})
            </h2>
            
            <DndCardList tasks={taskList.tasks} />
          </section>
        ))}
      </ul>
    </DndProvider>
  );
}
