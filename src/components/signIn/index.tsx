import { IdInput, PasswordInput, SubmitInput } from "../common/auth";

const SignInForm = () => {
  return (
    <>
      <IdInput dataTestId={"email-input"} />
      <PasswordInput dataTestId={"password-input"} />
      <SubmitInput dataTestId={"signup-button"} text={"로그인"} />
    </>
  );
};

export default SignInForm;
