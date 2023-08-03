import React, { useRef } from 'react';
import useTodoList from '../../hooks/useTodoList';
import todoStyles from '../../styles/Todo/todo.module.scss';

function Create() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addTodo } = useTodoList();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value } = inputRef.current!;
    if (value !== '') {
      addTodo(inputRef.current!.value);
    }
    inputRef.current!.value = '';
    inputRef.current!.focus();
  };

  return (
    <form className={todoStyles.todoForm} onSubmit={handleFormSubmit}>
      <input
        className={todoStyles.todoInput}
        placeholder="할 일을 입력해 주세요..."
        data-testid="new-todo-input"
        type="text"
        ref={inputRef}
      />
      <button className={todoStyles.todoAddBtn} data-testid="new-todo-add-button" type="submit">
        추가
      </button>
    </form>
  );
}

export default Create;
