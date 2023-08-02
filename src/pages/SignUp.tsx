import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/signUp';
import AuthContextProvider from '../contexts/AuthProvider/provider';
import { isLoggedIn } from '../utils/authUtils';
import ROUTES from '../constants/routes';

function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.TODO);
    }
  }, []);

  return (
    <AuthContextProvider>
      <SignUpForm />
    </AuthContextProvider>
  );
}
export default SignUp;
