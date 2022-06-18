import React from 'react';
import Dots from '../../components/Dots';
import Review from '../../components/Review';

export default function WhatOurClientSay() {
  const clientRef = React.useRef();
  const dotsRef = React.useRef();

  const newNodosForLayout = (parent, className, arrayNode, element = 'div') => {
    let newArrayOfNode = [];
    let divParent = document.createElement(element);
    divParent.className = className;

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

          } else if (arrayNode.length % 2 === 1 && arrayNode.length - 1 === index) {
            newArrayOfNode.forEach(setNode => divParent.appendChild(setNode));
            parent.appendChild(divParent);
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

  const handleScrollSnapX = (e) => {
    console.log(e.target.childNodes)
    console.log(e.target.childElementCount)
  }

  React.useEffect(() => {
    const client = clientRef.current;
    return () => newNodosForLayout(client, 'l-client-content', [...client.childNodes]);
  }, []);

  return (
    <div className="l-client vh" id="what-our-client-say" data-snap-current="false">
      <div className="l-container-xxl">
        <div className="l-client-header">
          <h2 className="l-client-title l-title">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="l-client-wrap" ref={clientRef} onScroll={handleScrollSnapX}>
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
