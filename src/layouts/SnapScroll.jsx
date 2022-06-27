import React from 'react';
import LogoDefault from '../assets/img/Logo-default.svg';
import LogoWhite from '../assets/img/Logo-white.svg';
import LayoutFooter from './LayoutFooter';
import Dots from '../components/Dots';

export default function SnapScroll({ children }) {
  const mainRef = React.useRef(null);
  const dotsRef = React.useRef(null);
  let halfContainer;
  const carouselPositions = [];

  const goCarousel = (children, childrenIndex, scrollTop) => {
    const halfContainers = halfContainer;
    const currentScrollTop = mainRef.current.scrollTop;
    const arrayOfChildren = [...dotsRef.current.children];
    const currentMiddlePosition = currentScrollTop + halfContainers;

    if (scrollTop > 0 && carouselPositions.length < 1) {
      getCarouselPosition();
      if (children.id === window.location.hash.substring(3)) {
        children.style.opacity = 1;
        children.setAttribute('data-snap-current', 'true');
      }
      arrayOfChildren.forEach(span => {
        if (span.dataset.linkTo === window.location.hash.substring(2))
          span.classList.add('active');
        else span.classList.remove('active');
      });
    } else {
      for (let i = 0; i < carouselPositions.length; i++) {
        if (currentMiddlePosition > carouselPositions[i][0] && currentMiddlePosition < carouselPositions[i][1]) {
          if (currentScrollTop === carouselPositions[i][0]) {
            arrayOfChildren.forEach((span, index) => {
              if (carouselPositions.indexOf(carouselPositions[i]) === index) {
                if (childrenIndex === index) {
                  children.setAttribute('data-snap-current', 'true');
                  span.classList.add('active');
                  const ancla = [...document?.getElementsByTagName('a')].slice(1,6);
                  const img = [...document?.getElementsByTagName('img')].slice(0,1);
                  const [imga] = img;
                  // Change LOGO
                  if ([1,6,7].includes(index)) {
                    imga.src = LogoWhite;
                  } else {
                    imga.src = LogoDefault;
                  }
                  // Change color for nav
                  if (!window.location.href.includes('project')) {
                    if ([0, 1, 3, 6, 7].includes(index)) {
                      ancla.forEach(a => {
                        a.classList.remove('neutro-700');
                        a.classList.add('neutro-200');
                      });
                    } else {
                      ancla.forEach(a => {
                        a.classList.remove('neutro-200');
                        a.classList.add('neutro-700');
                      });
                    }
                  } else {
                    if ([1].includes(index)) {
                      ancla.forEach(a => {
                        a.classList.remove('neutro-700');
                        a.classList.add('neutro-200');
                      });
                    } else {
                      ancla.forEach(a => {
                        a.classList.remove('neutro-200');
                        a.classList.add('neutro-700');
                      });
                    }
                  }
                } else {
                  children.setAttribute('data-snap-current', 'false');
                }
              } else {
                span.classList.remove('active');
              };
            });
          };
        };
      };
    };
  };

  const getCarouselPosition = () => {
    let cloneElement = '';
    const arrayChildren = [...mainRef.current?.children];
    arrayChildren.slice(1).forEach(children => {
      const snapCurrent = children.getAttribute('data-snap-current');
      children.style.transition = 'all .3s ease-out 0s';
      if (snapCurrent === 'true') {
        cloneElement += `<span class="l-dot active" data-link-to="/#${children.id}"></span>`;
      } else {
        cloneElement += `<span class="l-dot" data-link-to="/#${children.id}"></span>`;
      }
      carouselPositions.push([
        children.offsetTop,
        children.offsetTop + children.offsetHeight
      ]);
    });
    dotsRef.current.innerHTML = cloneElement;
    halfContainer = mainRef.current.offsetHeight / 2;
  };

  const handleScroll = (e) => {
    const arrayChildren = [...mainRef.current?.children];
    arrayChildren.slice(1).forEach((children, childrenIndex) => {
      goCarousel(children, childrenIndex, e.target.scrollTop);
    });
  };

  React.useEffect(() => {
    window.addEventListener('hashchange', handleScroll);
    window.addEventListener('resize', getCarouselPosition);

    getCarouselPosition();
    return () => {
      window.removeEventListener('resize', getCarouselPosition);
      window.removeEventListener('hashchange', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main id="main" className="scroll-snap vh" ref={mainRef} onScroll={handleScroll}>
      <Dots ref={dotsRef} />
      {children}
      <LayoutFooter />
    </main>
  );
}
