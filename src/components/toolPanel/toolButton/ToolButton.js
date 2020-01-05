import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-tooltip-lite';

import './toolButton.scss';

import ToolPanelContext from '../../../context/toolPanel/toolPanelContext';
import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

import { TOOLTIP_PROPS } from '../../../shared/constants';
import { shortcutToString } from '../../../shared/utilities';

function ToolButton({ tool, toolName }) {
  const { toolType, setToolType } = useContext(ToolPanelContext);
  const { shortcuts } = useContext(ShortcutsContext);

  return (
    <Tooltip
      content={[
        <span key="toolName">{`${toolName} `}</span>,
        <span className="tooltip-shortcut" key="tooltip-shortcut">
          {shortcutToString(shortcuts[tool])}
        </span>,
      ]}
      direction={TOOLTIP_PROPS.directions.right}
      className="tool-button__tooltip"
      arrowSize={TOOLTIP_PROPS.arrowSize}
      padding={TOOLTIP_PROPS.padding}
      hoverDelay={TOOLTIP_PROPS.delay}
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
  toolName: PropTypes.string.isRequired,
};
