import { useContext, useState } from "react";
import useValidation from "./useValidation";
import * as AuthType from "../interface/Auth";
import { AuthContext } from "../contexts/AuthProvider/context";
import { SIGININ_VALIDATION_MSG, SIGNUP_ERR, SIGNUP_SUCCESS } from "../constants/message";
import * as authFetcher from "../api/authFetcher";

function useAuthForm(type?: AuthType.Type) {
  const { isValid, validationMsg, handleValidator } = useValidation();
  const { formData, setFormData } = useContext(AuthContext);

  const handleFieldChange = (field: AuthType.Field, value: string) => {
    handleValidator(field, value);
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    const { isValid: emailIsValid } = handleValidator("email", formData.email)!;

    const { isValid: pwdIsValid } = handleValidator("password", formData.password)!;

    if (emailIsValid && pwdIsValid) {
      if ((type = "signUp")) {
        const fetchData = async () => {
          try {
            const res = await authFetcher.postSingUp(formData);
            res === 201 ? alert(SIGNUP_SUCCESS) : null;
          } catch (err) {
            alert(SIGNUP_ERR);
            console.log(err);
          }
        };
        fetchData();
        console.log(formData);
      }
    } else {
      alert(SIGININ_VALIDATION_MSG);
    }
  };

  return { isValid, validationMsg, formData, handleFieldChange, handleSubmit };
}

export default useAuthForm;
