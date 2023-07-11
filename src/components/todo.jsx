import React from 'react';
import './style.css';

const Todo = () => {
  const toDoList = ['University', 'Microvese', 'English'];
  return (
    <div className="container">
      <h1>React Todo List</h1>
      <p>The list data will be saved in the local storage.</p>
      <input type="text" required placeholder="Enter the task title" />
      <ul>
        {toDoList.map((task) => (
          <li key={task} className="task-item">
            <samp>{task}</samp>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
