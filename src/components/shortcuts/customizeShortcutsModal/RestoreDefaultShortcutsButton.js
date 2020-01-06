import React, { useContext } from 'react';

import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';

function RestoreDefaultShortcutsButton() {
  const { setAllShortcuts } = useContext(ShortcutsContext);

  return (
    <button className="restore-default-shortcuts-button" onClick={() => setAllShortcuts()}>
      Restore default shortcuts
    </button>
  );
}

export default RestoreDefaultShortcutsButton;
