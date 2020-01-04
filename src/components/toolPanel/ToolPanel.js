import React from 'react';

import './toolPanel.scss';

import { TOOL_TYPES, ACTION_DESCRIPTIONS } from '../../shared/constants';

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
        {Object.values(TOOL_TYPES).map((tool) => (
          <ToolButton key={`tool-${tool}`} tool={tool} toolName={ACTION_DESCRIPTIONS[tool]} />
        ))}
      </div>
      <div className="tool-panel__colors">
        <ColorSelectionUI />
      </div>
    </div>
  );
}

export default ToolPanel;
