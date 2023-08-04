import * as AuthType from '../interface/Auth';
import { emailRegex, passwordRegex } from '../utils/validationUtils';
import { EMAIL_VALIDATION_MSG, PASSWORD_VALIDATION_MSG } from '../constants/message';

function useValidation() {
  const handleValidator = (field: AuthType.Field, value: string) => {
    if (field === 'email') {
      const emailIsValid = emailRegex.test(value);
      return {
        isValid: emailIsValid,
        msg: emailIsValid || !value.length ? '' : EMAIL_VALIDATION_MSG,
      };
    }
    if (field === 'password') {
      const pwdIsValid = passwordRegex.test(value);
      return {
        isValid: pwdIsValid,
        msg: pwdIsValid || !value.length ? '' : PASSWORD_VALIDATION_MSG,
      };
    }
    return { isValid: false, msg: '' };
  };

  return { handleValidator };
}

export default useValidation;
