import React from 'react';

import './Register.scss';

import SignUpForm from '../../components/auth/signUpForm/SignUpForm';

function Register() {
  return (
    <div className="register-page">
      <SignUpForm />
    </div>
  );
}

export default Register;
