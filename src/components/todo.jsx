import React from 'react';
import './style.css';

const Todo = () => {
  const toDoList = ['University', 'Microvese', 'English'];
  return (
    <div className="container">
      <h1>React Todo List</h1>
      <p>The data of the list is going to save in local storage</p>
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
