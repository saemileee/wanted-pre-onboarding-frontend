import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/todo';
import TodoContextProvider from '../contexts/TodoContext/provider';
import { isLoggedIn } from '../utils/authUtils';
import ROUTES from '../constants/routes';
import todoStyles from '../styles/Todo/todo.module.scss';
import Header from '../components/common/Header';

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
      <Header />
      {userLoggedIn ? (
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
