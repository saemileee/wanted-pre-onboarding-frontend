import React, { useRef } from 'react';
import useTodoList from '../../hooks/useTodoList';

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
    <form onSubmit={handleFormSubmit}>
      <input data-testid="new-todo-input" type="text" ref={inputRef} />
      <button data-testid="new-todo-add-button" type="submit">
        추가
      </button>
    </form>
  );
}

export default Create;
