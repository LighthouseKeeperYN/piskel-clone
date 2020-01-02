import React from 'react';

import './featuresSection.scss';

const featureImgs = [
  require('./assets/feature-1.png'),
  require('./assets/feature-2.png'),
  require('./assets/feature-3.png'),
  require('./assets/feature-4.png'),
  require('./assets/feature-5.png')
];

function FeaturesSection() {
  return (
    <section className="landing-features-section">
      <h4 className="features-title">Implemented features</h4>
      <div className="feature-imgs">
        {featureImgs.map((img, index) => (
          <img
            className="feature-imgs__img"
            src={img}
            alt={`feature-${index + 1}`}
            key={`feature-${index}`}
          ></img>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
