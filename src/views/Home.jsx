import React from 'react';
import Hero from '../layouts/components/Hero';
import Video from '../layouts/components/Video';
import LayoutFooter from '../layouts/LayoutFooter';
import Service from '../layouts/components/Service';
import Project from '../layouts/components/Project';
import OurTeam from '../layouts/components/OurTeam';
import HowWeWorking from '../layouts/components/HowWeWorking';
import WhatOurClientSay from '../layouts/components/WhatOurClientSay';
import Dots from '../components/Dots';

export default function Home() {
  const mainRef = React.useRef(null);
  const dotsRef = React.useRef(null);
  let halfContainer;
  const carouselPositions = [];
  // const unsuscribe = ['hero', 'video'];

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
                  // children.style.opacity = 1;
                  children.setAttribute('data-snap-current', 'true');
                  window.location.hash = span.dataset.linkTo;
                  span.classList.add('active');
                } else {
                  // if (!unsuscribe.includes(children.id)) {
                  //   children.style.opacity = 0;
                  // }
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
        // children.style.opacity = 1;
        cloneElement += `<span class="l-dot active" data-link-to="/#${children.id}"></span>`;
      } else {
        // if (!unsuscribe.includes(children.id)) {
        //   children.style.opacity = 0;
        // }
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

    return () => {
      getCarouselPosition();
      window.removeEventListener('resize', getCarouselPosition);
      window.removeEventListener('hashchange', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="scroll-snap vh" ref={mainRef} onScroll={handleScroll}>
      <Dots ref={dotsRef} />
      <Hero />
      <Service />
      <Project />
      <HowWeWorking />
      <WhatOurClientSay />
      <OurTeam />
      <Video />
      <LayoutFooter />
    </main>
  );
}
