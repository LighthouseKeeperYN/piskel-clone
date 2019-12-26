import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './App.scss';
import './base.scss';

import Navbar from './components/layout/navbar/Navbar';
import Canvas from './components/canvas/Canvas';
import ToolPanel from './components/toolPanel/ToolPanel';

import ToolPanelState from './context/toolPanel/ToolPanelState';

const App = () => (
  <ToolPanelState>
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
  </ToolPanelState>
);

export default App;
