import React, { useState } from 'react';
import useTodoList from '../../hooks/useTodoList';
import * as TodoType from '../../interface/Todo';

interface ItemProps {
  setTodoList: (id: number, value: string) => void;
  item: TodoType.Item;
}

export default function Item({ setTodoList, item }: ItemProps) {
  const { id, todo, isCompleted } = item;
  const { updateTodo, removeTodo } = useTodoList();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedValue, setEditedValue] = useState(item.todo);

  const handleIsCompletedChange = () => {
    updateTodo(id, todo, !isCompleted);
  };

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleRemoveClick = () => {
    removeTodo(id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditedValue(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedValue !== '') {
      updateTodo(id, editedValue, isCompleted);
      setTodoList(id, editedValue);
    }
    setIsEditMode(!isEditMode);
  };

  const handleCancelClick = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <label htmlFor={id.toString()}>
      {!isEditMode ? (
        <div>
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
          <button type="button" data-testid="delete-button" onClick={handleRemoveClick}>
            삭제
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            id={id.toString()}
            type="text"
            data-testid="modify-input"
            value={editedValue}
            onChange={handleInputChange}
          />
          <button type="submit" data-testid="submit-button">
            제출
          </button>
          <button type="button" data-testid="cancel-button" onClick={handleCancelClick}>
            취소
          </button>
        </form>
      )}
    </label>
  );
}
