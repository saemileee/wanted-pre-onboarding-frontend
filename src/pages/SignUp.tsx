import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/signUp';
import AuthContextProvider from '../contexts/AuthProvider/provider';
import { isLoggedIn } from '../utils/authUtils';
import ROUTES from '../constants/routes';
import { NavButton } from '../components/common/button';

function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.TODO);
    }
  }, []);

  return (
    <AuthContextProvider>
      <NavButton text="로그인 이동" url={ROUTES.SIGNIN} />
      <h1>회원가입</h1>
      <SignUpForm />
    </AuthContextProvider>
  );
}
export default SignUp;
