import React, { useEffect } from 'react';
import Create from './Create';
import TodoList from './List';
import useTodoList from '../../hooks/useTodoList';
import TodoContextProvider from '../../contexts/TodoContext/provider';

function TodoForm() {
  const { getTodos } = useTodoList();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContextProvider>
      <Create />
      <TodoList />
    </TodoContextProvider>
  );
}

export default TodoForm;
