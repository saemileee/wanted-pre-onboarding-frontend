import React from 'react';
import useTodoList from '../../hooks/useTodoList';
import * as TodoType from '../../interface/Todo';

function TodoList() {
  const { todos, removeTodo, checkTodo } = useTodoList();
  return (
    <ul>
      {todos.map((todoItem: TodoType.Item) => {
        const { id, todo, isCompleted } = todoItem;
        return (
          <li key={id}>
            <label htmlFor={id.toString()}>
              <input type="checkbox" checked={isCompleted} onChange={() => checkTodo(id)} />
              <span>{todo}</span>
            </label>
            <button type="button" data-testid="modify-button">
              수정
            </button>
            <button type="button" data-testid="delete-button" onClick={() => removeTodo(id)}>
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
