import React from "react";
import AppleSignin from 'react-apple-signin-auth';

/** Apple Signin button */
const MyAppleSigninButton = ({ ...rest }) => (
  <AppleSignin
    /** Auth options passed to AppleID.auth.init() */
    authOptions={{
      clientId: 'com.n8blake.splopple-music',
      scope: 'email name',
      redirectURI: 'https://splopple-siwa-test.herokuapp.com/applelogin',
      state: '',
      nonce: 'nonce',
      usePopup: true,
    }}
    /** General props */
    uiType="dark"
    /** className */
    className="apple-auth-btn"
    /** Allows to change the button's children, eg: for changing the button text */
    buttonExtraChildren="Continue with Apple"
    /** Checkout README.md for further customization props. */
    /** Spread rest props if needed */
    {...rest}
  />
);

export default MyAppleSigninButton;