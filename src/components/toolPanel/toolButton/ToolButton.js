import React, { useContext } from 'react';

import './toolButton.scss';

import ToolPanelContext from '../../../context/toolPanel/toolPanelContext';

function ToolButton({ type }) {
  const { toolType, setToolType } = useContext(ToolPanelContext);

  return (
    <div
      onClick={() => setToolType(type)}
      className={`tool-button tool-button--${type} ${toolType === type && 'tool-button--selected'}`}
    ></div>
  );
}

export default ToolButton;
