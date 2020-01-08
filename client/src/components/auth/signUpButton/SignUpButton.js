import React from 'react';
import { Link } from 'react-router-dom';

import './signUpButton.scss';

function SignUpButton() {
  return (
    <Link to="/register">
      <button className="sign-up-button">Sign up</button>
    </Link>
  );
}

export default SignUpButton;
