import React from 'react';
import Slider from "react-slick";
import Container from '../Container';
import ArrowScroll from '../../components/ArrowScroll';
import Project1 from '../../assets/img/portfolio/Image-project.png';
import Project2 from '../../assets/img/portfolio/Image-project2.png';
import Project3 from '../../assets/img/portfolio/Image-project3.png';

export default function Project() {
  const sliderRef =  React.useRef(null);
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
    <Container size="xxl">
      <div className="l-project vh">
        <h2 className="l-project-title l-title">Proyectos</h2>
        <ArrowScroll
          style={{
            right: '10%',
            top: '18%',
            transform: 'rotate(-90deg)',
          }}
          callback={handleScrollSnap}
        />
        <div className="l-project-content">
          <Slider ref={c => sliderRef.current = c} {...settings}>
            <figure className="l-card-figure">
              <img src={Project1} alt="Alejandro" />
              <figcaption className="l-card-figcaption">
                <h3>Smart home application</h3>
              </figcaption>
            </figure>
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
    </Container>
  );
}
