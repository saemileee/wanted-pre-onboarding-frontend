import React from 'react';
import { EmailInputContainer, PasswordInputContainer, SubmitInput } from '../common/Auth';
import useAuthForm from '../../hooks/useAuthForm';
import authStyles from '../../styles/Auth/auth.module.scss';

function SignInForm() {
  const { handleSubmit } = useAuthForm();
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit('signIn');
  };

  return (
    <form className={authStyles.formContainer} onSubmit={handleFormSubmit}>
      <EmailInputContainer dataTestId="email-input" />
      <PasswordInputContainer dataTestId="password-input" />
      <SubmitInput dataTestId="signin-button" text="로그인" />
    </form>
  );
}

export default SignInForm;
