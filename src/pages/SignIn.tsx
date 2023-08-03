import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/signIn';
import AuthContextProvider from '../contexts/AuthProvider/provider';
import { isLoggedIn } from '../utils/authUtils';
import ROUTES from '../constants/routes';
import { NavButton } from '../components/common/button';

function SignIn() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.TODO);
    }
  }, []);

  return (
    <main>
      <NavButton text="회원가입 이동" url={ROUTES.SIGNUP} />
      <h1>로그인</h1>
      <AuthContextProvider>
        <SignInForm />
      </AuthContextProvider>
    </main>
  );
}
export default SignIn;
