import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import SignUpButton from '../../auth/signUpButton/SignUpButton';

const Header = () => (
  <nav className="header">
    <h1 className="header__logo">
      <Link to="/">Piskel</Link>
    </h1>

    <div className="header__button-wrapper">
      <SignUpButton />
    </div>
  </nav>
);

export default Header;
