import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import type { CredentialResponse } from '@react-oauth/google';

interface LoginPopupProps {
  onSuccess: (response: CredentialResponse) => void;
  onError?: () => void;
  mode?: 'light' | 'dark';
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onSuccess, onError, mode = 'light' }) => {
  const isDark = mode === 'dark';
  const popupStyle: React.CSSProperties = {
    background: isDark ? '#232946' : '#f8fafc',
    borderRadius: 16,
    boxShadow: isDark
      ? '0 8px 32px rgba(0,0,0,0.38)'
      : '0 8px 32px rgba(0,0,0,0.18)',
    padding: '20px 32px 32px 32px',
    minWidth: 320,
    maxWidth: 360,
    width: '100%',
    textAlign: 'center',
    border: 'none',
    position: 'relative',
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: isDark ? '#f4f4f4' : '#22223b',
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: 30,
    fontWeight: 700,
    fontSize: 28,
    color: isDark ? '#f4f4f4' : '#22223b',
    letterSpacing: '0.02em',
    fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
    textShadow: isDark
      ? '0 2px 8px rgba(0,0,0,0.28)'
      : '0 2px 8px rgba(0,0,0,0.08)',
  };

  return (
    <div style={popupStyle}>
      <h2 style={headingStyle}>Sign In</h2>
      <GoogleLogin onSuccess={onSuccess} onError={onError} text="continue_with" />
    </div>
  );
};

export default LoginPopup;
