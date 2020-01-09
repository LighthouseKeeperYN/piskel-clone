import React, { useContext, useRef, useEffect } from 'react';
import useOnClickOutside from 'use-onclickoutside';

import './loadModal.scss';

import DbStorageContext from '../../../../context/dbStorage/dbStorageContext';
import AnimationAndSettingsPanelContext from '../../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function LoadModal() {
  const { toggleLoadModal } = useContext(AnimationAndSettingsPanelContext);
  const { projects, getProjects } = useContext(DbStorageContext);

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  const modalRef = useRef(null);
  useOnClickOutside(modalRef, toggleLoadModal);

  return (
    <div className="load-modal-wrapper">
      <div className="load-modal" ref={modalRef}>
        {projects.map((project, index) => (
          <div className="load-cell" key={index}>
            <p>{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadModal;
