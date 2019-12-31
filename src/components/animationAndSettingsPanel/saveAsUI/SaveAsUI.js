import React, { useContext } from 'react';
import { saveAs as saveImage } from 'file-saver';

import './saveAs.scss';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

import { imageDataCollectionToAPNG, imageDataCollectionToGif } from '../../../shared/utilities';
import { DEFAULT_CANVAS_SIZE } from '../../../shared/constants';

function SaveAs() {
  const { frameCollection } = useContext(FramePanelContext);
  const { frameRate } = useContext(AnimationAndSettingsPanelContext);

  const saveAsAPNG = () => {
    const image = imageDataCollectionToAPNG({
      frameCollection,
      size: DEFAULT_CANVAS_SIZE,
      frameRate,
    });
    saveImage(image, `${new Date().getTime()}.png`);
  };

  const saveAsGIF = () => {
    const image = imageDataCollectionToGif({
      frameCollection,
      size: DEFAULT_CANVAS_SIZE,
      frameRate,
    });
    console.log(image);
    saveImage(image, `${new Date().getTime()}.gif`);
  };

  return (
    <div className="save-as-wrapper">
      <p>Save as:</p>
      <button className="save-as-button" onClick={saveAsAPNG}>
        APNG
      </button>
      <button className="save-as-button" onClick={saveAsGIF}>
        GIF
      </button>
    </div>
  );
}

export default SaveAs;
