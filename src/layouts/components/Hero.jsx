/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import AOS from "aos";
import Typed from 'typed.js';
import "aos/dist/aos.css";
import {HashLink} from 'react-router-hash-link';


export default function Hero() {
  // Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();

    const options = {
      strings: ['Diseñando','Desarrollando', 'Transformando'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    
    // elRef refers to the <h1> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      AOS.refresh();
      typed.current.destroy();
    }
  }, []);
  return (
    <div id="hero" className="l-hero vh snap-start" data-aos="fade-in" data-snap-current="true">
      <div className="l-hero-container">
        <div className="l-hero-into">
          <h3 className="l-hero-into__text">
            Do it great
          </h3>
          <div className="into">
            <hgroup>
              <div className="into-flex">
                <h1 style={{ whiteSpace: 'pre' }} ref={el}></h1>
              </div>
              <h2>ideas en soluciones digitales</h2>
            </hgroup>
            <p>Somos una empresa de desarrollo digital, que combina el diseño y el software para crear increíbles productos digitales.</p>
          </div>
          <HashLink to="/#contact" aria-label="Contactar" className="btn">Contactar</HashLink>
        </div>
        <figure className="l-hero-video">
          <video src={require('../../assets/video/video_hero_alaxatech.mp4')} loop autoPlay muted></video>
        </figure>
      </div>
    </div>
  );
}
