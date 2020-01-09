import React from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

function LogInButton() {
  return (
    <Link to="/login">
      <button className="auth-button">Log in</button>
    </Link>
  );
}

export default LogInButton;
