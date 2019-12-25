import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = ({ title, projectName }) => (
  <nav className="navbar">
    <h1 className="navbar__logo">{title}</h1>
    <p className="navbar__project-name">{projectName}</p>
    <div className="navbar__button-wrapper">
      <a className="navbar__button">Create Sprite</a>
      <a className="navbar__button">Sign in</a>
    </div>
  </nav>
);

Navbar.defaultProps = {
  title: 'Piskel',
  projectName: 'New Piskel'
};

Navbar.propTypes = {
  title: PropTypes.string,
  projectName: PropTypes.string
};

export default Navbar;
