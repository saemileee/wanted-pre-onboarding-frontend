import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/signUp';
import AuthContextProvider from '../contexts/AuthProvider/provider';
import { isLoggedIn } from '../utils/authUtils';
import ROUTES from '../constants/routes';
import { NavButton } from '../components/common/button';
import authStyles from '../styles/Auth/auth.module.scss';

function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.TODO);
    }
  }, []);

  return (
    <main>
      <div className={authStyles.wrap}>
        <NavButton text="로그인 이동" url={ROUTES.SIGNIN} />
        <h1 className={authStyles.title}>SIGN UP</h1>
        <AuthContextProvider>
          <SignUpForm />
        </AuthContextProvider>
      </div>
    </main>
  );
}
export default SignUp;
