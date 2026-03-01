# How To Use

To install do the following from the terminal:
```
npm install github:Edison611/react-login-popup
```
In your react project, you can import and use the module using:
```jsx
import LoginPopup from 'react-login-popup';

// You can have your own functions for handling successful or unsuccessful logins
<LoginPopup onSuccess={handleSuccess} onError={handleError} />
```

Also remember to wrap your project around with your GoogleOAuthProvider like so:
```jsx
import { GoogleOAuthProvider } from '@react-oauth/google';
...
<GoogleOAuthProvider clientId='{your-client-id}'>
  {children}
</GoogleOAuthProvider>
```

To get the the user object from Google once a user has logged in, you can use the following:
```jsx
import { useUser } from 'react-login-popup';
```

## Light/Dark Mode

The `LoginPopup` component supports both light and dark modes. You can set the mode using the `mode` prop:

```jsx
// Light mode (default)
<LoginPopup onSuccess={handleSuccess} onError={handleError} mode="light" />

// Dark mode
<LoginPopup onSuccess={handleSuccess} onError={handleError} mode="dark" />
```
---

## Storybook

To view and test the LoginPopup component in Storybook, run:
```
npm run storybook
```
