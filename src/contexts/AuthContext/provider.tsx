import React, { useMemo, useState } from 'react';
import { AuthContext } from './context';
import * as AuthType from '../../interface/Auth';
import Validation from '../../interface/Validation';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<AuthType.Form>({
    email: '',
    password: '',
  });

  const [emailValidation, setEmailValidation] = useState<Validation>({ isValid: false });
  const [pwdValidation, setPwdValidation] = useState<Validation>({ isValid: false });

  const authFormData = useMemo(
    () => ({
      formData,
      setFormData,
      emailValidation,
      setEmailValidation,
      pwdValidation,
      setPwdValidation,
    }),
    [formData]
  );

  return <AuthContext.Provider value={authFormData}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
