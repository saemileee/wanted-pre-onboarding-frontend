import { useCallback, useState } from 'react';

function useAuth() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  const getLoginState = useCallback(() => !!accessToken, [accessToken]);
  const getAccessToken = useCallback(() => accessToken, [accessToken]);

  const setNewAccessToken = (newToken: string) => {
    localStorage.setItem('accessToken', newToken);
    setAccessToken(newToken);
  };

  const removeAccessToken = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
  };

  return {
    accessToken,
    getLoginState,
    getAccessToken,
    setNewAccessToken,
    removeAccessToken,
  };
}

export default useAuth;
