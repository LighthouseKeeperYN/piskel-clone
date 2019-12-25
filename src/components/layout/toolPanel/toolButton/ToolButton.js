import React, { useContext } from 'react';

import './toolButton.scss';

import UIContext from '../../../../context/ui/uiContext';

function ToolButton({ type }) {
  const uiContext = useContext(UIContext);

  return (
    <div
      onClick={() => uiContext.setToolType(type)}
      className={`tool-button tool-button--${type} ${uiContext.toolType === type &&
        'tool-button--selected'}`}
    ></div>
  );
}

export default ToolButton;
