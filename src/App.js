import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './base.scss';
import './App.scss';

import Navbar from './components/layout/navbar/Navbar';
import Canvas from './components/canvas/Canvas';
import ToolPanel from './components/toolPanel/ToolPanel';
import AnimationAndSettingsPanel from './components/animationAndSettingsPanel/AnimationAndSettingsPanel';

import ToolPanelState from './context/toolPanel/ToolPanelState';
import AnimationAndSettingsPanelState from './context/animationAndSettingsPanel/AnimationAndSettingsPanelState';

const App = () => (
  <ToolPanelState>
    <AnimationAndSettingsPanelState>
      <Fragment>
        <Navbar />
        <main>
          <ToolPanel />
          <div></div>
          <div className="workbench">
            <Canvas />
          </div>
          <AnimationAndSettingsPanel />
        </main>
      </Fragment>
    </AnimationAndSettingsPanelState>
  </ToolPanelState>
);

export default App;
