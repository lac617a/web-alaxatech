import React, { forwardRef } from 'react';

const Dots = forwardRef((props, ref) => {
  const { orientation, ...rest } = props;

  const convertOrientation = orientation === 'vertical'
    ? 'l-dots l-dots-vertical'
    : 'l-dots l-dots-horizontal';

  const handleDots = (e) => {
    if (!e.target.dataset.dots) {
      window.location.hash = e.target.dataset.linkTo;
    }
    e.stopPropagation();
  };
  return (
    <div
      ref={ref}
      data-dots="true"
      onClickCapture={handleDots}
      className={convertOrientation}
      {...rest}>
      <span className="l-dot active"></span>
      <span className="l-dot"></span>
    </div>
  );
});

export default React.memo(Dots);