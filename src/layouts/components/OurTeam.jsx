import React from 'react';
// MAIN
import Xinema from '../../assets/img/team/Ximena.png';
import Valeria from '../../assets/img/team/Valeria.png';
import Alejandro from '../../assets/img/team/Alejandro.jpeg';
// DESIGN
import Lucia from '../../assets/img/team/Lucia-Castillo.png';
import Norayma from '../../assets/img/team/Norayma.png';
import Candela from '../../assets/img/team/Candela-Anzorena.webp';
import Nicolas from '../../assets/img/team/Nicolas-Porcel.png';
// MANAGE
import Hermany from '../../assets/img/team/Hermany.jpg';
import Luis from '../../assets/img/team/luis-acosta.webp';
import Antonietta from '../../assets/img/team/Antonietta.webp';
import Marianyeli from '../../assets/img/team/Marianyeli.webp';
// DEV
import Frito from '../../assets/img/team/adrian-borthomiert.png';
import Douglas from '../../assets/img/team/douglas-collura.jpg';
import Yoydev from '../../assets/img/team/dominyel-rvr.jpg';
import Andri from '../../assets/img/team/andri.webp';



import ArrowScroll from '../../components/ArrowScroll';

const listTeam = [
  // Main
  { name: 'Alejandro MA', direct: 'Founder & CEO', img: Alejandro },
  { name: 'Valeria Brito', direct: 'Co founder & CDO', img: Valeria },
  { name: 'Ximena Fernández', direct: 'Asesora Comercial', img: Xinema },
  // Design
  { name: 'Nicolas Porcel', direct: 'UX UI Designer', img: Nicolas },
  { name: 'Candela Anzorena', direct: 'UX UI Designer', img: Candela },
  { name: 'Lucia Castillo', direct: 'Diseñadora Gráfica', img: Lucia },
  { name: 'Norayma Martínez', direct: 'Diseñadora Gráfica', img: Norayma },
  // Maneger
  { name: 'Luis Acosta', direct: 'IT Manager', img: Luis },
  { name: 'Marianyeli Rodríguez', direct: 'QA Analyst ', img: Marianyeli },
  { name: 'Antonietta Virguez', direct: 'Project Manager', img: Antonietta },
  { name: 'Hermary Romero', direct: 'Project Manager', img: Hermany },
  // DEv
  { name: 'Adrian Borthomiert', direct: 'Full Stack Developer', img: Frito },
  { name: 'Andri Suarez', direct: 'Full Stack Developer', img: Andri },
  { name: 'Douglas Collura', direct: 'Full Stack Developer', img: Douglas },
  { name: 'Dominyel Rivera', direct: 'Front End Developer', img: Yoydev },
];

const Team = ({ img, name, direct }) => (
  <figure className="l-card-figure">
    <img src={img} alt={`${name}-${direct}`} />
    <figcaption className="l-card-figcaption">
      <p>{direct}</p>
      <h3>{name}</h3>
    </figcaption>
  </figure>
);

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
        carouselPositions.push([
          div.offsetTop,
          div.offsetTop + div.offsetHeight
        ]); // add to array the positions information
      })
      halfContainer = scrollSnap.current.offsetHeight / 2;
    } else {
      throw new Error('getCarouselPositions function receives an array as parent');
    }
  }

  const newNodosForLayoutCard = () => {
    const arrayCard = [...scrollSnap.current.children];
    let newArrayOfNode = [];
    let divParent = document.createElement('div');
    divParent.className = 'l-card';
    if (window.innerWidth > 480 || window.screen.width > 480) {
      arrayCard.forEach(node => {
        newArrayOfNode.push(node);
        if (newArrayOfNode.length % 3 === 0) {
          newArrayOfNode.forEach(setNode => {
            divParent.appendChild(setNode);
          });

          newArrayOfNode = [];
          scrollSnap.current.appendChild(divParent);
          divParent = document.createElement('div');
          divParent.className = 'l-card';
        };
      });
    } else {
      arrayCard.forEach(node => {
        divParent.appendChild(node);
      });
      scrollSnap.current.appendChild(divParent);
    }
  };

  const handleScrollSnap = React.useCallback(value => {
    goCarousel(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', getCarouselPositions);
    newNodosForLayoutCard();
    getCarouselPositions();
    return () => {
      window.removeEventListener('resize', getCarouselPositions);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="l-team vh l-container-xxl snap-start" id="team" data-snap-current="false">
      <div className="l-team-header">
        <h2 className="l-team-title l-title">Nuestro equipo</h2>
      </div>
      <div ref={scrollSnap} className="l-team-wrap scroll-snap">
        {listTeam.map((team, index) => (
          <Team key={index} name={team.name} direct={team.direct} img={team.img} />
        ))}
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
