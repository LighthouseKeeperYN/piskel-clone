import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

import AuthContext from '../../../context/auth/authContext';

function SignUpButton() {
  const { logOut } = useContext(AuthContext);

  return (
    <Link to="/">
      <button className="auth-button" onClick={logOut}>
        Log out
      </button>
    </Link>
  );
}

export default SignUpButton;
