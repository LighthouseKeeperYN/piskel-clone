import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import 'normalize.css';
import './App.scss';

import LocalStorageController from './components/LocalStorageController';
import Header from './components/layout/header/Header';
import Landing from './pages/landing/Landing';
import Project from './pages/project/Project';

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
