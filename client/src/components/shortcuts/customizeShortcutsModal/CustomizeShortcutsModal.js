import React, { Fragment, useContext } from 'react';

import './customizeShortcutsModal.scss';

import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

import { shortcutToString } from '../../../shared/utilities';

import CustomizeShortcutsCell from './CustomizeShortcutsCell';
import RestoreDefaultShortcutsButton from './RestoreDefaultShortcutsButton';

function CustomizeShortcutsModal() {
  const { shortcuts, shortcutsModalVisibility, toggleShortcutsModalVisibility } = useContext(
    ShortcutsContext,
  );

  const closeModal = (e) => {
    if (e.target === e.currentTarget) toggleShortcutsModalVisibility();
  }

  return (
    <Fragment>
      {shortcutsModalVisibility && (
        <div className="customize-shortcuts-modal-wrapper" onClick={closeModal}>
          <div className="customize-shortcuts-modal">
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
