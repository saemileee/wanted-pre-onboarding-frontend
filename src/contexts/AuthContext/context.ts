import { Context, Dispatch, SetStateAction, createContext } from 'react';
import * as AuthType from '../../interface/Auth';
import Validation from '../../interface/Validation';

interface AuthContextType {
  formData: AuthType.Form;
  setFormData: Dispatch<SetStateAction<AuthType.Form>>;
  emailValidation: Validation;
  setEmailValidation: Dispatch<SetStateAction<Validation>>;
  pwdValidation: Validation;
  setPwdValidation: Dispatch<SetStateAction<Validation>>;
}
export const AuthContext: Context<AuthContextType> = createContext<AuthContextType>(
  {} as AuthContextType
);

export default {};
