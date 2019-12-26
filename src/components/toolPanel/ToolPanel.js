import React from 'react';

import './toolPanel.scss';

import { TOOL_TYPE } from '../../constants';

import StrokeSizeUI from './strokeSizeUI/StrokeSizeUI';
import ToolButton from './toolButton/ToolButton';
import ColorSelectionUI from './colorSelectionUI/ColorSelectionUI';

function ToolPanel() {
  return (
    <div className="tool-panel">
      <div className="tool-panel__stroke-size">
        <StrokeSizeUI />
      </div>
      <div className="tool-panel__tools">
        {Object.values(TOOL_TYPE).map((tool) => (
          <ToolButton key={`tool-${tool}`} tool={tool} />
        ))}
      </div>
      <div className="tool-panel__colors">
        <ColorSelectionUI />
      </div>
    </div>
  );
}

export default ToolPanel;
