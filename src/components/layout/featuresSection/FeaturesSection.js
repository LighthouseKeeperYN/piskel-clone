import React from 'react';

import './featuresSection.scss';

const img1 = require('./assets/feature-1.png');
const img2 = require('./assets/feature-2.png');
const img3 = require('./assets/feature-3.png');
const img4 = require('./assets/feature-4.png');
const img5 = require('./assets/feature-5.png');

const featureImgs = [img1, img2, img3, img4, img5];

function FeaturesSection() {
  return (
    <section className="landing-features-section">
      <div className="landing-features-section__wrapper">
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
      </div>
    </section>
  );
}

export default FeaturesSection;
