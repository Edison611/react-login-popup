import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import type { CredentialResponse } from '@react-oauth/google';

interface LoginPopupProps {
  onSuccess: (response: CredentialResponse) => void;
  onError?: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onSuccess, onError }) => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: 8,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      padding: 32,
      zIndex: 1000,
      minWidth: 300,
      textAlign: 'center'
    }}>
      <h2>Sign in</h2>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
};

export default LoginPopup;
