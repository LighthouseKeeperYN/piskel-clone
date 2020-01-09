import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

import AuthContext from '../../../context/auth/authContext';
import DbStorageContext from '../../../context/dbStorage/dbStorageContext';

function SignUpButton() {
  const { logOut } = useContext(AuthContext);
  const { clearProjects } = useContext(DbStorageContext);

  const execLogOut = () => {
    logOut();
    clearProjects();
  }

  return (
    <Link to="/">
      <button className="auth-button" onClick={execLogOut}>
        Log out
      </button>
    </Link>
  );
}

export default SignUpButton;
