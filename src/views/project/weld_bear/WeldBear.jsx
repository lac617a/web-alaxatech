import React from 'react';
import '../../../assets/sass/weld_bear.scss';
import Project from '../../../assets/img/portfolio/large/project.png';
import ProjectFullyn from '../../../assets/img/portfolio/large/welbearfullyn.png';
import illustration from '../../../assets/img/illustration/illustration.svg';
import illustration2 from '../../../assets/img/illustration/illustration2.svg';
import traced from '../../../assets/img/icons/traced.svg';

export const WeldBearHero = () => (
  <div className="weldBear-hero snap-start vh">
    <figure className="weldBear-figure">
      <img src={Project} alt="weldBear" />
    </figure>
    <div className="weldBear-hero-right">
      <h1 className="weldBear-title">Weld Bear International</h1>
      <p>Weld Bear International es una academia de soldadura ubicada en Ponce, Puerto Rico. Ellos comenzaron como una pequeña tienda de artículos de soldadura y poco a poco fueron expandiendo sus áreas hasta convertirse en una de las escuelas mas reconocidas de Puerto Rico en el rubro. </p>
    </div>
  </div>
);

export const WeldBearBox2 = () => (
  <div className="weldBear-row box2 snap-start vh">
    <div className="weldBear-column">
      <h2 className="l-title">Problema</h2>
      <p>En Weld Bear International contamos con una afluencia considerable de estudiantes que llegan semana tras semana para capacitarse en distintos niveles de soldadura, y se necesitaba una forma de centralizar la matrícula de estudiantes, el pago de los cursos y las calificaciones. Además, por la pandemia nació la necesidad de impartir clases online.</p>
    </div>
    <div className="weldBear-column">
      <h2 className="l-title">Metas</h2>
      <p>Nuestro servicio ha sido la elaboración de un Learning Management System para que sus estudiantes puedan iniciarse en la soldadura mediante el Curso Básico Online. En ella pueden ver sus clases, tomar sus exámenes, registrar sus pagos, todo esto a distancia. </p>
    </div>
  </div>
);

export const WeldBearBox3 = () => (
  <div className="weldBear-row box3 snap-start vh">
    <div className="weldBear-column">
      <h2 className="l-title">Proceso de diseño</h2>
      <p>Tratamos de buscar un balance entre lo que quiere lograr Weld Bear como organización y lo que buscan los usuarios.</p>
      <p>El tono de comunicación, los colores que representan, los flujos, la arquitectura está diseñada para la mejor experiencia de uso y adquirir el conocimiento que imparten.</p>
    </div>
    <div className="weldBear-column">
      <figure className="weldBear-figure">
        <img src={illustration} alt="weldBear" />
      </figure>
    </div>
  </div>
);

export const WeldBearBox4 = () => (
  <div className="weldBear-row box4 snap-start vh">
    <div className="weldBear-column">
      <h2 className="l-title">Proceso de desarrollo</h2>
      <p>Como todo producto, primero se logra entender cual es el mejor proceso con el que podemos resolver el problema y crear la solución adecuada.</p>
      <p>Como es un LMS, se buscó maximizar recursos y ser eficientes, por ello se usó Wordpress, Vue.js y Larabel.</p>
    </div>
    <div className="weldBear-column">
      <figure className="weldBear-figure">
        <img src={illustration2} alt="weldBear2" />
      </figure>
    </div>
  </div>
);

export const WeldBearBox5 = () => (
  <div className="weldBear-row box5 snap-start vh">
    <div className="weldBear-column">
      <figure className="weldBear-figure">
        <img src={ProjectFullyn} alt="weldBear2" />
      </figure>
    </div>
  </div>
);

export const WeldBearBox6 = () => (
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