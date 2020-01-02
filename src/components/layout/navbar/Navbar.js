import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar__logo">
      <Link to="/">Piskel</Link>
    </h1>

    <div className="navbar__button-wrapper">
      <button className="navbar__button" href="#">
        Sign in
      </button>
    </div>
  </nav>
);

export default Navbar;
