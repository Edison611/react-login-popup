# How To Use

To install do the following from the terminal
```
npm install github:Edison611/react-login-popup
```
In your react project, you can import the module using:
```jsx
import LoginPopup from 'react-login-popup';
```
Also remember to wrap your project around with your GoogleOAuthProvider like so:
```jsx
import { GoogleOAuthProvider } from '@react-oauth/google';
...
<GoogleOAuthProvider clientId='client-id'>
  {children}
</GoogleOAuthProvider>
```
