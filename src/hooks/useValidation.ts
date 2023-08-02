import { useState } from 'react';
import * as AuthType from '../interface/Auth';
import { emailRegex, passwordRegex } from '../utils/validationUtils';
import { EMAIL_VALIDATION_MSG, PASSWORD_VALIDATION_MSG } from '../constants/message';

function useValidation() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [validationMsg, setValidationMsg] = useState('');

  const handleValidator = (field: AuthType.Field, value: string) => {
    if (field === 'email') {
      const emailIsValid = emailRegex.test(value);
      setIsValid(emailIsValid);
      setValidationMsg(EMAIL_VALIDATION_MSG);
      return { emailIsValid, validationMsg };
    }
    if (field === 'password') {
      const pwdIsValid = passwordRegex.test(value);
      setIsValid(pwdIsValid);
      setValidationMsg(PASSWORD_VALIDATION_MSG);
      return { pwdIsValid, validationMsg };
    }
    return {};
  };

  return { isValid, validationMsg, handleValidator };
}

export default useValidation;
