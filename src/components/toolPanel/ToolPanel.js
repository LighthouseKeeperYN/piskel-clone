import React, { useContext } from 'react';

import './toolPanel.scss';

import { TOOL_TYPE } from '../../constants';
// import UIContext from '../../context/ui/uiContext';

import StrokeSizeUI from './strokeSizeUI/StrokeSizeUI';
import ToolButton from './toolButton/ToolButton';
import ColorSelectionUI from './colorSelectionUI/ColorSelectionUI';

function ToolPanel() {
  // const uiContext = useContext(UIContext);

  return (
    <div className="tool-panel">
      <div className="tool-panel__stroke-size">
        <StrokeSizeUI />
      </div>
      <div className="tool-panel__tools">
        {Object.values(TOOL_TYPE).map((type) => (
          <ToolButton key={`tool-${type}`} type={type} />
        ))}
      </div>
      <div className="tool-panel__colors">
        <ColorSelectionUI />
      </div>
    </div>
  );
}

export default ToolPanel;
