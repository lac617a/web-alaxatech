import React from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import ArrowScroll from '../../components/ArrowScroll';
import Project1 from '../../assets/img/portfolio/Image-project.png';
import Project2 from '../../assets/img/portfolio/Image-project2.png';
import Project3 from '../../assets/img/portfolio/Image-project3.png';

export default function Project() {
  const sliderRef = React.useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    adaptiveHeight: true,
  };

  const handleScrollSnap = React.useCallback(value => {
    if (value === 'next') {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  }, []);

  return (
    <div className="l-project vh snap-start" id="project" data-snap-current="false">
      <div className="l-container-xxl">
        <h2 className="l-project-title l-title">Proyectos</h2>
        <ArrowScroll
          style={{
            right: '10%',
            top: window.innerWidth > 480 ? '7rem' : '16rem',
            transform: 'rotate(-90deg)',
          }}
          callback={handleScrollSnap}
        />
        <div className="l-project-content">
          <Slider ref={c => sliderRef.current = c} {...settings}>
            <Link to="/project/weld-bear">
              <figure className="l-card-figure">
                <img src={Project1} alt="Alejandro" />
                <figcaption className="l-card-figcaption">
                  <h3>Smart home application</h3>
                </figcaption>
              </figure>
            </Link>
            <figure className="l-card-figure">
              <img src={Project2} alt="Alejandro" />
              <figcaption className="l-card-figcaption">
                <h3>Food app</h3>
              </figcaption>
            </figure>
            <figure className="l-card-figure">
              <img src={Project3} alt="Alejandro" />
              <figcaption className="l-card-figcaption">
                <h3>NFT Landing page</h3>
              </figcaption>
            </figure>
            <figure className="l-card-figure">
              <img src={Project3} alt="Alejandro" />
              <figcaption className="l-card-figcaption">
                <h3>NFT Landing page</h3>
              </figcaption>
            </figure>
            <figure className="l-card-figure">
              <img src={Project3} alt="Alejandro" />
              <figcaption className="l-card-figcaption">
                <h3>NFT Landing page</h3>
              </figcaption>
            </figure>
            <figure className="l-card-figure">
              <img src={Project3} alt="Alejandro" />
              <figcaption className="l-card-figcaption">
                <h3>NFT Landing page</h3>
              </figcaption>
            </figure>
            <figure className="l-card-figure">
              <img src={Project3} alt="Alejandro" />
              <figcaption className="l-card-figcaption">
                <h3>NFT Landing page</h3>
              </figcaption>
            </figure>
          </Slider>
        </div>
      </div>
    </div>
  );
}
