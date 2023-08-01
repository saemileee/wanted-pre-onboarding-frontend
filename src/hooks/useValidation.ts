import { useState } from "react";
import * as AuthType from "../interface/Auth";
import { emailRegex, passwordRegex } from "../utils/validationUtils";
import { EMAIL_VALIDATION_MSG, PASSWORD_VALIDATION_MSG } from "../constants/message";

export function useValidation() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [validationMsg, setValidationMsg] = useState("");

  const handleValidator = (field: AuthType.Field, value: string) => {
    if (field === "email") {
      const isValid = emailRegex.test(value);
      setIsValid(isValid);
      setValidationMsg(EMAIL_VALIDATION_MSG);
      return { isValid, validationMsg };
    }
    if (field === "password") {
      const isValid = passwordRegex.test(value);
      setIsValid(isValid);
      setValidationMsg(PASSWORD_VALIDATION_MSG);
      return { isValid, validationMsg };
    }
  };

  return { isValid, validationMsg, handleValidator };
}

export default useValidation;
