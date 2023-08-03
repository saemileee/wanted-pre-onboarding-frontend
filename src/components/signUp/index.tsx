import React from 'react';
import { EmailInputContainer, PasswordInputContainer, SubmitInput } from '../common/Auth';
import useAuthForm from '../../hooks/useAuthForm';
import authStyles from '../../styles/Auth/auth.module.scss';

function SignUpForm() {
  const { handleSubmit } = useAuthForm();
  return (
    <form
      className={authStyles.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit('signUp');
      }}
    >
      <EmailInputContainer dataTestId="email-input" />
      <PasswordInputContainer dataTestId="password-input" />
      <SubmitInput dataTestId="signup-button" text="회원가입" />
    </form>
  );
}

export default SignUpForm;
