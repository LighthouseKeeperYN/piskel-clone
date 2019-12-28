import React, { useRef, useState, useContext, useEffect } from 'react';
import EventListener from 'react-event-listener';

import './canvas.scss';

import { DEFAULT_CANVAS_SIZE } from '../../shared/constants';
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
    setColorSecondary,
  } = useContext(ToolPanelContext);
  const { pixelSize } = useContext(AnimationAndSettingsPanelContext);
  const { isDrawing, setCanvasCtx, setDrawing } = useContext(CanvasContext);
  const { frameCollection, currentFrame, updateFrame, addFrame } = useContext(FramePanelContext);

  const [prevMousePosition, setPrevMousePosition] = useState(null);

  const canvasRef = useRef(null);

  useEffect(() => {
    setCanvasCtx(canvasRef.current.getContext('2d'));
    const ctx = canvasRef.current.getContext('2d');
    addFrame(ctx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
  }, []);

  function handleDrawingOnCanvas(e) {
    const colorToApply = e.buttons === 1 ? colorPrimary : colorSecondary;
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = colorToApply;

    const currMousePosition = { x: e.nativeEvent.layerX, y: e.nativeEvent.layerY };

    setPrevMousePosition(currMousePosition);

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
      setColorSecondary,
    });

    updateFrame(ctx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
  }

  return (
    <canvas
      className="canvas"
      height={DEFAULT_CANVAS_SIZE}
      width={DEFAULT_CANVAS_SIZE}
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
