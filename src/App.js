import React, { Fragment } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './base.scss';
import './App.scss';

import Navbar from './components/layout/navbar/Navbar';
import Canvas from './components/canvas/Canvas';
import ToolPanel from './components/toolPanel/ToolPanel';
import AnimationAndSettingsPanel from './components/animationAndSettingsPanel/AnimationAndSettingsPanel';
import FramePanel from './components/framePanel/FramePanel';

import ToolPanelState from './context/toolPanel/ToolPanelState';
import AnimationAndSettingsPanelState from './context/animationAndSettingsPanel/AnimationAndSettingsPanelState';
import CanvasState from './context/canvas/CanvasState';
import FramePanelState from './context/framePanel/FramePanelState';

const App = () => (
  <ToolPanelState>
    <AnimationAndSettingsPanelState>
      <CanvasState>
        <FramePanelState>
          <Fragment>
            <Navbar />
            <main className="main">
              <ToolPanel />
              <FramePanel />
              <div className="workbench" onContextMenu={(e) => e.preventDefault()}>
                <Canvas />
              </div>
              <AnimationAndSettingsPanel />
            </main>
          </Fragment>
        </FramePanelState>
      </CanvasState>
    </AnimationAndSettingsPanelState>
  </ToolPanelState>
);

export default App;
