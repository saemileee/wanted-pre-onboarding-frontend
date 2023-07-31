import { IdInput, PasswordInput, SubmitInput } from "../common/auth";

const SignInForm = () => {
  return (
    <form>
      <IdInput dataTestId="email-input" />
      <PasswordInput dataTestId="password-input" />
      <SubmitInput dataTestId="signup-button" text="로그인" />
    </form>
  );
};

export default SignInForm;
