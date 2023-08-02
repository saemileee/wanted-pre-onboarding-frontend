import React from 'react';
import TodoForm from '../components/todo';
import TodoContextProvider from '../contexts/TodoContext/provider';
import { LoginButton } from '../components/common/auth';

function Todo() {
  return (
    <TodoContextProvider>
      <LoginButton />
      <h1>투두리스트</h1>
      <TodoForm />
    </TodoContextProvider>
  );
}
export default Todo;
