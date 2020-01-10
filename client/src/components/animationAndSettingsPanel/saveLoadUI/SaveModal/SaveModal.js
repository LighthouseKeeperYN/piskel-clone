import React, { useContext, useState, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';

import './SaveModal.scss';

import { encodeFrame } from '../../../../shared/utilities';

import DbStorageContext from '../../../../context/dbStorage/dbStorageContext';
import FramePanelContext from '../../../../context/framePanel/framePanelContext';
import AnimationAndSettingsPanelContext from '../../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function SaveModal() {
  const { projects, currentProject, addProject, updateProject } = useContext(DbStorageContext);
  const { frameCollection } = useContext(FramePanelContext);
  const { frameRate, pixelSize, toggleSaveModal } = useContext(AnimationAndSettingsPanelContext);

  const [name, setName] = useState(currentProject?.name);
  const writeValue = (e) => setName(e.target.value);

  const saveCurrentProject = (e) => {
    e.preventDefault();
    const encodedFrames = frameCollection.map((frame) => encodeFrame(frame));
    addProject({ name, projectData: { frameCollection: encodedFrames, frameRate, pixelSize } });
    toggleSaveModal();
  };

  const updateCurrentProject = (e) => {
    e.preventDefault();
    const encodedFrames = frameCollection.map((frame) => encodeFrame(frame));
    updateProject({
      ...currentProject,
      name,
      projectData: { frameCollection: encodedFrames, frameRate, pixelSize }
    });
    toggleSaveModal();
  };

  const isNewProject = () => {
    if (currentProject) return false;
    return projects.every((project) => project._id !== currentProject._id);
  };

  const modalRef = useRef(null);
  useOnClickOutside(modalRef, toggleSaveModal);

  return (
    <div className="save-modal-wrapper">
      <div className="save-modal-form-wrapper" ref={modalRef}>
        <h2 className="save-modal-title">Save project</h2>
        <form
          className="save-modal-form"
          onSubmit={isNewProject() ? saveCurrentProject : updateCurrentProject}
        >
          <label htmlFor="projectName">Project name</label>
          <input
            className="save-modal-field"
            id="projectName"
            type="text"
            name="name"
            defaultValue={currentProject?.name || ''}
            required
            minLength="1"
            maxLength="32"
            onChange={writeValue}
          />
          <input className="save-modal-button" type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}

export default SaveModal;
