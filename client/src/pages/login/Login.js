import React from 'react';

import './login.scss';

import LogInForm from '../../components/auth/forms/LogInForm';

function Login(props) {
  return (
    <div className="login-page">
      <LogInForm pageProps={props} />
    </div>
  );
}

export default Login;
