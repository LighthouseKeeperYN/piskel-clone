import React from 'react';

import './landing.scss';

import TitleSection from '../../layout/titleSection/TitleSection';
import ExamplesSection from '../../layout/examplesSection/ExamplesSection';
import FeaturesSection from '../../layout/featuresSection/FeaturesSection';
import AboutSection from '../../layout/aboutSection/AboutSection';

function Landing() {
  return (
    <div className="landing-wrapper">
      <TitleSection />
      <ExamplesSection />
      <FeaturesSection />
      <AboutSection />
    </div>
  );
}

export default Landing;
