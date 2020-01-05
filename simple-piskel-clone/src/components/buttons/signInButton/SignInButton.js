import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

import './signInButton.scss';

import { OAUTH_ID } from '../../../shared/constants';

function SignInButton() {
  const [loginName, setLoginName] = useState(null);

  const signIn = (res) => setLoginName(res.profileObj.name);

  if (loginName) return <p>{loginName}</p>;

  return (
    <GoogleLogin
      clientId={OAUTH_ID}
      render={(renderProps) => (
        <button
          className="sign-in-button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Sign in
        </button>
      )}
      onSuccess={signIn}
      onFailure={() => {}}
    />
  );
}

export default SignInButton;
