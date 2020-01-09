import React from 'react';

import './SaveModal.scss';

function SaveModal() {
  return (
    <div className="save-modal-wrapper">
      <div className="save-modal-form-wrapper">
        <h2 className="save-modal-title">Save project</h2>
        <form className="save-modal-form">
          <label htmlFor="projectName">Project name</label>
          <input className="save-modal-field" id="projectName" type="text" name="name" required />
          <input className="save-modal-button" type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}

export default SaveModal;
