import React from 'react';

import './examplesSection.scss';

const img1 = require('./assets/sprite-example-1.gif');
const img2 = require('./assets/sprite-example-2.gif');
const img3 = require('./assets/sprite-example-3.gif');
const img4 = require('./assets/sprite-example-4.gif');
const img5 = require('./assets/sprite-example-5.gif');

const exampleImgs = [img1, img2, img3, img4, img5];

function ExamplesSection() {
  return (
    <section className="landing-examples-section">
      <h4 className="examples-title">Example sprites</h4>
      <div className="example-sprites">
        {exampleImgs.map((img, index) => (
          <img
            className="example-sprites__img"
            src={img}
            alt={`example-sprite-${index + 1}`}
            key={`example-sprite-${index}`}
          ></img>
        ))}
      </div>
    </section>
  );
}

export default ExamplesSection;
