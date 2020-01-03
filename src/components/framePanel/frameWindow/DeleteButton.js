import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-tooltip-lite';

import { DEFAULT_CANVAS_SIZE, TOOLTIP_PROPS, SHORTCUT_ACTIONS } from '../../../shared/constants';
import { tooltipShortcutTemplate } from '../../../shared/utilities';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import CanvasContext from '../../../context/canvas/canvasContext';
import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

function CopyButton({ index }) {
  const { deleteFrame } = useContext(FramePanelContext);

  const { canvasCtx } = useContext(CanvasContext);
  const { shortcuts } = useContext(ShortcutsContext);

  const handleFrameDeletion = (e) => {
    e.stopPropagation();
    canvasCtx.clearRect(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE);
    deleteFrame(index);
  };

  return (
    <div className="frame-delete__wrapper">
      <Tooltip
        content={[
          <span key="copyFrame">Delete this frame </span>,
          <span className="tooltip-shortcut" key="tooltip-shortcut">
            {tooltipShortcutTemplate(shortcuts, SHORTCUT_ACTIONS.deleteCurrentFrame)}
          </span>,
        ]}
        direction={TOOLTIP_PROPS.directions.right}
        arrowSize={TOOLTIP_PROPS.arrowSize}
        padding={TOOLTIP_PROPS.padding}
        hoverDelay={TOOLTIP_PROPS.delay}
      >
        <div className="frame-delete" onClick={handleFrameDeletion}></div>
      </Tooltip>
    </div>
  );
}

CopyButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CopyButton;
