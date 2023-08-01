import { useNavigate } from "react-router-dom";
import SignInForm from "../components/signIn";
import AuthContextProvider from "../contexts/AuthProvider/provider";
import { isLoggedIn } from "../utils/authUtils";
import ROUTES from "../constants/routes";
import { useEffect } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.TODO);
    }
  }, []);

  return (
    <AuthContextProvider>
      <SignInForm />
    </AuthContextProvider>
  );
};
export default SignIn;
