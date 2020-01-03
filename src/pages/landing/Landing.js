import React from 'react';

import './landing.scss';

import TitleSection from '../../components/layout/titleSection/TitleSection';
import ExamplesSection from '../../components/layout/examplesSection/ExamplesSection';
import FeaturesSection from '../../components/layout/featuresSection/FeaturesSection';
import AboutSection from '../../components/layout/aboutSection/AboutSection';

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
