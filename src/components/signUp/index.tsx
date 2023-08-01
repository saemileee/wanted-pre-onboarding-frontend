import { EmailInputContainer, PasswordInputContainer, SubmitInput } from "../common/auth";
import useAuthForm from "../../hooks/useAuthForm";

const SignUpForm = () => {
  const { handleSubmit } = useAuthForm();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit("signUp");
      }}
    >
      <EmailInputContainer dataTestId="email-input" />
      <PasswordInputContainer dataTestId="password-input" />
      <SubmitInput dataTestId="signup-button" text="회원가입" />
    </form>
  );
};

export default SignUpForm;
