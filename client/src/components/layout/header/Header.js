import React, { useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import AuthContext from '../../../context/auth/authContext';
import DbStorageContext from '../../../context/dbStorage/dbStorageContext';

import SignUpButton from '../../auth/buttons/SignUpButton';
import LogOutButton from '../../auth/buttons/LogOutButton';
import LogInButton from '../../auth/buttons/LogInButton';

const Header = () => {
  const { isAuthenticated, loadUser, user } = useContext(AuthContext);
  const { currentProject, getProjects } = useContext(DbStorageContext);

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
      getProjects();
    }
    // eslint-disable-next-line
  }, [localStorage.token]);

  return (
    <nav className="header">
      <h1 className="header__logo">
        <Link to="/">Piskel</Link>
      </h1>

      <Link to="/project">
        <h2 className="header__project-name">{currentProject?.name || ''}</h2>{' '}
      </Link>

      <div className="header__button-wrapper">
        {isAuthenticated ? (
          <Fragment>
            <span className="header__user-name">{user?.name}</span>
            <LogOutButton />
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
