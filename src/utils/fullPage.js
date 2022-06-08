
export default function scrollPage(e) {
  const nodesName = ['SECTION', 'FOOTER'];
  console.log(e.target.nodeName);
  if (nodesName.includes(e.target.nodeName)) {
    var next = e.target.nextElementSibling;
    var prev = e.target.previousElementSibling;
  } else {
    next = e.target.closest(nodesName).nextElementSibling;
    prev = e.target.closest(nodesName).previousElementSibling;
  }
  
  if (e.deltaY < 0) {
    if(nodesName.includes(prev.nodeName)) {
      verticalScroll(prev, 1500, 'easeInOutCubic');
      e.target.closest(nodesName).classList.remove('active')
      prev.classList.add('active')
    }
    
  } else if (e.deltaY > 0) {
    if(nodesName.includes(next.nodeName)) {
      verticalScroll(next, 'easeInOutQuad', runAfter);
      e.target.closest(nodesName).classList.remove('active');
      next.classList.add('active');
    }
  } else {
    return false;
  }
}

function runAfter() {
  console.log('after');
}

function verticalScroll(destination) {
  const duration = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
  const easing = arguments.length <= 2 || arguments[2] === undefined ? 'linear' : arguments[2];
  const callback = arguments[3];
  const easings = {
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
  };
  
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  
  console.log("documentHeight " + documentHeight);
  console.log("windowHeight " + windowHeight);
  console.log("destinationOffset " + destinationOffset);
  console.log("destinationOffsetToScroll " + destinationOffsetToScroll);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, (now - startTime) / duration);
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      console.log('hola')
      if (callback) {
        callback();
      }
      return;
    }
    requestAnimationFrame(scroll);
  }
  scroll();
}