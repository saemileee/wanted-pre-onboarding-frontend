import { useState } from "react";
import { AuthContext } from "./context";
import * as AuthType from "../../interface/Auth";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formData, setFormData] = useState<AuthType.Form>({
    email: "",
    password: "",
  });

  const authFormData = {
    formData,
    setFormData,
  };

  return <AuthContext.Provider value={authFormData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
