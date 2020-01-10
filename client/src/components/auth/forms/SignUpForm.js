import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAlert } from 'react-alert';

import './form.scss';

import AuthContext from '../../../context/auth/authContext';

const SignUpForm = ({ pageProps }) => {
  const { register, error, clearErrors, isAuthenticated } = useContext(AuthContext);

  const Alert = useAlert();

  useEffect(() => {
    if (isAuthenticated) pageProps.history.push('/project');

    if (error === 'User already exists') {
      Alert.show(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, pageProps.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const writeValue = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const execSignUp = (e) => {
    e.preventDefault();

    const { name, email, password, password2 } = user;

    if (password !== password2) Alert.show('Passwords do not match');
    else register({ name, email, password });
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={execSignUp}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required onChange={writeValue} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" required onChange={writeValue} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength="6"
            onChange={writeValue}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            id="password2"
            type="password"
            name="password2"
            required
            minLength="6"
            onChange={writeValue}
          />
        </div>
        <input type="submit" value="Register" className="form-button" />
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  pageProps: PropTypes.object.isRequired,
};

export default SignUpForm;
