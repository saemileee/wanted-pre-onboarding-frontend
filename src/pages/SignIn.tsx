import SignInForm from "../components/signIn";
import AuthContextProvider from "../contexts/AuthProvider/provider";

const SignIn = () => {
  return (
    <AuthContextProvider>
      <SignInForm />
    </AuthContextProvider>
  );
};
export default SignIn;
