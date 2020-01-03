import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-tooltip-lite';

import './toolButton.scss';

import ToolPanelContext from '../../../context/toolPanel/toolPanelContext';

function ToolButton({ tool, toolName }) {
  const { toolType, setToolType } = useContext(ToolPanelContext);

  return (
    <Tooltip
      content={toolName}
      direction="right"
      className="tool-button__tooltip"
      arrowSize={5}
      padding={5}
      hoverDelay={0}
    >
      <div
        className={`tool-button tool-button--${tool} ${
          toolType === tool ? 'tool-button--selected' : ''
        }`}
        onClick={() => setToolType(tool)}
      ></div>
    </Tooltip>
  );
}

export default ToolButton;

ToolButton.propTypes = {
  tool: PropTypes.string.isRequired,
  toolName: PropTypes.string.isRequired
};
