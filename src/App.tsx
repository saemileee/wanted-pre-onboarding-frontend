import React from 'react';
import './styles/common/_reset.css';
import './styles/common/_global.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import useAuth from './hooks/useAuth';
import ROUTES from './constants/routes';

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
        <Route
          path="/*"
          element={isLoggedIn() ? <Navigate to={ROUTES.TODO} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
