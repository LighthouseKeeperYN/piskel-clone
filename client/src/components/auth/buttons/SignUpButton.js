import React from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

function SignUpButton() {
  return (
    <Link to="/register">
      <button className="auth-button">Sign up</button>
    </Link>
  );
}

export default SignUpButton;
