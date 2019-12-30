import React from 'react';

import './saveAs.scss';

function SaveAs() {
  return (
    <div className="save-as-wrapper">
      <p>Save as:</p>
      <button class="save-as-button">APNG</button>
      <button class="save-as-button">GIF</button>
    </div>
  );
}

export default SaveAs;
