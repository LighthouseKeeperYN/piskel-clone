import React from 'react';

import './landing.scss';

import TitleSection from '../../layout/titleSection/TitleSection';
import ExamplesSection from '../../layout/examplesSection/ExamplesSection';
import FeaturesSection from '../../layout/featuresSection/FeaturesSection';

function Landing() {
  return (
    <div className="landing-wrapper">
      <TitleSection />
      <ExamplesSection />
      <FeaturesSection />

      <section className="landing-about-section">
        <div className="landing-about-me"></div>
        <div className="landing-contacts"></div>
      </section>
    </div>
  );
}

export default Landing;
