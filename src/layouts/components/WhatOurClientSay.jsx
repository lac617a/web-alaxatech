import React from 'react';
import Dots from '../../components/Dots';
import Review from '../../components/Review';

export default function WhatOurClientSay() {
  const clientRef = React.useRef();
  const dotsRef = React.useRef();
  const carouselPositions = [];

  const newNodosForLayout = (parent, className, arrayNode, element = 'div') => {
    let newArrayOfNode = [];
    let divParent = document.createElement(element);
    divParent.className = className;
    divParent.setAttribute('data-current-snap', true);

    if (Array.isArray(arrayNode)) {
      if (window.innerWidth < 480) {
        arrayNode.forEach((node, index) => {
          newArrayOfNode.push(node);
          if (newArrayOfNode.length % 2 === 0) {
            newArrayOfNode.forEach(setNode => divParent.appendChild(setNode));

            newArrayOfNode = [];
            parent.appendChild(divParent);
            divParent = document.createElement(element);
            divParent.className = className;
            divParent.setAttribute('data-current-snap', false);

          } else if (arrayNode.length % 2 === 1 && arrayNode.length - 1 === index) {
            newArrayOfNode.forEach(setNode => divParent.appendChild(setNode));
            parent.appendChild(divParent);
            divParent.setAttribute('data-current-snap', false);
          }
        });
      } else {
        arrayNode.forEach(node => {
          divParent.appendChild(node);
        });
        parent.appendChild(divParent);
      };
    } else {
      throw new Error('The function receives an array as a main dependency');
    }
  }

  const getCarouselPosition = () => {
    let cloneElement = '';
    [...clientRef.current.childNodes].forEach((_, index) => {
      if (index === 0) {
        cloneElement += `<span class="l-dot active"></span>`;
      } else {
        cloneElement += `<span class="l-dot"></span>`;
      }
      carouselPositions.push([
        _.offsetLeft,
        _.offsetLeft + _.offsetWidth
      ]);
    });
    dotsRef.current.innerHTML = cloneElement;
  }

  const handleScrollSnapX = (e) => {
    const arrayOfChildren = [...dotsRef.current.children];

    [...clientRef.current.childNodes].forEach((node, z) => {
      carouselPositions.forEach((_, x) => {
        arrayOfChildren.forEach((span, y) => {
          if (e.target.scrollLeft === carouselPositions[x][0]) {
            if (x === z) {
              node.dataset.currentSnap = true;
              if (x === y) span.classList.add('active');
              else span.classList.remove('active');
            }
            else node.dataset.currentSnap = false;
          }
        });
      });
    });
  }

  React.useEffect(() => {
    const client = clientRef.current;
    newNodosForLayout(client, 'l-client-content', [...client.childNodes]);
    getCarouselPosition();
    // DEV ONLY
    // return () => {
    //   newNodosForLayout(client, 'l-client-content', [...client.childNodes]);
    //   getCarouselPosition();
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="l-client vh snap-start" id="what-our-client-say" data-snap-current="false">
      <div className="l-container-xxl">
        <div className="l-client-header">
          <h2 className="l-client-title l-title">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="l-client-wrap" ref={clientRef} onScrollCapture={handleScrollSnapX}>
          <Review
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            avatar={require('../../assets/img/portfolio/Image-project.png')} />
          <Review
            clientName="Wilmer Blasini"
            companyName="CEO & Founder de Weld bear"
            description="Altamente recomendados, llevo más de un proyectos trabajando con ellos y digo trabajando con ellos porque aportan ideas de valor a tu proyecto."
            avatar={require('../../assets/img/our-customer/weld-bear.png')} />
          <Review
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            avatar={require('../../assets/img/portfolio/Image-project.png')} />
          <Review
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            avatar={require('../../assets/img/portfolio/Image-project.png')} />
          <Review
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            avatar={require('../../assets/img/portfolio/Image-project.png')} />
        </div>
        <Dots
          orientation="vertical"
          ref={dotsRef}
          style={{
            position: 'relative',
            top: '-2rem',
            left: 0,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        />
      </div>
    </div>
  );
}
