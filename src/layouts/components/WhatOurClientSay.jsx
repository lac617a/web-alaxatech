import React from 'react';
import Review from '../../components/Review';

export default function WhatOurClientSay() {
  return (
    <div className="l-client vh" id="what-our-client-say" data-snap-current="false">
      <div className="l-container-xxl">
        <div className="l-client-header">
          <h2 className="l-client-title l-title">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="l-client-content">
          <Review
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            avatar={require('../../assets/img/portfolio/Image-project.png')} />
          <Review
            clientName="Wilmer Blasini"
            companyName="CEO & Founder de Weld bear"
            description="Altamente recomendados, llevo más de un proyectos trabajando con ellos y digo trabajando con ellos porque aportan ideas de valor a tu proyecto."
            avatar={require('../../assets/img/our-customer/weld-bear.png')} />
          <Review
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            avatar={require('../../assets/img/portfolio/Image-project.png')} />
          <Review
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            avatar={require('../../assets/img/portfolio/Image-project.png')} />
          <Review
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            avatar={require('../../assets/img/portfolio/Image-project.png')} />
        </div>
      </div>
    </div>
  );
}
