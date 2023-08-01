import SignUpForm from "../components/signUp";
import AuthContextProvider from "../contexts/AuthProvider/provider";

const SignUp = () => {
  return (
    <AuthContextProvider>
      <SignUpForm />
    </AuthContextProvider>
  );
};
export default SignUp;
