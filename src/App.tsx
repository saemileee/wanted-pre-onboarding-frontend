import React, { lazy, Suspense } from 'react';
import './styles/common/_reset.css';
import './styles/common/_global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Todo = lazy(() => import('./pages/Todo'));

function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
