import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import 'normalize.css';
import './base.scss';
import './App.scss';

import Header from './components/layout/header/Header';
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
            <HashRouter>
              <LocalStorageController />
              <div className="app">
                <Header />
                <main className="main">
                  <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/project" component={Project} />
                  </Switch>
                </main>
              </div>
            </HashRouter>
        </FramePanelState>
      </CanvasState>
    </AnimationAndSettingsPanelState>
  </ToolPanelState>
);

export default App;
