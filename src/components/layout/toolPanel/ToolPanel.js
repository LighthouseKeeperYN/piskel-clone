import React from 'react';

import './toolPanel.scss';

function ToolPanel() {
  return (
    <div className="tool-panel">
      <div className="tool-panel__stroke-size-wrapper"></div>
      <div className="tool-panel__tools"></div>
      <div className="tool-panel__colors"></div>
    </div>
  );
}

export default ToolPanel;
