import React from 'react';


import './titleSection.scss';

import CreateSpriteButton from '../../buttons/createSpriteButton/CreateSpriteButton';

const appViewImg = require('./app-view.png');

function TitleSection() {
  return (
    <section className="landing-title-section">
      <div className="title-block">
        <h2 className="title-block__title">Piskel-clone</h2>
        <p className="title-block__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid obcaecati, beatae
          tempora rem qui distinctio quasi in non numquam asperiores debitis iste ea illum
          voluptatem ipsa error eos magni.
        </p>

          <CreateSpriteButton />

      </div>
      <img src={appViewImg} alt="app-view" />
    </section>
  );
}

export default TitleSection;
