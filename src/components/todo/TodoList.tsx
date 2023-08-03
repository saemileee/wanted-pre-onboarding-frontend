import React, { useState } from 'react';
import useTodoList from '../../hooks/useTodoList';
import * as TodoType from '../../interface/Todo';

function TodoList() {
  const { todos, removeTodo, handleEditClick, updateTodo, handleEditCancelClick } = useTodoList();
  const [todoValue, setTodoValue] = useState('');
  return (
    <ul>
      {todos.map((todoItem: TodoType.Item) => {
        const { id, todo, isCompleted, isEditMode } = todoItem;
        return (
          <div>
            {isEditMode ? (
              <li key={id}>
                <label htmlFor={id.toString()}>
                  <input
                    id={id.toString()}
                    type="text"
                    data-testid="modify-input"
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                  />
                  <button
                    type="button"
                    data-testid="submit-button"
                    onClick={() => updateTodo(id, todoValue, isCompleted)}
                  >
                    제출
                  </button>
                  <button
                    type="button"
                    data-testid="cancel-button"
                    onClick={() => handleEditCancelClick(id)}
                  >
                    취소
                  </button>
                </label>
              </li>
            ) : (
              <li key={id}>
                <label htmlFor={id.toString()}>
                  <input
                    id={id.toString()}
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => updateTodo(id, todo, !isCompleted)}
                  />
                  <span>{todo}</span>
                  <button
                    type="button"
                    data-testid="modify-button"
                    onClick={() => {
                      setTodoValue(todo);
                      handleEditClick(id);
                    }}
                  >
                    수정
                  </button>
                  <button type="button" data-testid="delete-button" onClick={() => removeTodo(id)}>
                    삭제
                  </button>
                </label>
              </li>
            )}
          </div>
        );
      })}
    </ul>
  );
}

export default TodoList;
