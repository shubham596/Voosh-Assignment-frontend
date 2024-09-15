import React, { useState } from 'react';
import TaskColumn from './TaskColumn';
import '../home.css';

const Home = () => {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [taskNumber, setTaskNumber] = useState(1); // State to track the next task number

  // Add new task to the Todo list
  const addTask = () => {
    if (newTask.trim()) {
      setTodoList([...todoList, { text: newTask, id: Date.now(), number: taskNumber }]);
      setNewTask('');
      setTaskNumber(taskNumber + 1); // Increment the task number for the next task
    }
  };

  // Edit task
  const editTask = (task, column) => {
    const updatedTask = prompt('Edit Task:', task.text);
    if (updatedTask) {
      if (column === 'todo') {
        setTodoList(todoList.map((t) => (t.id === task.id ? { ...t, text: updatedTask } : t)));
      } else if (column === 'inProgress') {
        setInProgressList(inProgressList.map((t) => (t.id === task.id ? { ...t, text: updatedTask } : t)));
      } else {
        setDoneList(doneList.map((t) => (t.id === task.id ? { ...t, text: updatedTask } : t)));
      }
    }
  };

  // Delete task
  const deleteTask = (task, column) => {
    if (column === 'todo') {
      setTodoList(todoList.filter((t) => t.id !== task.id));
    } else if (column === 'inProgress') {
      setInProgressList(inProgressList.filter((t) => t.id !== task.id));
    } else {
      setDoneList(doneList.filter((t) => t.id !== task.id));
    }
  };

  // Preview task
  const previewTask = (task) => {
    alert(`Task ${task.number}: ${task.text}`);
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <div className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-columns">
        <TaskColumn title="Todo" tasks={todoList} editTask={editTask} deleteTask={deleteTask} previewTask={previewTask} column="todo" />
        <TaskColumn title="In Progress" tasks={inProgressList} editTask={editTask} deleteTask={deleteTask} previewTask={previewTask} column="inProgress" />
        <TaskColumn title="Done" tasks={doneList} editTask={editTask} deleteTask={deleteTask} previewTask={previewTask} column="done" />
      </div>
    </div>
  );
};

export default Home;
