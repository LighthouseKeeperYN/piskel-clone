import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './base.scss';
import './App.scss';

import Navbar from './components/layout/navbar/Navbar';
import Landing from './components/pages/landing/Landing';
import Project from './components/pages/project/Project';
import LocalStorageController from './LocalStorageController';

import ToolPanelState from './context/toolPanel/ToolPanelState';
import AnimationAndSettingsPanelState from './context/animationAndSettingsPanel/AnimationAndSettingsPanelState';
import CanvasState from './context/canvas/CanvasState';
import FramePanelState from './context/framePanel/FramePanelState';

const App = () => (
  <ToolPanelState>
    <AnimationAndSettingsPanelState>
      <CanvasState>
        <FramePanelState>
          <Router>
          <LocalStorageController />
            <div className="app">
              <Navbar />
              <main className="main">
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/project" component={Project} />
                </Switch>
              </main>
            </div>
          </Router>
        </FramePanelState>
      </CanvasState>
    </AnimationAndSettingsPanelState>
  </ToolPanelState>
);

export default App;
