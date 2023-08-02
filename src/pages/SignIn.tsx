import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/signIn';
import AuthContextProvider from '../contexts/AuthProvider/provider';
import { isLoggedIn } from '../utils/authUtils';
import ROUTES from '../constants/routes';

function SignIn() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.TODO);
    }
  }, []);

  return (
    <AuthContextProvider>
      <h1>로그인</h1>
      <SignInForm />
    </AuthContextProvider>
  );
}
export default SignIn;
