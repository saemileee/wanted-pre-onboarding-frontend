import React from 'react';
import { EmailInputContainer, PasswordInputContainer, SubmitInput } from '../common/auth';
import useAuthForm from '../../hooks/useAuthForm';

function SignInForm() {
  const { handleSubmit } = useAuthForm();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit('signIn');
      }}
    >
      <EmailInputContainer dataTestId="email-input" />
      <PasswordInputContainer dataTestId="password-input" />
      <SubmitInput dataTestId="signup-button" text="로그인" />
    </form>
  );
}

export default SignInForm;
