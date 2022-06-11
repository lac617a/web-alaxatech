import React from 'react';
import Alejandro from '../../assets/img/team/Alejandro.png';
import Valeria from '../../assets/img/team/Valeria.png';
import Antonietta from '../../assets/img/team/Antonietta.png';
import ArrowScroll from '../../components/ArrowScroll';

export default function OurTeam() {
  const scrollSnap = React.useRef(null);
  const carouselPositions = [];
  var halfContainer;

  const goCarousel = direction => {
    const halfContainers = halfContainer;
    let currentItem = 0;
    const currentScrollTop = scrollSnap.current.scrollTop;
    const currentScrollBottom = currentScrollTop + scrollSnap.current.offsetHeight;

    if (currentScrollTop === 0 && direction === 'next') {
      currentItem = 1;
    } else if (currentScrollBottom === scrollSnap.current.scrollHeight && direction === 'previous') {
      currentItem = carouselPositions.length - 2;
    } else {
      const currentMiddlePosition = currentScrollTop + halfContainers;
      for (let i = 0; i < carouselPositions.length; i++) {
        if (currentMiddlePosition > carouselPositions[i][0] && currentMiddlePosition < carouselPositions[i][1]) {
          currentItem = i;
          if (direction === 'next') {
            currentItem++;
          } else if (direction === 'previous') {
            currentItem--
          }
        }
      }
    }
    scrollSnap.current.scrollTo({
      top: carouselPositions[currentItem][0],
      behavior: 'smooth'
    });

  }

  const getCarouselPositions = () => {
    const array = [...scrollSnap.current.children];
    if (Array.isArray(array)) {
      array.forEach(div => {
        carouselPositions.push([div.offsetTop, div.offsetTop + div.offsetHeight]); // add to array the positions information
      })
      halfContainer = scrollSnap.current.offsetHeight / 2;
    } else {
      throw new Error('getCarouselPositions function receives an array as parent');
    }
  }

  const handleScrollSnap = React.useCallback(value => {
    goCarousel(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    // getCarouselPositions(); // call it once
    window.addEventListener('resize', getCarouselPositions);
    return () => getCarouselPositions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="l-team vh l-container-xxl" id="team" data-snap-current="false">
      <div className="l-team-header">
        <h2 className="l-team-title l-title">Nuestro team</h2>
      </div>
      <div ref={scrollSnap} className="l-team-wrap scroll-snap">
        <div className="l-card" data-current="true">
          <figure className="l-card-figure">
            <img src={Alejandro} alt="Alejandro" />
            <figcaption className="l-card-figcaption">
              <p>Founder & CEO</p>
              <h3>Alejandro MA</h3>
            </figcaption>
          </figure>
          <figure className="l-card-figure">
            <img src={Valeria} alt="Valeria" />
            <figcaption className="l-card-figcaption">
              <p>Co founder & CDO</p>
              <h3>Valeria Brito</h3>
            </figcaption>
          </figure>
          <figure className="l-card-figure">
            <img src={Antonietta} alt="Antonietta" />
            <figcaption className="l-card-figcaption">
              <p>Project Manager</p>
              <h3>Antonietta</h3>
            </figcaption>
          </figure>
        </div>
        <div className="l-card" data-current="false">
          <figure className="l-card-figure">
            <img src={Alejandro} alt="Alejandro" />
            <figcaption className="l-card-figcaption">
              <p>Founder & CEO</p>
              <h3>Alejandro MA</h3>
            </figcaption>
          </figure>
          <figure className="l-card-figure">
            <img src={Valeria} alt="Valeria" />
            <figcaption className="l-card-figcaption">
              <p>Co founder & CDO</p>
              <h3>Valeria Brito</h3>
            </figcaption>
          </figure>
          <figure className="l-card-figure">
            <img src={Antonietta} alt="Antonietta" />
            <figcaption className="l-card-figcaption">
              <p>Project Manager</p>
              <h3>Antonietta</h3>
            </figcaption>
          </figure>
        </div>
      </div>
      <ArrowScroll
        style={{
          right: '5%',
          top: '50%',
        }}
        callback={handleScrollSnap}
      />
    </div>
  );
}
