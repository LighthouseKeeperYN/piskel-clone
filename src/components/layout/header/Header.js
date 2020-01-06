import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import SignInButton from '../../buttons/signInButton/SignInButton';

const Header = () => (
  <nav className="header">
    <h1 className="header__logo">
      <Link to="/">Piskel</Link>
    </h1>

    <div className="header__button-wrapper">{<SignInButton />}</div>
  </nav>
);

export default Header;
