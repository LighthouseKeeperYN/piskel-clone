import React from 'react';

import './landing.scss';

import TitleSection from '../../components/layout/titleSection/TitleSection';
import ExamplesSection from '../../components/layout/examplesSection/ExamplesSection';
import AboutSection from '../../components/layout/aboutSection/AboutSection';

function Landing() {
  return (
    <div className="landing-wrapper">
      <TitleSection />
      <ExamplesSection />
      <AboutSection />
    </div>
  );
}

export default Landing;
