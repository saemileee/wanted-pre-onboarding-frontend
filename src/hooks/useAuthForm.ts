import { useContext, useState } from "react";
import useValidation from "./useValidation";
import * as AuthType from "../interface/Auth";
import { AuthContext } from "../contexts/AuthProvider/context";

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
    const { isValid: emailIsValid, validationMsg: emailValidMsg } = handleValidator(
      "email",
      formData.email
    )!;

    const { isValid: pwdIsValid, validationMsg: pwdValidMsg } = handleValidator(
      "password",
      formData.password
    )!;

    if (emailIsValid && pwdIsValid) {
      console.log(formData);
    }
  };

  return { isValid, validationMsg, formData, handleFieldChange, handleSubmit };
}

export default useAuthForm;
