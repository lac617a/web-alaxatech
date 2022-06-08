import React from 'react';
import Container from '../Container';
import Alejandro from '../../assets/img/team/Alejandro.png';
import Valeria from '../../assets/img/team/Valeria.png';
import Antonietta from '../../assets/img/team/Antonietta.png';

export default function OurTeam() {
  const scrollSnap = React.useRef(null);
  const handleScroll = scrollTo => {
    [...scrollSnap.current.children].filter(item => {
      if (scrollTo === 'down') {
        console.log(item);
      }
    })
  }
  return (
    <Container size="xxl">
      <div className="l-team vh">
        <div className="l-team-header">
          <h2 className="l-team-title l-title">Nuestro team</h2>
        </div>
        <div ref={scrollSnap} className="l-team-wrap scroll-snap">
          <div className="l-team-box">
            <figure className="l-team-figure">
              <img src={Alejandro} alt="Alejandro" />
            </figure>
            <figure className="l-team-figure">
              <img src={Valeria} alt="Valeria" />
            </figure>
            <figure className="l-team-figure">
              <img src={Antonietta} alt="Antonietta" />
            </figure>
          </div>
          <div className="l-team-box">
            <figure className="l-team-figure">
              <img src={Alejandro} alt="Alejandro" />
            </figure>
            <figure className="l-team-figure">
              <img src={Valeria} alt="Valeria" />
            </figure>
            <figure className="l-team-figure">
              <img src={Antonietta} alt="Antonietta" />
            </figure>
          </div>
        </div>
        <div className="l-team-arrow">
          <button type="button" className="btn" onClick={() => handleScroll('top')}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 25.3334C15.5 25.6096 15.7239 25.8334 16 25.8334C16.2762 25.8334 16.5 25.6096 16.5 25.3334H15.5ZM16 6.66675L16.3536 6.31319C16.1583 6.11793 15.8417 6.11793 15.6465 6.31319L16 6.66675ZM6.31313 15.6465C6.11787 15.8418 6.11787 16.1584 6.31313 16.3536C6.5084 16.5489 6.82498 16.5489 7.02024 16.3536L6.31313 15.6465ZM24.9798 16.3536C25.1751 16.5489 25.4916 16.5489 25.6869 16.3536C25.8822 16.1584 25.8822 15.8418 25.6869 15.6465L24.9798 16.3536ZM16.5 25.3334V6.66675H15.5V25.3334H16.5ZM7.02024 16.3536L16.3536 7.0203L15.6465 6.31319L6.31313 15.6465L7.02024 16.3536ZM15.6465 7.0203L24.9798 16.3536L25.6869 15.6465L16.3536 6.31319L15.6465 7.0203Z" fill="#262626"/>
            </svg>
          </button>
          <button type="button" className="btn" onClick={() => handleScroll('down')}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 6.6665C16.5 6.39036 16.2762 6.1665 16 6.1665C15.7239 6.1665 15.5 6.39036 15.5 6.6665H16.5ZM16 25.3332L15.6465 25.6867C15.8417 25.882 16.1583 25.882 16.3536 25.6867L16 25.3332ZM25.6869 16.3534C25.8822 16.1581 25.8822 15.8415 25.6869 15.6463C25.4916 15.451 25.1751 15.451 24.9798 15.6463L25.6869 16.3534ZM7.02024 15.6463C6.82498 15.451 6.5084 15.451 6.31313 15.6463C6.11787 15.8415 6.11787 16.1581 6.31313 16.3534L7.02024 15.6463ZM15.5 6.6665V25.3332H16.5V6.6665H15.5ZM24.9798 15.6463L15.6465 24.9796L16.3536 25.6867L25.6869 16.3534L24.9798 15.6463ZM16.3536 24.9796L7.02024 15.6463L6.31313 16.3534L15.6465 25.6867L16.3536 24.9796Z" fill="#262626"/>
            </svg>
          </button>
        </div>
      </div>
    </Container>
  );
}
