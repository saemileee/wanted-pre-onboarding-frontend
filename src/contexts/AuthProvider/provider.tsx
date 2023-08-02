import React, { useMemo, useState } from 'react';
import { AuthContext } from './context';
import * as AuthType from '../../interface/Auth';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<AuthType.Form>({
    email: '',
    password: '',
  });

  const authFormData = useMemo(
    () => ({
      formData,
      setFormData,
    }),
    [formData]
  );

  return <AuthContext.Provider value={authFormData}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
