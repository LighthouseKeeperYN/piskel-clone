import React, { useRef, useState, useContext, useEffect } from 'react';
import EventListener from 'react-event-listener';

import './canvas.scss';

// import { getMousePositionOnCanvas } from '../../shared/utilities';
import applyToolToCanvas from './functionality/applyToolToCanvas';

import ToolPanelContext from '../../context/toolPanel/toolPanelContext';
import AnimationAndSettingsPanelContext from '../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';
import CanvasContext from '../../context/canvas/canvasContext';
import FramePanelContext from '../../context/framePanel/framePanelContext';

function Canvas() {
  const {
    strokeSize,
    toolType,
    colorPrimary,
    colorSecondary,
    setColorPrimary,
    setColorSecondary
  } = useContext(ToolPanelContext);
  const { pixelSize } = useContext(AnimationAndSettingsPanelContext);
  const { isDrawing, setCanvasCtx, setDrawing } = useContext(CanvasContext);
  const { frameCollection, currentFrame, updateFrame } = useContext(FramePanelContext);

  const [prevMousePosition, setPrevMousePosition] = useState(null);

  const canvasRef = useRef(null);

  useEffect(() => {
    setCanvasCtx(canvasRef.current.getContext('2d'));
  }, []);

  function handleDrawingOnCanvas(e) {
    const colorToApply = e.buttons === 1 ? colorPrimary : colorSecondary;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = colorToApply;

    const currMousePosition = { x: e.nativeEvent.layerX, y: e.nativeEvent.layerY };

    setPrevMousePosition(currMousePosition);
    updateFrame(ctx.getImageData(0, 0, 512, 512));

    applyToolToCanvas({
      toolType,
      ctx,
      pixelSize,
      strokeSize,
      currMousePosition,
      prevMousePosition,
      colorToApply,
      e,
      setColorPrimary,
      setColorSecondary
    });
  }

  return (
    <canvas
      className="canvas"
      height={512}
      width={512}
      ref={canvasRef}
      onMouseDown={(e) => {
        setDrawing(true);
        handleDrawingOnCanvas(e);
      }}
      onMouseMove={(e) => {
        if (e.buttons) handleDrawingOnCanvas(e);
        else setPrevMousePosition(null);
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <EventListener
        target="window"
        onMouseUp={() => {
          setDrawing(false);
        }}
      />
    </canvas>
  );
}

export default Canvas;
