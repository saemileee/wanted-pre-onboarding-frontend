import { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidation from './useValidation';
import * as AuthType from '../interface/Auth';
import { AuthContext } from '../contexts/AuthContext/context';
import { SIGNIN_SUCCESS, SIGNUP_SUCCESS } from '../constants/message';
import * as authFetcher from '../api/authFetcher';
import ROUTES from '../constants/routes';
import useAuth from './useAuth';

function useAuthForm() {
  const navigate = useNavigate();
  const { setNewAccessToken } = useAuth();
  const { handleValidator } = useValidation();
  const {
    formData,
    setFormData,
    emailValidation,
    setEmailValidation,
    pwdValidation,
    setPwdValidation,
  } = useContext(AuthContext);

  const CheckSubmitBtnEnabled = () => {
    if (emailValidation.isValid && pwdValidation.isValid) {
      return true;
    }
    return false;
  };

  const isSubmitBtnEnabled = useMemo(
    () => CheckSubmitBtnEnabled(),
    [emailValidation, pwdValidation]
  );

  const handleFieldChange = (field: AuthType.Field, value: string) => {
    if (field === 'email') {
      const validationResult = handleValidator('email', value)!;
      setEmailValidation(validationResult);
      setFormData({ ...formData!, email: value });
    }
    if (field === 'password') {
      const validationResult = handleValidator('password', value)!;
      setPwdValidation(validationResult);
      setFormData({ ...formData!, password: value });
    }
  };

  const handleSubmit = (type: AuthType.Type) => {
    if (isSubmitBtnEnabled) {
      if (type === 'signUp') {
        const fetchData = async () => {
          try {
            const res = await authFetcher.postSignUp(formData);
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
            const res = await authFetcher.postSignIn(formData);
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
    emailValidation,
    pwdValidation,
    formData,
    handleFieldChange,
    handleSubmit,
    isSubmitBtnEnabled,
  };
}

export default useAuthForm;
