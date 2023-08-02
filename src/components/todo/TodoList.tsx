import React from 'react';

function TodoList() {
  return (
    <ul>
      <li>
        <label htmlFor="todo1">
          <input type="checkbox" />
          <span>TODO 1</span>
        </label>
      </li>
      <li>
        <label htmlFor="todo2">
          <input type="checkbox" />
          <span>TODO 2</span>
        </label>
      </li>
    </ul>
  );
}

export default TodoList;
