import { useEffect } from "react";
import SignUpForm from "../components/signUp";
import AuthContextProvider from "../contexts/AuthProvider/provider";
import { isLoggedIn } from "../utils/authUtils";
import ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.TODO);
    }
  }, []);

  return (
    <AuthContextProvider>
      <SignUpForm />
    </AuthContextProvider>
  );
};
export default SignUp;
