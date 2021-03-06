import React, { useContext, useEffect } from 'react';

import './loadModal.scss';

import { decodeFramesAll } from '../../../../shared/utilities';

import DbStorageContext from '../../../../context/dbStorage/dbStorageContext';
import FramePanelContext from '../../../../context/framePanel/framePanelContext';
import MenuPanelContext from '../../../../context/menuPanel/menuPanelContext';

function LoadModal() {
  const { addFrame, clearFrames } = useContext(FramePanelContext);
  const { toggleLoadModal, setPixelSize, setFrameRate } = useContext(MenuPanelContext);
  const { projects, getProjects, setCurrentProject, deleteProject } = useContext(DbStorageContext);

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  const closeModal = (e) => {
    if (e.target === e.currentTarget) toggleLoadModal();
  };

  const loadProject = (project) => {
    const { frameCollection, pixelSize, frameRate } = project.projectData;
    clearFrames();
    setPixelSize(pixelSize);
    setFrameRate(frameRate);
    decodeFramesAll(frameCollection).then((frames) => frames.forEach((frame) => addFrame(frame)));
    setCurrentProject(project);
    toggleLoadModal();
  };

  return (
    <div className="load-modal-wrapper" onClick={closeModal}>
      <div className="load-modal">
        {projects.map((project, index) => (
          <div className="load-cell" key={index} onClick={() => loadProject(project)}>
            <p>{project.name}</p>
            <button
              className="load-delete-button"
              onClick={(e) => {
                e.stopPropagation();
                deleteProject(project._id);
              }}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadModal;
