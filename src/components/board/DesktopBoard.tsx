'use client';

import { useTasks } from '@/contexts/TaskContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DndDesktopCardList from './DndDesktopCardList';

export default function DesktopBoard() {
  const { taskLists } = useTasks();

  return (
    <DndProvider backend={HTML5Backend}>
      <ul className="flex px-3 py-4 flex-1 gap-4">
        {taskLists.map((taskList, index) => (
          <DndDesktopCardList
            key={taskList.id}
            listIndex={index}
            taskList={taskList}
          />
        ))}
      </ul>
    </DndProvider>
  );
}
