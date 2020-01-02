import React from 'react';
import { Link } from 'react-router-dom';

import './landing.scss';

import CreateSpriteButton from '../../buttons/createSpriteButton/CreateSpriteButton';

const appViewImg = require('./assets/app-view.png');
const exampleImgs = [
  require('./assets/example-1.gif'),
  require('./assets/example-2.gif'),
  require('./assets/example-3.png'),
  require('./assets/example-4.gif'),
  require('./assets/example-5.gif')
];

function Landing() {
  return (
    <div className="landing-wrapper">
      <section className="landing-title-section">
        <div className="title-block">
          <h2 className="title-block__title">Piskel-clone</h2>
          <p className="title-block__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid obcaecati,
            beatae tempora rem qui distinctio quasi in non numquam asperiores debitis iste ea illum
            voluptatem ipsa error eos magni.
          </p>
          <Link to="/project">
            <CreateSpriteButton />
          </Link>
        </div>
        <img src={appViewImg} alt="app-view" />
      </section>
      <section className="landing-examples-section">
        <h4 className="examples-title">Example sprites</h4>
        <div className="example-imgs">
          {exampleImgs.map((img, index) => (
            <img
              className="example-imgs__img"
              src={img}
              alt={`example-img-${index + 1}`}
              key={`example-img-${index + 1}`}
            ></img>
          ))}
        </div>
      </section>
      <section className="landing-features-section"></section>
      <section className="landing-about-section">
        <div className="landing-about-me"></div>
        <div className="landing-contacts"></div>
      </section>
    </div>
  );
}

export default Landing;
