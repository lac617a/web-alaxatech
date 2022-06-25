import React from 'react';
import '../../../assets/sass/weld_bear.scss';
import Project from '../../../assets/img/portfolio/large/project.png';

export default function WeldBear() {
  return (
    <div className="weldBear">
      <div className="weldBear-hero snap-start vh">
        <figure className="weldBear-figure">
          <img src={Project} alt="weldBear" />
        </figure>
        <div className="weldBear-hero-right">
          <h1 className="weldBear-title">Weld Bear International</h1>
          <p>Weld Bear International es una academia de soldadura ubicada en Ponce, Puerto Rico. Ellos comenzaron como una pequeña tienda de artículos de soldadura y poco a poco fueron expandiendo sus áreas hasta convertirse en una de las escuelas mas reconocidas de Puerto Rico en el rubro. </p>
        </div>
      </div>
      <div className="weldBear-box2 snap-start vh">
        <div className="weldBear-box2-left">
          <h2 className="l-title">Problema</h2>
          <p>En Weld Bear International contamos con una afluencia considerable de estudiantes que llegan semana tras semana para capacitarse en distintos niveles de soldadura, y se necesitaba una forma de centralizar la matrícula de estudiantes, el pago de los cursos y las calificaciones. Además, por la pandemia nació la necesidad de impartir clases online.</p>
        </div>
        <div className="weldBear-box2-right">
          <h2 className="l-title">Metas</h2>
          <p>Nuestro servicio ha sido la elaboración de un Learning Management System para que sus estudiantes puedan iniciarse en la soldadura mediante el Curso Básico Online. En ella pueden ver sus clases, tomar sus exámenes, registrar sus pagos, todo esto a distancia. </p>
        </div>
      </div>
    </div>
  );
}
