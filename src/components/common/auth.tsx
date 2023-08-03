import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthForm from '../../hooks/useAuthForm';
import ROUTES from '../../constants/routes';
import authStyle from '../../styles/Auth/auth.module.scss';

export function EmailInputContainer({ dataTestId }: { dataTestId: string }) {
  const { emailValidation, handleFieldChange } = useAuthForm();

  return (
    <>
      <label htmlFor="email">
        <p className={authStyle.labelTitle}>이메일</p>
        <input
          id="email"
          className={authStyle.authInput}
          type="text"
          placeholder="abcd@abcd.com"
          data-testid={dataTestId}
          onChange={(e) => handleFieldChange('email', e.target.value)}
        />
      </label>
      <p className={authStyle.validationMsg}>
        {!emailValidation.isValid ? emailValidation.msg : null}
      </p>
    </>
  );
}

export function PasswordInputContainer({ dataTestId }: { dataTestId: string }) {
  const { pwdValidation, handleFieldChange } = useAuthForm();
  return (
    <>
      <label htmlFor="password">
        <p className={authStyle.labelTitle}>비밀번호</p>
        <input
          id="password"
          className={authStyle.authInput}
          type="password"
          placeholder="비밀번호"
          data-testid={dataTestId}
          onChange={(e) => handleFieldChange('password', e.target.value)}
        />
      </label>
      <p className={authStyle.validationMsg}>{!pwdValidation.isValid ? pwdValidation.msg : null}</p>
    </>
  );
}

export function SubmitInput({ dataTestId, text }: { dataTestId: string; text: string }) {
  const { isSubmitBtnEnabled } = useAuthForm();

  return (
    <button
      className={authStyle.submitBtn}
      type="submit"
      data-testid={dataTestId}
      disabled={!isSubmitBtnEnabled}
    >
      {text}
    </button>
  );
}

export function LoginButton() {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    localStorage.removeItem('accessToken');
    navigate(ROUTES.SIGNIN);
  };
  return (
    <button type="button" onClick={() => handleLogoutClick()}>
      로그아웃
    </button>
  );
}
