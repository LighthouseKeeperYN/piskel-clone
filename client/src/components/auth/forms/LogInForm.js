import React, { useContext, useEffect, useState } from 'react';

import './form.scss';

import AuthContext from '../../../context/auth/authContext';

const LogInForm = ({ pageProps }) => {
  const { logIn, error, clearErrors, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) pageProps.history.push('/');

    if (error === 'Invalid Credentials') {
      alert(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, pageProps.history]);

  const [user, setUser] = useState({
    email: null,
    password: null
  });

  const { email, password } = user;

  const writeValue = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const execLogIn = (e) => {
    e.preventDefault();
    logIn({ email, password });
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-title">Login</h1>
      <form onSubmit={execLogIn}>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={writeValue}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={writeValue}
            required
          />
        </div>
        <input type="submit" value="Login" className="form-button" />
      </form>
    </div>
  );
};

export default LogInForm;
