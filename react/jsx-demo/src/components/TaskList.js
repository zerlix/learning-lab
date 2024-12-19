import React from 'react';
import '../styles/TaskList.css'; // Importpfad angepasst
// Komponente "TaskList"
function TaskList() {
  // Beispiel-Aufgaben
  const tasks = [
    { id: 1, description: 'Einkaufen gehen', completed: false },
    { id: 2, description: 'Hausaufgaben machen', completed: true },
    { id: 3, description: 'Gartenarbeit erledigen', completed: false },
  ];

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : 'not-completed'}
          >
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
