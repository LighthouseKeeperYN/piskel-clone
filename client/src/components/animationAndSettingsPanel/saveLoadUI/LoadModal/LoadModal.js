import React, { useContext, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';

import './loadModal.scss';

import DbStorageContext from '../../../../context/dbStorage/dbStorageContext';
import AnimationAndSettingsPanelContext from '../../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function LoadModal() {
  const { toggleLoadModal } = useContext(AnimationAndSettingsPanelContext);
  const { projects } = useContext(DbStorageContext);

  console.log(projects);

  const modalRef = useRef(null);
  useOnClickOutside(modalRef, toggleLoadModal);

  return (
    <div className="load-modal-wrapper">
      <div className="load-modal" ref={modalRef}>
        {projects.map((project) => (
          <div className="load-cell" key={project.name}>
            <p>{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadModal;
