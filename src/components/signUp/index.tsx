import React from 'react';
import { EmailInputContainer, PasswordInputContainer, SubmitInput } from '../common/Auth';
import useAuthForm from '../../hooks/useAuthForm';
import authStyles from '../../styles/Auth/auth.module.scss';

function SignUpForm() {
  const { handleSubmit } = useAuthForm();
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit('signUp');
  };

  return (
    <form className={authStyles.formContainer} onSubmit={handleFormSubmit}>
      <EmailInputContainer dataTestId="email-input" />
      <PasswordInputContainer dataTestId="password-input" />
      <SubmitInput dataTestId="signup-button" text="회원가입" />
    </form>
  );
}

export default SignUpForm;
