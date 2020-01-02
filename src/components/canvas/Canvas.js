import React, { useRef, useState, useContext, useEffect } from 'react';
import EventListener from 'react-event-listener';

import './canvas.scss';

import {
  DEFAULT_CANVAS_SIZE,
  TRANSPARENCY_COLOR,
  BLACK_COLOR_REPLACEMENT,
} from '../../shared/constants';

import applyToolToCanvas from './functionality/applyToolToCanvas';

import ToolPanelContext from '../../context/toolPanel/toolPanelContext';
import CanvasContext from '../../context/canvas/canvasContext';
import FramePanelContext from '../../context/framePanel/framePanelContext';
import AnimationAndSettingsPanelContext from '../../context/animationAndSettingsPanel/animationAndSettingsPanelContext';

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
  const { setCanvasCtx, setDrawing, isDrawing } = useContext(CanvasContext);
  const { updateFrame, addFrame } = useContext(FramePanelContext);

  const [prevMousePosition, setPrevMousePosition] = useState(null);

  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    setCanvasCtx(ctx);
    const userData = JSON.parse(localStorage.getItem('piskel-clone-lhk'));
    if (!userData) addFrame(ctx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
    // eslint-disable-next-line
  }, []);

  function handleDrawingOnCanvas(e) {
    const colorToApply = e.buttons === 1 ? colorPrimary : colorSecondary;
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = colorToApply === TRANSPARENCY_COLOR ? BLACK_COLOR_REPLACEMENT : colorToApply;

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
      isDrawing,
    });

    updateFrame(ctx.getImageData(0, 0, DEFAULT_CANVAS_SIZE, DEFAULT_CANVAS_SIZE));
  }

  return (
    <div className="workbench" onContextMenu={(e) => e.preventDefault()}>
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
          if (e.buttons) {
            setDrawing(true);
            handleDrawingOnCanvas(e);
          } else setPrevMousePosition(null);
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
    </div>
  );
}

export default Canvas;
