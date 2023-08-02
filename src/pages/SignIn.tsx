import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SignInForm from "../components/signIn";
import AuthContextProvider from "../contexts/AuthProvider/provider";
import { isLoggedIn } from "../utils/authUtils";
import ROUTES from "../constants/routes";

function SignIn() {
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
}
export default SignIn;
