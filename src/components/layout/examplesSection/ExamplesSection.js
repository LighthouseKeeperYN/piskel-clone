import React from 'react';

import './examplesSection.scss';

const exampleImgs = [
  require('./assets/sprite-example-1.gif'),
  require('./assets/sprite-example-2.gif'),
  require('./assets/sprite-example-3.gif'),
  require('./assets/sprite-example-4.gif'),
  require('./assets/sprite-example-5.gif'),
];

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
