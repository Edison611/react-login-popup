import { default as React } from 'react';
import { CredentialResponse } from '@react-oauth/google';
interface LoginPopupProps {
    onSuccess: (response: CredentialResponse) => void;
    onError?: () => void;
}
declare const LoginPopup: React.FC<LoginPopupProps>;
export default LoginPopup;
