import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/todo';
import TodoContextProvider from '../contexts/TodoContext/provider';
import { LoginButton } from '../components/common/auth';
import { isLoggedIn } from '../utils/authUtils';
import ROUTES from '../constants/routes';
import todoStyles from '../styles/Todo/todo.module.scss';

function Todo() {
  const navigate = useNavigate();
  const userLoggedIn = isLoggedIn();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate(ROUTES.SIGNIN);
    }
  });

  return (
    <main>
      {userLoggedIn ? (
        <div className={todoStyles.wrap}>
          <h1 className={todoStyles.title}>✏️ Todo List</h1>
          <LoginButton />
          <TodoContextProvider>
            <TodoForm />
          </TodoContextProvider>
        </div>
      ) : undefined}
    </main>
  );
}
export default Todo;
