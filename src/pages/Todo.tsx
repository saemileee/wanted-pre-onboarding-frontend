import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/todo';
import TodoContextProvider from '../contexts/TodoContext/provider';
import ROUTES from '../constants/routes';
import todoStyles from '../styles/Todo/todo.module.scss';
import Header from '../components/common/Header';
import useAuth from '../hooks/useAuth';

function Todo() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate(ROUTES.SIGNIN);
    }
  });

  return (
    <main>
      <Header />
      {isLoggedIn() ? (
        <div className={todoStyles.wrap}>
          <h1 className={todoStyles.title}>✏️ Todo List</h1>
          <TodoContextProvider>
            <TodoForm />
          </TodoContextProvider>
        </div>
      ) : undefined}
    </main>
  );
}
export default Todo;
