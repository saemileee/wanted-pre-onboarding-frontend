import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthFormState, useAuthFormDispatch } from '../contexts/AuthFormContext';
import useValidation from './useValidation';
import * as AuthType from '../interface/Auth';
import { SIGNIN_SUCCESS, SIGNUP_SUCCESS } from '../constants/message';
import * as authFetcher from '../api/authFetcher';
import ROUTES from '../constants/routes';
import useAuth from './useAuth';

function useAuthForm() {
  const navigate = useNavigate();
  const authFormState = useAuthFormState();
  const authFormDispatch = useAuthFormDispatch();

  const { setNewAccessToken } = useAuth();
  const { handleValidator } = useValidation();

  const changeAuthForm = (
    field: AuthType.Field,
    value: string
  ): {
    isValid: boolean;
    msg: string;
  } | null => {
    if (field === 'email') {
      const validationResult = handleValidator('email', value)!;
      authFormDispatch({
        type: 'CHANGE_EMAIL',
        payload: { value, isValid: validationResult.isValid },
      });
      return validationResult;
    }
    if (field === 'password') {
      const validationResult = handleValidator('password', value)!;
      authFormDispatch({
        type: 'CHANGE_PASSWORD',
        payload: { value, isValid: validationResult.isValid },
      });
      return validationResult;
    }
    return null;
  };

  const isSubmitBtnEnabled = useMemo(() => {
    if (authFormState.email.isValid && authFormState.password.isValid) {
      return true;
    }
    return false;
  }, [authFormState]);

  const handleSubmit = (type: AuthType.Type) => {
    if (authFormState.email.isValid && authFormState.password.isValid) {
      const { email, password } = authFormState;
      const req = { email: email.value, password: password.value };
      if (type === 'signUp') {
        const fetchData = async () => {
          try {
            const res = await authFetcher.postSignUp(req);
            if (res.status === 201) {
              alert(SIGNUP_SUCCESS);
              navigate(ROUTES.SIGNIN);
            }
          } catch (err: any) {
            alert(err.message);
          }
        };
        fetchData();
      }
      if (type === 'signIn') {
        const fetchData = async () => {
          try {
            const res = await authFetcher.postSignIn(req);
            if (res.status === 200) {
              alert(SIGNIN_SUCCESS);
              setNewAccessToken(res.data.access_token);
              navigate(ROUTES.TODO);
            }
          } catch (err: any) {
            alert(err.message);
          }
        };
        fetchData();
      }
    }
  };

  return {
    changeAuthForm,
    isSubmitBtnEnabled,
    handleSubmit,
  };
}

export default useAuthForm;
