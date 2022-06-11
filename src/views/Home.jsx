import React from 'react';
import Hero from '../layouts/components/Hero';
import Service from '../layouts/components/Service';
import Project from '../layouts/components/Project';
import HowWeWorking from '../layouts/components/HowWeWorking';
import WhatOurClientSay from '../layouts/components/WhatOurClientSay';
import OurTeam from '../layouts/components/OurTeam';
import Video from '../layouts/components/Video';
import LayoutFooter from '../layouts/LayoutFooter';


export default function Home() {
  const mainRef = React.useRef(null);
  const dotsRef = React.useRef(null);
  const carouselPositions = [];
  let halfContainer;
  

  const goCarousel = (children, childrenIndex) => {
    const snapCurrent = children;
    const halfContainers = halfContainer;
    const currentScrollTop = mainRef.current.scrollTop;
    const currentMiddlePosition = currentScrollTop + halfContainers;
    for (let i = 0; i < carouselPositions.length; i++) {
      if (currentMiddlePosition > carouselPositions[i][0] && currentMiddlePosition < carouselPositions[i][1]) {
        if (currentScrollTop === carouselPositions[i][0]) {
          [...dotsRef.current.children].forEach((span, index) => {
            if (carouselPositions.indexOf(carouselPositions[i]) === index) {
              if (childrenIndex === index) {
                console.log(snapCurrent)
                snapCurrent.setAttribute('data-snap-current', 'true');
                span.classList.add('active');
              }
            } else {
              snapCurrent.setAttribute('data-snap-current', 'false');
              span.classList.remove('active');
            }
          });
        }
      }
    }
  };

  const getCarouselPosition = () => {
    let cloneElement = '';
    const arrayChildren = [...mainRef.current?.children];
    arrayChildren.slice(1).forEach(children => {
      const snapCurrent = children.getAttribute('data-snap-current');
      if (snapCurrent === 'true') {
        cloneElement += '<span class="l-dot active"></span>';
      } else {
        cloneElement += '<span class="l-dot"></span>';
      }
      carouselPositions.push([
        children.offsetTop,
        children.offsetTop + children.offsetHeight
      ]);
    });
    dotsRef.current.innerHTML = cloneElement;
    halfContainer = mainRef.current.offsetHeight / 2;
  };

  const handleScroll = () => {
    const arrayChildren = [...mainRef.current?.children];
    arrayChildren.slice(1).forEach((children, childrenIndex) => {
      goCarousel(children, childrenIndex);
    });
    // console.log(mainRef.current.scrollTop)
  }
  
  React.useEffect(() => {
    window.addEventListener('resize', getCarouselPosition);

    return () => {
      getCarouselPosition();
      window.removeEventListener('resize', getCarouselPosition);
    };
  }, []);

  return (
    <main className="scroll-snap vh" ref={mainRef} onScroll={handleScroll}>
      <div className="l-dots" ref={dotsRef}>
        <span className="l-dot active"></span>
        <span className="l-dot"></span>
      </div>
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
