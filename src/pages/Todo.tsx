import React from 'react';
import TodoForm from '../components/todo';
import TodoContextProvider from '../contexts/TodoContext/provider';

function Todo() {
  return (
    <TodoContextProvider>
      <TodoForm />
    </TodoContextProvider>
  );
}
export default Todo;
