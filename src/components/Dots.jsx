import React, {forwardRef} from 'react';
import useNavigationToTop from '../utils/useNavigationToTop';


const Dots = forwardRef((props, ref) => {
  const {orientation, ...rest} = props;

  const convertOrientation = orientation === 'vertical'
    ? 'l-dots l-dots-vertical'
    : 'l-dots l-dots-horizontal';
  
  const navigateToTop = useNavigationToTop();
  const handleDots = (e) => {
    if(!e.target.dataset.dots) {
      navigateToTop(e.target.dataset.linkTo, e.target);
    }
    e.stopPropagation();
  };
  return (
    <div ref={ref} className={convertOrientation} {...rest} onClickCapture={handleDots} data-dots="true">
      <span className="l-dot active"></span>
      <span className="l-dot"></span>
    </div>
  );
});

export default Dots;