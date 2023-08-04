import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/signIn';
import { AuthFormProvider } from '../contexts/AuthFormContext';
import ROUTES from '../constants/routes';
import authStyles from '../styles/Auth/auth.module.scss';
import Header from '../components/common/Header';
import useAuth from '../hooks/useAuth';

function SignIn() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.TODO);
    }
  }, []);

  return (
    <main>
      <Header />
      <div className={authStyles.wrap}>
        <h1 className={authStyles.title}>LOGIN</h1>
        <AuthFormProvider>
          <SignInForm />
        </AuthFormProvider>
      </div>
    </main>
  );
}
export default SignIn;
