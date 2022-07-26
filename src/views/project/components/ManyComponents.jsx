import React from 'react';
import '../../../assets/sass/weld_bear.scss';
import illustration from '../../../assets/img/illustration/illustration.svg';
import illustration2 from '../../../assets/img/illustration/illustration2.svg';
import traced from '../../../assets/img/icons/traced.svg';

export const Hero = ({title, description, imageSmall}) => (
  <div className="weldBear-hero snap-start vh">
    <figure className="weldBear-figure">
      <img src={imageSmall} alt={title} />
    </figure>
    <div className="weldBear-hero-right">
      <h1 className="weldBear-title">{title}</h1>
      <p>{description}</p>
    </div>
  </div>
);

export const Box2 = ({problems, goals}) => (
  <div className="weldBear-row box2 snap-start vh">
    <div className="weldBear-column">
      <h2 className="l-title">Problema</h2>
      <p>{problems}</p>
    </div>
    <div className="weldBear-column">
      <h2 className="l-title">Metas</h2>
      <p>{goals}</p>
    </div>
  </div>
);

export const Box3 = ({title}) => (
  <div className="weldBear-row box3 snap-start vh">
    <div className="weldBear-column">
      <h2 className="l-title">Proceso de diseño</h2>
      <p>Tratamos de buscar un balance entre lo que quiere lograr {title} como organización y lo que buscan los usuarios.</p>
      <p>El tono de comunicación, los colores que representan, los flujos, la arquitectura está diseñada para la mejor experiencia de uso y adquirir el conocimiento que imparten.</p>
    </div>
    <div className="weldBear-column">
      <figure className="weldBear-figure">
        <img src={illustration} alt={title + "+illustration"} />
      </figure>
    </div>
  </div>
);

export const Box4 = ({title, development}) => (
  <div className="weldBear-row box4 snap-start vh">
    <div className="weldBear-column">
      <h2 className="l-title">Proceso de desarrollo</h2>
      <p>Como todo producto, primero se logra entender cual es el mejor proceso con el que podemos resolver el problema y crear la solución adecuada.</p>
      <p>
        Como es un LMS, se buscó maximizar recursos y ser eficientes, por ello se usó {development?.map(tools => development.length > 2 ? tools+', ' : tools ).slice(0, development.length - 1)} y {development[development.length - 1]}</p>
    </div>
    <div className="weldBear-column">
      <figure className="weldBear-figure">
        <img src={illustration2} alt={title + "+illustration-dev"} />
      </figure>
    </div>
  </div>
);

export const Box5 = ({title, imageLarge}) => (
  <div className="weldBear-row box5 snap-start vh">
    <div className="weldBear-column">
      <figure className="weldBear-figure">
        <img src={imageLarge} alt={title + '.dev'} />
      </figure>
    </div>
  </div>
);

export const Box6 = () => (
  <div className="weldBear-row box6 snap-start vh">
    <div className="weldBear-column">
      <figure className="weldBear-figure">
        <img src={traced} alt="traced" />
      </figure>
    </div>
    <div className="weldBear-column description">
      <p className="weldBear-description">Altamente recomendados, llevo más de un proyectos trabajando con ellos y digo trabajando con ellos porque no solo hacen lo que tú le pides, sino que también aportan ideas de valor a tu proyecto. Soy de Puerto Rico y aunque estamos a distancia se siente como si estuviesen aquí. Responsables, atentos y comprometidos con su trabajo y el proyecto que les presentes. De verdad, son tremendo equipo, de confiar. Si tienes un proyectos que desees trabajar, esta es la gente indicada, eternamente agradecido.</p>
      <div className="weldBear-client">
        <h3>Wilmer Blasini</h3>
        <p>CEO & Founder de Weld bear</p>
      </div>
    </div>
    <div className="weldBear-column">
      <figure className="weldBear-figure">
        <img src={traced} alt="traced2" />
      </figure>
    </div>
  </div>
);