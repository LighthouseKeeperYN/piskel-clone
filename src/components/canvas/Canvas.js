import React, { useRef, useState, useContext } from 'react';

import './canvas.scss';

import { getMousePositionOnCanvas} from '../../shared/utilities';
import applyToolToCanvas from './functionality/applyToolToCanvas';

import ToolPanelContext from '../../context/toolPanel/toolPanelContext';
import AnimationAndSettingsPanelContext from '../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

function Canvas() {
  const { strokeSize, toolType, colorPrimary, colorSecondary } = useContext(ToolPanelContext);
  const { pixelSize } = useContext(AnimationAndSettingsPanelContext);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [prevMousePosition, setPrevMousePosition] = useState(null);

  const canvasRef = useRef(null);

  function handleDrawingOnCanvas(e) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = e.buttons === 1 ? colorPrimary : colorSecondary;

    const currMousePosition = getMousePositionOnCanvas(canvas.getBoundingClientRect(), e);

    setPrevMousePosition(currMousePosition);

    applyToolToCanvas(toolType, ctx, pixelSize, currMousePosition, prevMousePosition);
  }

  return (
    <canvas
      className="canvas"
      height={512}
      width={512}
      ref={canvasRef}
      onMouseDown={(e) => {
        setIsMouseDown(true);
        handleDrawingOnCanvas(e);
      }}
      onMouseMove={(e) => {
        if (isMouseDown) handleDrawingOnCanvas(e);
      }}
      onMouseUp={() => {
        setIsMouseDown(false);
        setPrevMousePosition(null);
      }}
      onContextMenu={(e) => e.preventDefault()}
    ></canvas>
  );
}

export default Canvas;
