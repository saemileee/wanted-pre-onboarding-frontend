import React, { useEffect } from 'react';
import Create from './Create';
import TodoList from './List';
import useTodoList from '../../hooks/useTodoList';

function TodoForm() {
  const { getTodos } = useTodoList();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <Create />
      <TodoList />
    </>
  );
}

export default TodoForm;
