import { useState } from 'react';

function useAuth() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  const isLoggedIn = () => !!accessToken;
  const getAccessToken = () => accessToken;

  const setNewAccessToken = (newToken: string) => {
    localStorage.setItem('accessToken', newToken);
    setAccessToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
  };

  return {
    isLoggedIn,
    getAccessToken,
    setNewAccessToken,
    logout,
  };
}

export default useAuth;
