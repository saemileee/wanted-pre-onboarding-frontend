import { useState } from "react";
import * as AuthType from "../interface/Auth";
import { emailRegex, passwordRegex } from "../utils/validationUtils";
import { EMAIL_VALIDATION_MSG, PASSWORD_VALIDATION_MSG } from "../constants/message";

export function useValidation() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [validationMsg, setValidationMsg] = useState("");

  const handleValidator = (field: AuthType.Field, value: string) => {
    if (field === "email") {
      setIsValid(emailRegex.test(value));
      setValidationMsg(EMAIL_VALIDATION_MSG);
    }
    if (field === "password") {
      console.log(passwordRegex.test(value));
      setIsValid(passwordRegex.test(value));
      setValidationMsg(PASSWORD_VALIDATION_MSG);
    }
  };

  return { isValid, validationMsg, handleValidator };
}

export default useValidation;
