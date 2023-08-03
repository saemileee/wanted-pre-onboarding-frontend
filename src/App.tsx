import React, { lazy, Suspense } from 'react';
import './styles/common/_reset.css';
import './styles/common/_global.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import useAuth from './hooks/useAuth';
import ROUTES from './constants/routes';

const Todo = lazy(() => import('./pages/Todo'));

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ color: 'white' }}>Loading...</div>}>
        <Routes>
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Suspense>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/*"
          element={isLoggedIn() ? <Navigate to={ROUTES.TODO} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
