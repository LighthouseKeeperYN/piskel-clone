import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import AuthContext from '../../../context/auth/authContext';

import SignUpButton from '../../auth/buttons/SignUpButton';
import LogOutButton from '../../auth/buttons/LogOutButton';
import LogInButton from '../../auth/buttons/LogInButton';

const Header = () => {
  const { isAuthenticated, loadUser, user } = useContext(AuthContext);

  // eslint-disable-next-line
  useEffect(loadUser, []);

  return (
    <nav className="header">
      <h1 className="header__logo">
        <Link to="/">Piskel</Link>
      </h1>

      <div className="header__button-wrapper">
        {isAuthenticated
          ? [<span className="header__user-name">{user?.name}</span>, <LogOutButton />]
          : [<LogInButton />, <SignUpButton />]}
      </div>
    </nav>
  );
};

export default Header;
