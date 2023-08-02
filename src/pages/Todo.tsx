import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/todo';
import TodoContextProvider from '../contexts/TodoContext/provider';
import { LoginButton } from '../components/common/auth';
import { isLoggedIn } from '../utils/authUtils';
import ROUTES from '../constants/routes';

function Todo() {
  const navigate = useNavigate();
  const userLoggedIn = isLoggedIn();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate(ROUTES.SIGNIN);
    }
  });

  return (
    <div>
      {userLoggedIn ? (
        <TodoContextProvider>
          <LoginButton />
          <TodoForm />
        </TodoContextProvider>
      ) : undefined}
    </div>
  );
}
export default Todo;
