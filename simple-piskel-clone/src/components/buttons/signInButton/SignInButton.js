import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

import './signInButton.scss';

function SignInButton() {
  const [isSigned, setIsSigned] = useState(false);
  const [loginName, setLoginName] = useState(null);

  const signIn = (res) => {
    setIsSigned(true);
    setLoginName(res.profileObj.name);
  }

  if (isSigned) return <p>{loginName}</p>;

  return (
    <GoogleLogin
      clientId="708401454754-oese7afdmi01minpdh0n7k26dgfvpg76.apps.googleusercontent.com"
      render={(renderProps) => (
        <button
          className="sign-in-button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Sign in
        </button>
      )}
      buttonText="Login"
      onSuccess={signIn}
      onFailure={() => {}}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default SignInButton;
