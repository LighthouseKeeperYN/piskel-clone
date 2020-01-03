import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-tooltip-lite';

import { TOOLTIP_PROPS, SHORTCUT_ACTIONS } from '../../../shared/constants';
import { tooltipShortcutTemplate } from '../../../shared/utilities';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

function CopyButton({ index }) {
  const { duplicateFrame } = useContext(FramePanelContext);

  const { shortcuts } = useContext(ShortcutsContext);

  const handleFrameDuplication = (e) => {
    e.stopPropagation();
    duplicateFrame(index);
  };

  return (
    <div className="frame-duplicate__wrapper">
      <Tooltip
        content={[
          <span key="copyFrame">Copy this frame </span>,
          <span className="tooltip-shortcut" key="tooltip-shortcut">
            {tooltipShortcutTemplate(shortcuts, SHORTCUT_ACTIONS.copyCurrentFrame)}
          </span>,
        ]}
        direction={TOOLTIP_PROPS.directions.right}
        arrowSize={TOOLTIP_PROPS.arrowSize}
        padding={TOOLTIP_PROPS.padding}
        hoverDelay={TOOLTIP_PROPS.delay}
      >
        <div className="frame-duplicate" onClick={handleFrameDuplication}></div>
      </Tooltip>
    </div>
  );
}

CopyButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CopyButton;
