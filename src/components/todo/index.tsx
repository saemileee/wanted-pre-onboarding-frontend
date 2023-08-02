import React, { useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import useTodoList from '../../hooks/useTodoList';

function TodoForm() {
  const { getTodos } = useTodoList();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <AddTodoForm />
      <TodoList />
    </>
  );
}

export default TodoForm;
