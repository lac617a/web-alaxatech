import React from 'react';
import Container from '../Container';
import Design from '../../assets/img/icons/Design.svg';
import WebDesign from '../../assets/img/icons/Web-design.svg';
import MovilDesign from '../../assets/img/icons/Movil-design.svg';

import Point from '../../assets/img/vectores/Pointa.svg';
import PointSix from '../../assets/img/vectores/6-points.svg';
import CircleBg from '../../assets/img/vectores/circle-bg.svg';
import Triangle from '../../assets/img/vectores/triangle.svg';
import Python from '../../assets/img/vectores/python.svg';
import Cruz from '../../assets/img/vectores/cruz.svg';
import PointTwenteEight from '../../assets/img/vectores/28-x.svg';

export default function Service() {
  return (
    <Container size="xxl">
      <div className="l-service vh" id="service">
        <div className="l-service-svg">
          <img src={Point} alt="vector point" />
          <img src={PointSix} alt="vector points six" />
          <img src={CircleBg} alt="vector circle bg" />
          <img src={Triangle} alt="vector triangle" />
          <img src={Python} alt="vector python" />
          <img src={Cruz} alt="vector cruz" />
          <img src={PointTwenteEight} alt="vector point twente eight" />
        </div>
        <Container size="xxl">
          <div className="l-service-wrap">
            <h2 className="l-service-title l-title">Servicios</h2>
            <div className="l-service-box">
              <div className="l-service-card">
                <figure className="l-service-card__header">
                  <img src={Design} alt="vector Design" loading="lazy" />
                </figure>
                <div className="l-service-card__content">
                  <h3>UI/UX Design</h3>
                  <p>Diseñamos productos intuitivos para tus usuarios en base a  Investigación, arquitectura de la información, usabilidad, diseño de interfaces y prototipado.</p>
                </div>
              </div>
              <div className="l-service-card">
                <figure className="l-service-card__header">
                  <img src={WebDesign} alt="vector web design" loading="lazy" />
                </figure>
                <div className="l-service-card__content">
                  <h3>Desarrollo web</h3>
                  <p>Realizamos páginas web, LMS (Learning management system), CRM (Customer relationship management), ERP (Enterprise Resource Planning) y ecommerce.</p>
                </div>
              </div>
              <div className="l-service-card">
                <figure className="l-service-card__header">
                  <img src={MovilDesign} alt="vector movil design" loading="lazy" />
                </figure>
                <div className="l-service-card__content">
                  <h3>Desarrollo móvil</h3>
                  <p>Desarrollamos aplicativos de fácil acceso, sofisticado y atractivo para móviles Android y iOS, aplicaciónes híbridas y PWA (Progressive web apps).</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Container>
  )
}
