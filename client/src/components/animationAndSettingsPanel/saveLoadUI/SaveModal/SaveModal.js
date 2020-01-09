import React, { useContext, useState } from 'react';

import './SaveModal.scss';

import { encodeFrame } from '../../../../shared/utilities';

import DbStorageContext from '../../../../context/dbStorage/dbStorageContext';
import FramePanelContext from '../../../../context/framePanel/framePanelContext';
import AnimationAndSettingsPanelContext from '../../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function SaveModal() {
  const { addProject } = useContext(DbStorageContext);
  const { frameCollection } = useContext(FramePanelContext);
  const { frameRate, pixelSize, toggleSaveModal } = useContext(AnimationAndSettingsPanelContext);

  const [name, setName] = useState(null);
  const writeValue = (e) => setName(e.target.value);

  const execSaveProject = (e) => {
    e.preventDefault();

    const encodedFrames = frameCollection.map((frame) => encodeFrame(frame));

    addProject({ name, projectData: { frameCollection: encodedFrames, frameRate, pixelSize } });
    toggleSaveModal();
  };

  return (
    <div className="save-modal-wrapper">
      <div className="save-modal-form-wrapper">
        <h2 className="save-modal-title">Save project</h2>
        <form className="save-modal-form" onSubmit={execSaveProject}>
          <label htmlFor="projectName">Project name</label>
          <input
            className="save-modal-field"
            id="projectName"
            type="text"
            name="name"
            required
            onChange={writeValue}
          />
          <input className="save-modal-button" type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}

export default SaveModal;
