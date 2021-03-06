import React from 'react';

import './Register.scss';

import SignUpForm from '../../components/auth/forms/SignUpForm';

function Register(props) {
  return (
    <div className="register-page">
      <SignUpForm pageProps={props} />
    </div>
  );
}

export default Register;
