import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthForm from '../../hooks/useAuthForm';
import ROUTES from '../../constants/routes';
import authStyle from '../../styles/Auth/auth.module.scss';
import useAuth from '../../hooks/useAuth';
import Validation from '../../interface/Validation';

export function EmailInputContainer({ dataTestId }: { dataTestId: string }) {
  const { changeAuthForm } = useAuthForm();
  const [validInfo, setValidInfo] = useState<Validation>({ isValid: false, msg: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValidInfo = changeAuthForm('email', e.target.value);
    setValidInfo(emailValidInfo!);
  };

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
          onChange={handleInputChange}
        />
      </label>
      <p className={authStyle.validationMsg}>{validInfo.msg}</p>
    </>
  );
}

export function PasswordInputContainer({ dataTestId }: { dataTestId: string }) {
  const { changeAuthForm } = useAuthForm();
  const [validInfo, setValidInfo] = useState<Validation>({ isValid: false, msg: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValidInfo = changeAuthForm('password', e.target.value);
    setValidInfo(emailValidInfo!);
  };

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
          onChange={handleInputChange}
        />
      </label>
      <p className={authStyle.validationMsg}>{validInfo.msg}</p>
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

export function LogoutButton() {
  const { removeAccessToken } = useAuth();
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    removeAccessToken();
    navigate(ROUTES.SIGNIN);
  };
  return (
    <button type="button" onClick={handleLogoutClick}>
      로그아웃
    </button>
  );
}
