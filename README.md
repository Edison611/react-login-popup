# How To Use

To install do the following from the terminal
```
npm install github:Edison611/react-login-popup
```
In your react project, you can import and use the module using:
```jsx
import LoginPopup from 'react-login-popup';

// You can have your own functions for handling successful or unsuccessful logins
<LoginPopup onSuccess={handleSuccess} onError={handleError}/>
```
Also remember to wrap your project around with your GoogleOAuthProvider like so:
```jsx
import { GoogleOAuthProvider } from '@react-oauth/google';
...
<GoogleOAuthProvider clientId='client-id'>
  {children}
</GoogleOAuthProvider>
```
To get the the user object from Google once a user has logged in, you can use the following:
```jsx
import { useUser } from 'react-login-popup';
```
