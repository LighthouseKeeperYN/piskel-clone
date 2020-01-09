import React, { Fragment, useRef, useContext } from 'react';
import useOnClickOutside from 'use-onclickoutside';

import './customizeShortcutsModal.scss';

import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

import { shortcutToString } from '../../../shared/utilities';

import CustomizeShortcutsCell from './CustomizeShortcutsCell';
import RestoreDefaultShortcutsButton from './RestoreDefaultShortcutsButton';

function CustomizeShortcutsModal() {
  const { shortcuts, shortcutsModalVisibility, toggleShortcutsModalVisibility } = useContext(
    ShortcutsContext,
  );

  const ref = useRef(null);
  const dismissModal = () => {
    if (shortcutsModalVisibility) toggleShortcutsModalVisibility();
  };
  useOnClickOutside(ref, dismissModal);

  return (
    <Fragment>
      {shortcutsModalVisibility && (
        <div className="customize-shortcuts-modal-wrapper">
          <div className="customize-shortcuts-modal" ref={ref}>
            {Object.keys(shortcuts).map((action) => (
              <CustomizeShortcutsCell
                action={action}
                shortcut={shortcutToString(shortcuts[action])}
                key={action}
              />
            ))}
            <RestoreDefaultShortcutsButton />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default CustomizeShortcutsModal;
