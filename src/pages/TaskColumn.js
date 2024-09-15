import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, editTask, deleteTask, previewTask, column }) => {
  return (
    <div className="task-column">
      <h2>{title}</h2>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        tasks.map((task,ind) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            editTask={editTask} 
            deleteTask={deleteTask} 
            previewTask={previewTask} 
            column={column}
            index={ind}
          />
        ))
      )}
    </div>
  );
};

export default TaskColumn;
