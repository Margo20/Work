var univ = document.querySelector('.b-universe');
var earth = document.querySelector('.b-universe__img');
var earthHalfWidth = earth.width / 2 ;
var earthHalfHeight = earth.height / 2 ;
var calcY = univ.offsetHeight - earth.height;
var calcX = univ.offsetWidth - earth.width;


univ.addEventListener('click', function(e) {
  var x = e.offsetX - earthHalfWidth;
  var y = e.offsetY - earthHalfHeight;


  if (e.target.tagName === 'IMG') {
    earth.style.display = 'none';

    return;
  }

  if (earth.style.display === 'none') {
    earth.style.display = '';

    return;
  }
  
  if (y >= calcY) {
    y = calcY;
  } else if (y < earthHalfHeight) {
    y = 0;
  }

  if (x >= calcX) {
    x = calcX;
  } else if (x < earthHalfWidth) {
    x = 0;
  }

  earth.style.transform = 'translate(' + x + 'px, ' + y + 'px)';  
});
