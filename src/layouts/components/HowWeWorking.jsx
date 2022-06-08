import React from 'react';
import Container from '../Container';
import Investigation from '../../assets/img/icons/Investigation.svg';
import Development from '../../assets/img/icons/Development.svg';
import Create from '../../assets/img/icons/Create.svg';

export default function HowWeWorking() {
  return (
    <Container size="xxl">
      <div className="l-working vh">
        <div className="l-working-left">
          <h2 className="l-working-title l-title">¿Cómo trabajamos?</h2>
          <p>Estamos en un mundo virtualizado donde el usuario busca todo con mayor rapidez y seguridad.</p>
          <p>Por ello, nuestro enfoque esta basado en el aprendizaje, optimización y creación constante de soluciones.</p>
        </div>
        <div className="l-working-right">
          <ul className="l-working-nav">
            <li className="l-working-item">
              <figure className="l-working-figure">
                <img src={Investigation} alt="icon investigation" />
              </figure>
              <div className="l-working-item__content">
                <h3>Investigamos</h3>
                <p>Realizamos investigación de negocio, competencia y genreación de estrategias</p>
              </div>
            </li>
            <li className="l-working-item">
              <figure className="l-working-figure">
                <img src={Development} alt="icon development" />
              </figure>
              <div className="l-working-item__content">
                <h3>Desarrollamos</h3>
                <p>Se realiza el proceso interno de diseño y desarrollo de acuerdo a los hitos establecidos</p>
              </div>
            </li>
            <li className="l-working-item">
              <figure className="l-working-figure">
                <img src={Create} alt="icon create" />
              </figure>
              <div className="l-working-item__content">
                <h3>Creamos</h3>
                <p>Creamos el activo digital que cubrirá las necesidades de tu negocio y lo impulsará</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
