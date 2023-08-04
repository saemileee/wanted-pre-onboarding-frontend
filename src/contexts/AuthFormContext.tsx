import React, { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';
import * as AuthType from '../interface/Auth';

type AuthFormAction =
  | { type: 'CHANGE_EMAIL'; payload: { value: string; isValid: boolean } }
  | { type: 'CHANGE_PASSWORD'; payload: { value: string; isValid: boolean } };

interface AuthFormProviderProps {
  children: ReactNode;
}

const initialState: AuthType.Form = {
  email: { value: '', isValid: false },
  password: { value: '', isValid: false },
};
const AuthFormStateContext = createContext<AuthType.Form | undefined>(undefined);

type AuthFormDispatch = Dispatch<AuthFormAction>;
const AuthFormDispatchContext = createContext<AuthFormDispatch | undefined>(undefined);

const authFormReducer = (authForm: AuthType.Form, action: AuthFormAction): AuthType.Form => {
  switch (action.type) {
    case 'CHANGE_EMAIL':
      return { ...authForm, email: action.payload };
    case 'CHANGE_PASSWORD':
      return { ...authForm, password: action.payload };

    default:
      return authForm;
  }
};

export function AuthFormProvider({ children }: AuthFormProviderProps) {
  const [authFormState, dispatch] = useReducer(authFormReducer, initialState);

  return (
    <AuthFormDispatchContext.Provider value={dispatch}>
      <AuthFormStateContext.Provider value={authFormState}>
        {children}
      </AuthFormStateContext.Provider>
    </AuthFormDispatchContext.Provider>
  );
}

export function useAuthFormState() {
  const state = useContext(AuthFormStateContext);
  if (!state) throw new Error('AuthFormProvider not found');
  return state;
}

export function useAuthFormDispatch() {
  const dispatch = useContext(AuthFormDispatchContext);
  if (!dispatch) throw new Error('AuthFormProvider not found');
  return dispatch;
}
