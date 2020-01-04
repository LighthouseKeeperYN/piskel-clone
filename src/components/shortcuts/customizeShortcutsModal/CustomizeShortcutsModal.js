import React, { Fragment, useRef, useContext } from 'react';
import useOnClickOutside from 'use-onclickoutside';

import './customizeShortcutsModal.scss';

import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

function CustomizeShortcutsModal() {
  const { shortcutsModalVisibility, toggleShortcutsModalVisibility } = useContext(ShortcutsContext);

  const ref = useRef(null);
  const dismissModal = (e) => {
    console.log(e);
    if (shortcutsModalVisibility) toggleShortcutsModalVisibility();
  };
  useOnClickOutside(ref, dismissModal);

  return (
    <Fragment>
      {shortcutsModalVisibility && (
        <div className="customize-shortcuts-modal-wrapper">
          <div className="customize-shortcuts-modal" ref={ref}></div>
        </div>
      )}
    </Fragment>
  );
}

export default CustomizeShortcutsModal;
