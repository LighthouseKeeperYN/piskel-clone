import React, { useContext, useState } from 'react';

import './SaveModal.scss';

import { encodeFrame } from '../../../../shared/utilities';

import DbStorageContext from '../../../../context/dbStorage/dbStorageContext';
import FramePanelContext from '../../../../context/framePanel/framePanelContext';
import MenuPanelContext from '../../../../context/menuPanel/menuPanelContext';

function SaveModal() {
  const { projects, currentProject, addProject, updateProject } = useContext(DbStorageContext);
  const { frameCollection } = useContext(FramePanelContext);
  const { frameRate, pixelSize, toggleSaveModal } = useContext(MenuPanelContext);

  const [name, setName] = useState(currentProject?.name);
  const writeValue = (e) => setName(e.target.value);

  const closeModal = (e) => {
    if (e.target === e.currentTarget) toggleSaveModal();
  };

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
    if (!currentProject) return true;
    return projects.every((project) => project._id !== currentProject._id);
  };

  return (
    <div className="save-modal-wrapper" onClick={closeModal}>
      <div className="save-modal-form-wrapper">
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
