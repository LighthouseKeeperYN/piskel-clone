import React, { useContext, useRef, useEffect } from 'react';
import useOnClickOutside from 'use-onclickoutside';

import './loadModal.scss';

import { decodeFramesAll } from '../../../../shared/utilities';

import DbStorageContext from '../../../../context/dbStorage/dbStorageContext';
import FramePanelContext from '../../../../context/framePanel/framePanelContext';
import AnimationAndSettingsPanelContext from '../../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function LoadModal() {
  const { addFrame, clearFrames } = useContext(FramePanelContext);
  const { toggleLoadModal, setPixelSize, setFrameRate } = useContext(
    AnimationAndSettingsPanelContext
  );
  const { projects, getProjects } = useContext(DbStorageContext);

  useEffect(() => {
    getProjects();
    console.log(projects);
    // eslint-disable-next-line
  }, []);

  const modalRef = useRef(null);
  useOnClickOutside(modalRef, toggleLoadModal);

  const loadProject = (project) => {
    const { frameCollection, pixelSize, frameRate } = project.projectData;
    clearFrames();
    setPixelSize(pixelSize);
    setFrameRate(frameRate);
    decodeFramesAll(frameCollection).then((frames) => frames.forEach((frame) => addFrame(frame)));
    toggleLoadModal();
  };

  return (
    <div className="load-modal-wrapper">
      <div className="load-modal" ref={modalRef}>
        {projects.map((project, index) => (
          <div className="load-cell" key={index} onClick={() => loadProject(project)}>
            <p>{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadModal;
