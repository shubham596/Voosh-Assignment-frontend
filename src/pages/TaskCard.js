import React from 'react';

const TaskCard = ({ task, editTask, deleteTask, previewTask, column ,index }) => {
  return (
    <div className="task-item" draggable='true'>
      <p>{task.number}: {task.text}</p>
      {index}
      <div className="task-buttons">
        <button onClick={() => editTask(task, column)}>Edit</button>
        <button onClick={() => deleteTask(task, column)}>Delete</button>
        <button onClick={() => previewTask(task)}>Preview</button>
      </div>
    </div>
  );
};

export default TaskCard;
