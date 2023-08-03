import React, { useState } from 'react';
import useTodoList from '../../hooks/useTodoList';
import * as TodoType from '../../interface/Todo';
import todoStyles from '../../styles/Todo/todo.module.scss';

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
    setEditedValue(item.todo);
  };

  return (
    <label htmlFor={id.toString()}>
      {!isEditMode ? (
        <div className={`${todoStyles.todoContainer} `}>
          <div className={todoStyles.leftContainer}>
            <input
              id={id.toString()}
              className={todoStyles.checkbox}
              type="checkbox"
              checked={isCompleted}
              onChange={handleIsCompletedChange}
            />
            <span className={todoStyles.content}>{todo}</span>
          </div>
          <div className={todoStyles.btnContainer}>
            <button
              className={todoStyles.leftBtn}
              type="button"
              data-testid="modify-button"
              onClick={handleEditClick}
            >
              수정
            </button>
            <button
              className={todoStyles.rightBtn}
              type="button"
              data-testid="delete-button"
              onClick={handleRemoveClick}
            >
              삭제
            </button>
          </div>
        </div>
      ) : (
        <form
          className={`${todoStyles.todoContainer} ${todoStyles.editMode}`}
          onSubmit={handleSubmit}
        >
          <input
            id={id.toString()}
            type="text"
            data-testid="modify-input"
            value={editedValue}
            onChange={handleInputChange}
          />
          <div className={todoStyles.btnContainer}>
            <button
              className={`${todoStyles.leftBtn} ${todoStyles.editSubmitBtn}`}
              type="submit"
              data-testid="submit-button"
            >
              제출
            </button>
            <button
              className={todoStyles.rightBtn}
              type="button"
              data-testid="cancel-button"
              onClick={handleCancelClick}
            >
              취소
            </button>
          </div>
        </form>
      )}
    </label>
  );
}
