import React from 'react';

import './signUpForm.scss';

function SignUpForm() {
  return (
    <div className="sign-up-form-wrapper">
      <h1 className="sign-up-form-title">Sign Up</h1>
      <form onSubmit={true}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required minLength="6" />
        </div>
        <div className="input-group">
          <label htmlFor="password2">Confirm Password</label>
          <input id="password2" type="password" name="password2" required minLength="6" />
        </div>
        <input type="submit" value="Register" className="sign-up-form-button" />
      </form>
    </div>
  );
}

export default SignUpForm;
