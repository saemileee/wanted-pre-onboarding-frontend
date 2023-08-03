import React from 'react';
import useTodoList from '../../hooks/useTodoList';
import * as TodoType from '../../interface/Todo';

interface EditModeItemProps {
  todoValue: string;
  setTodoValue: (id: number, value: string) => void;
  item: TodoType.Item;
}

export function EditModeItem({ todoValue, setTodoValue, item }: EditModeItemProps) {
  const { id, isCompleted } = item;
  const { updateTodo, toggleEditMode } = useTodoList();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoValue !== '') {
      updateTodo(id, todoValue, isCompleted);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoValue(id, value);
  };

  const handleCancelClick = () => {
    toggleEditMode(id);
  };

  return (
    <label htmlFor={id.toString()}>
      <form onSubmit={handleSubmit}>
        <input
          id={id.toString()}
          type="text"
          data-testid="modify-input"
          value={todoValue}
          onChange={handleInputChange}
        />
        <button type="submit" data-testid="submit-button">
          제출
        </button>
        <button type="button" data-testid="cancel-button" onClick={handleCancelClick}>
          취소
        </button>
      </form>
    </label>
  );
}

interface ItemProps {
  setTodoValue: (id: number, value: string) => void;
  item: TodoType.Item;
}

export function Item({ setTodoValue, item }: ItemProps) {
  const { id, todo, isCompleted } = item;
  const { updateTodo, toggleEditMode, removeTodo } = useTodoList();

  const handleIsCompletedChange = () => {
    updateTodo(id, todo, !isCompleted);
  };

  const handleEditClick = () => {
    setTodoValue(id, todo);
    toggleEditMode(id);
  };

  const handleCancelClick = () => {
    removeTodo(id);
  };

  return (
    <label htmlFor={id.toString()}>
      <input
        id={id.toString()}
        type="checkbox"
        checked={isCompleted}
        onChange={handleIsCompletedChange}
      />
      <span>{todo}</span>
      <button type="button" data-testid="modify-button" onClick={handleEditClick}>
        수정
      </button>
      <button type="button" data-testid="delete-button" onClick={handleCancelClick}>
        삭제
      </button>
    </label>
  );
}
