import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './App.scss';
import './base.scss';

import Navbar from './components/layout/navbar/Navbar';
import Canvas from './components/canvas/Canvas';
import ToolPanel from './components/toolPanel/ToolPanel';

import UIState from './context/ui/UIState';

const App = () => (
  <UIState>
    <Fragment>
      <Navbar />
      <main>
        <div>
          <ToolPanel />
        </div>
        <div></div>
        <div className="workbench">
          <Canvas />
        </div>
        <div></div>
        <div></div>
      </main>
    </Fragment>
  </UIState>
);

export default App;
