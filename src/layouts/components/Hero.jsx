import React from 'react';

export default function Hero() {
  return (
    <div id="hero" className="l-hero vh">
      <div className="l-hero-container">
        <div className="l-hero-into">
          <h3 className="l-hero-into__text">
            Do it great
          </h3>
          <div className="into">
            <hgroup>
              <h1>D</h1>
              <h2>ideas en soluciones digitales</h2>
            </hgroup>
            <p>Somos una empresa de desarrollo digital, que combina el diseño y el software para crear increíbles productos digitales.</p>
          </div>
          <button className="btn">Contactar</button>
        </div>
        <div className="l-hero-video"></div>
      </div>
    </div>
  );
}
