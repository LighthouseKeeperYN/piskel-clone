import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

import {
  LOCAL_STORAGE_KEY,
  DEFAULT_FRAME_RATE,
  DEFAULT_PIXEL_SIZE,
  DEFAULT_COLORS,
  TOOL_TYPES,
  STROKE_SCALES
} from '../../../shared/constants';

import FramePanelContext from '../../../context/framePanel/framePanelContext';
import AuthContext from '../../../context/auth/authContext';
import DbStorageContext from '../../../context/dbStorage/dbStorageContext';
import ToolPanelContext from '../../../context/toolPanel/toolPanelContext';
import ShortcutsContext from '../../../context/shortcuts/shortcutsContext';
import AnimationAndSettingsPanelContext from '../../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function SignUpButton() {
  const { resetFrames } = useContext(FramePanelContext);
  const { logOut } = useContext(AuthContext);
  const { clearProjects } = useContext(DbStorageContext);
  const { setAllShortcuts } = useContext(ShortcutsContext);
  const { setPixelSize, setFrameRate } = useContext(AnimationAndSettingsPanelContext);
  const { setStrokeSize, setColorPrimary, setColorSecondary, setToolType } = useContext(
    ToolPanelContext
  );

  const execLogOut = () => {
    logOut();
    clearProjects();
    resetFrames();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setPixelSize(DEFAULT_PIXEL_SIZE);
    setFrameRate(DEFAULT_FRAME_RATE);
    setStrokeSize(STROKE_SCALES[0]);
    setColorPrimary(DEFAULT_COLORS.primary);
    setColorSecondary(DEFAULT_COLORS.secondary);
    setToolType(TOOL_TYPES.pen);
    setAllShortcuts();
  };

  return (
    <Link to="/">
      <button className="auth-button" onClick={execLogOut}>
        Log out
      </button>
    </Link>
  );
}

export default SignUpButton;
