import React, { useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import AuthContext from '../../../context/auth/authContext';

import SignUpButton from '../../auth/buttons/SignUpButton';
import LogOutButton from '../../auth/buttons/LogOutButton';
import LogInButton from '../../auth/buttons/LogInButton';

const Header = () => {
  const { isAuthenticated, loadUser, user } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <nav className="header">
      <h1 className="header__logo">
        <Link to="/">Piskel</Link>
      </h1>

      <div className="header__button-wrapper">
        {isAuthenticated ? (
          <Fragment>
            <span className="header__user-name">{user?.name}</span> <LogOutButton />
          </Fragment>
        ) : (
          <Fragment>
            <LogInButton /> <SignUpButton />
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default Header;
