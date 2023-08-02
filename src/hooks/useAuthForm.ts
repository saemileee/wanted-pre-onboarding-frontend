import { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidation from './useValidation';
import * as AuthType from '../interface/Auth';
import { AuthContext } from '../contexts/AuthProvider/context';
import { SIGNIN_ERR, SIGNIN_SUCCESS, SIGNUP_ERR, SIGNUP_SUCCESS } from '../constants/message';
import * as authFetcher from '../api/authFetcher';
import ROUTES from '../constants/routes';

function useAuthForm() {
  const navigate = useNavigate();
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
          } catch (err) {
            alert(SIGNUP_ERR);
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
              localStorage.setItem('accessToken', res.data.access_token);
              navigate(ROUTES.TODO);
            }
          } catch (err) {
            alert(SIGNIN_ERR);
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
