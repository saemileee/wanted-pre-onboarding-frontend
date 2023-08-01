import { EmailInputContainer, PasswordInputContainer, SubmitInput } from "../common/auth";
import useAuthForm from "../../hooks/useAuthForm";

const SignUpForm = () => {
  const { handleSubmit } = useAuthForm("signUp");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <EmailInputContainer dataTestId="email-input" />
      <PasswordInputContainer dataTestId="password-input" />
      <SubmitInput dataTestId="signup-button" text="회원가입" />
    </form>
  );
};

export default SignUpForm;
