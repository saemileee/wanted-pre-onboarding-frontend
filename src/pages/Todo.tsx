import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/todo';
import { TodoProvider } from '../contexts/TodoContext';
import ROUTES from '../constants/routes';
import todoStyles from '../styles/Todo/todo.module.scss';
import Header from '../components/common/Header';
import useAuth from '../hooks/useAuth';

function Todo() {
  const navigate = useNavigate();
  const { getLoginState } = useAuth();

  useEffect(() => {
    if (!getLoginState()) {
      navigate(ROUTES.SIGNIN);
    }
  });

  return (
    <main>
      <Header />
      {getLoginState() ? (
        <div className={todoStyles.wrap}>
          <h1 className={todoStyles.title}>✏️ Todo List</h1>
          <TodoProvider>
            <TodoForm />
          </TodoProvider>
        </div>
      ) : undefined}
    </main>
  );
}
export default Todo;
