import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavButton } from './Buttons';
import { LoginButton } from './Auth';
import ROUTES from '../../constants/routes';
import '../../styles/common/header.scss';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header>
      {currentPath === ROUTES.SIGNIN && <NavButton text="회원가입" url={ROUTES.SIGNUP} />}
      {currentPath === ROUTES.SIGNUP && <NavButton text="로그인" url={ROUTES.SIGNIN} />}
      {currentPath === ROUTES.TODO && <LoginButton />}
    </header>
  );
}
