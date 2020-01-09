import React, { useContext } from 'react';

import './button.scss';

import AuthContext from '../../../context/auth/authContext';

function SignUpButton() {
  const { logOut } = useContext(AuthContext);

  return (
    <button className="auth-button" onClick={logOut}>
      Log out
    </button>
  );
}

export default SignUpButton;
