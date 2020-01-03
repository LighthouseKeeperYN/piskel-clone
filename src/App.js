import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import 'normalize.css';
import './App.scss';

import LocalStorageController from './components/LocalStorageController';
import ShortcutController from './components/shortcuts/ShortcutController';
import Header from './components/layout/header/Header';
import Landing from './pages/landing/Landing';
import Project from './pages/project/Project';

import ToolPanelState from './context/toolPanel/ToolPanelState';
import AnimationAndSettingsPanelState from './context/animationAndSettingsPanel/AnimationAndSettingsPanelState';
import CanvasState from './context/canvas/CanvasState';
import FramePanelState from './context/framePanel/FramePanelState';
import ShortcutsState from './context/shortcuts/ShortcutsState';

const App = () => (
  <ToolPanelState>
    <AnimationAndSettingsPanelState>
      <CanvasState>
        <FramePanelState>
          <ShortcutsState>
            <HashRouter>
              <LocalStorageController />
              <ShortcutController />
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
          </ShortcutsState>
        </FramePanelState>
      </CanvasState>
    </AnimationAndSettingsPanelState>
  </ToolPanelState>
);

export default App;
