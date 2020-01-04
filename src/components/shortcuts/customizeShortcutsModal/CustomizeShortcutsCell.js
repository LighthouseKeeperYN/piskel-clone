import React from 'react'
import PropTypes from 'prop-types';

function CustomizeShortcutsCell({action, shortcut}) {
  return (
    <div className="customize-shortcuts-cell">
      <p className="customize-shortcuts-cell__action">{action}:</p>
      <p className="customize-shortcuts-cell__shortcut">{shortcut}</p>
    </div>
  )
}

export default CustomizeShortcutsCell

CustomizeShortcutsCell.propTypes = {
  action: PropTypes.string.isRequired,
  shortcut: PropTypes.string.isRequired,
}
