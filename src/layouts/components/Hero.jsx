import React from 'react';
import AOS from "aos";
import Typed from 'typed.js';
import "aos/dist/aos.css";

export default function Hero() {
  // Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();

    const options = {
      strings: ['Desarrollamos', 'Investigamos', 'Creamos'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };
    
    // elRef refers to the <h1> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, []);
  return (
    <div id="hero" className="l-hero vh" data-aos="fade-in">
      <div className="l-hero-container">
        <div className="l-hero-into">
          <h3 className="l-hero-into__text">
            Do it great
          </h3>
          <div className="into">
            <hgroup>
              <h1 style={{ whiteSpace: 'pre' }} ref={el}>D</h1>
              <h2>ideas en soluciones digitales</h2>
            </hgroup>
            <p>Somos una empresa de desarrollo digital, que combina el diseño y el software para crear increíbles productos digitales.</p>
          </div>
          <button className="btn">Contactar</button>
        </div>
        <figure className="l-hero-video">
          <video src={require('../../assets/video/video_hero_alaxatech.mp4')} loop autoPlay muted></video>
        </figure>
      </div>
    </div>
  );
}
