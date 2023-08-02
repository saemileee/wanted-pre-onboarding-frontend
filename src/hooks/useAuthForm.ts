import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidation from './useValidation';
import * as AuthType from '../interface/Auth';
import { AuthContext } from '../contexts/AuthProvider/context';
import {
  SIGININ_VALIDATION_MSG,
  SIGNIN_ERR,
  SIGNIN_SUCCESS,
  SIGNUP_ERR,
  SIGNUP_SUCCESS,
} from '../constants/message';
import * as authFetcher from '../api/authFetcher';
import ROUTES from '../constants/routes';

function useAuthForm() {
  const navigate = useNavigate();
  const { isValid, validationMsg, handleValidator } = useValidation();
  const { formData, setFormData } = useContext(AuthContext);

  const handleFieldChange = (field: AuthType.Field, value: string) => {
    handleValidator(field, value);
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (type: AuthType.Type) => {
    const { emailIsValid } = handleValidator('email', formData.email)!;
    const { pwdIsValid } = handleValidator('password', formData.password)!;

    if (emailIsValid && pwdIsValid) {
      if (type === 'signUp') {
        const fetchData = async () => {
          try {
            const res = await authFetcher.postSignUp(formData);
            if (res.status === 201) {
              alert(SIGNUP_SUCCESS);
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
    } else {
      alert(SIGININ_VALIDATION_MSG);
    }
  };

  return { isValid, validationMsg, formData, handleFieldChange, handleSubmit };
}

export default useAuthForm;
