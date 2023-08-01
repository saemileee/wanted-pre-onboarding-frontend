import { useState } from "react";
import { EmailInputContainer, PasswordInputContainer, SubmitInput } from "../common/auth";
import useAuthForm from "../../hooks/useAuthForm";

const SignInForm = () => {
  const { handleSubmit } = useAuthForm();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <EmailInputContainer dataTestId="email-input" />
      <PasswordInputContainer dataTestId="password-input" />
      <SubmitInput dataTestId="signup-button" text="로그인" />
    </form>
  );
};

export default SignInForm;
