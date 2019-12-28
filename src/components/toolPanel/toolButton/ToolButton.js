import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './toolButton.scss';

import ToolPanelContext from '../../../context/toolPanel/toolPanelContext';

function ToolButton({ tool }) {
  const { toolType, setToolType } = useContext(ToolPanelContext);

  return (
    <div
      onClick={() => setToolType(tool)}
      className={`tool-button tool-button--${tool} ${
        toolType === tool ? 'tool-button--selected' : ''
      }`}
    ></div>
  );
}

export default ToolButton;

ToolButton.propTypes = {
  tool: PropTypes.string.isRequired,
};
