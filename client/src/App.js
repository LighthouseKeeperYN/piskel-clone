import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import './App.scss';

import LocalStorageController from './components/LocalStorageController';
import ShortcutListener from './components/shortcuts/ShortcutListener';
import Header from './components/layout/header/Header';
import Landing from './pages/landing/Landing';
import Project from './pages/project/Project';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

import ToolPanelState from './context/toolPanel/ToolPanelState';
import AnimationAndSettingsPanelState from './context/animationAndSettingsPanel/AnimationAndSettingsPanelState';
import CanvasState from './context/canvas/CanvasState';
import FramePanelState from './context/framePanel/FramePanelState';
import ShortcutsState from './context/shortcuts/ShortcutsState';
import AuthState from './context/auth/AuthState';

const App = () => (
  <ToolPanelState>
    <AnimationAndSettingsPanelState>
      <CanvasState>
        <FramePanelState>
          <ShortcutsState>
            <AuthState>
              <Router>
                <LocalStorageController />
                <ShortcutListener />
                <div className="app">
                  <Header />
                  <main className="main">
                    <Switch>
                      <Route exact path="/" component={Landing} />
                      <Route exact path="/project" component={Project} />
                      <Route exact path='/register' component={Register} />
                      <Route exact path='/login' component={Login} />
                    </Switch>
                  </main>
                </div>
              </Router>
            </AuthState>
          </ShortcutsState>
        </FramePanelState>
      </CanvasState>
    </AnimationAndSettingsPanelState>
  </ToolPanelState>
);

export default App;
