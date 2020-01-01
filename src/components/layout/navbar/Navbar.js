import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = ({ title, projectName }) => (
  <nav className="navbar">
    <h1 className="navbar__logo">{title}</h1>
    <p className="navbar__project-name">{projectName}</p>
    <div className="navbar__button-wrapper">
      <p className="navbar__button" href="#">Create Sprite</p>
      <p className="navbar__button" href="#">Sign in</p>
    </div>
  </nav>
);

Navbar.defaultProps = {
  title: 'Piskel',
  projectName: 'New Piskel',
};

Navbar.propTypes = {
  title: PropTypes.string,
  projectName: PropTypes.string,
};

export default Navbar;
