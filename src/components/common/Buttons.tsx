import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavButtonProps {
  text: string;
  url: string;
}
export function NavButton({ text, url }: NavButtonProps) {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(url)}>
      {text}
    </button>
  );
}

export default {};
