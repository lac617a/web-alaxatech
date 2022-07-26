import React from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import ArrowScroll from '../../components/ArrowScroll';
import WeldBear from '../../assets/img/portfolio/Weld-Bear.png';
import OndaCultura from '../../assets/img/portfolio/Onda-Cultura.png';
import Phamto from '../../assets/img/portfolio/Phamto.png';
import Upgrap from '../../assets/img/portfolio/Upgrap.png';
import Gamelot from '../../assets/img/portfolio/Gamelot.png';

const projects = [
  {name: 'Weld Bear', url: 'weld-bear', img: WeldBear},
  {name: 'Onda Cultura', url: 'onda-cultura', img: OndaCultura},
  {name: 'Phamto', url: 'phamto', img: Phamto},
  {name: 'Upgrap', url: 'upgrap', img: Upgrap},
  {name: 'Gamelot', url: 'gamelot', img: Gamelot},
];

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
            {projects.map((project, index) => (
              <Link key={index} to={`/project/${project.url}`}>
                <figure className="l-card-figure">
                  <img src={project.img} alt={project.name} />
                  <figcaption className="l-card-figcaption">
                    <h3>{project.name}</h3>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
