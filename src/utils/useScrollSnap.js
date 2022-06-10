import {useRef} from 'react';
export default function useScrollSnap(div) {
  const parent = useRef(div);

  const carouselPositions = [];
  let halfContainer;
  let currentItem;
  
  const goCarousel = direction => {
    const currentScrollTop = parent.scrollTop;
    const currentScrollBottom = currentScrollTop + parent.offsetHeight;
    
    if (currentScrollTop === 0 && direction === 'next') {
      currentItem = 1;
    } else if (currentScrollBottom === parent.scrollHeight && direction === 'previous') {
      // console.log('here')
      currentItem = carouselPositions.length - 2;
    } else {
      const currentMiddlePosition = currentScrollTop + halfContainer;
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
    console.log(carouselPositions);
    parent.scrollTo({
      top: carouselPositions[currentItem][0],
      behavior: 'smooth' 
    });
    
  }
  
  const getCarouselPositions = () => {
    const array = parent.current.children ? [...parent.current.children] : [];
    if (Array.isArray(array)) {
      array.forEach(div =>  {
        carouselPositions.push([div.offsetTop, div.offsetTop + div.offsetHeight]); // add to array the positions information
      })
      halfContainer = parent.offsetHeight / 2;
    } else {
      throw new Error('getCarouselPositions function receives an array as parent');
    }
  }
  return {goCarousel, getCarouselPositions};
};
