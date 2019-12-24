import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './App.scss';
import './base.scss';

import Navbar from './components/layout/navbar/Navbar';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <p>hello world</p>
    </Fragment>
  )
};

export default App;
