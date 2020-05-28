  var aim = document.querySelector('.b-shooter__aim');
  var imgAim = document.querySelector('.b-shooter__img-aim');
  var ghost = document.querySelector('.b-shooter__img-ghost');
  var cemetery = document.querySelector('.b-shooter');
  var aimHalfWidth = imgAim.width / 2 ;
  var aimHalfHeight = imgAim.height / 2 ;

  cemetery.addEventListener('click', function(e) {
    var calcY = e.currentTarget.offsetHeight - aim.offsetHeight;
    var calcX = e.currentTarget.offsetWidth - aim.offsetWidth;
    var x = e.offsetX - aimHalfWidth;
    var y = e.offsetY - aimHalfHeight;

    if (y >= calcY) {
      y = calcY;
    } else if (y < 0) {
      y = 0;
    }

    if (x >= calcX) {
      x = calcX;
    } else if (x < 0) {
      x = 0;
    }
    aim.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  });

  document.addEventListener('keydown', function(e) {
    var isEnterKey = e.code === 'Enter';
    var domRect = imgAim.getBoundingClientRect();
    var aimCenterX = domRect.x / 2;
    var aimCenterY = domRect.y / 2;

    if (isEnterKey) {
      imgAim.style.transform = 'scale(0.9)';
    }

    console.log(aimCenterX);
    console.log(aimCenterY);
  });

  document.addEventListener('keyup', function(e) {
    var isEnterKey = e.code === 'Enter';

    if (isEnterKey) {
      imgAim.style.transform = '';
    };
  });

  function setRandomCoords() {
    var limitX = cemetery.offsetWidth - ghost.offsetWidth;
    var limitY = cemetery.offsetHeight - ghost.offsetHeight;
    var x = Math.floor(Math.random() * (limitX + 1));
    var y = Math.floor(Math.random() * (limitY + 1));

    ghost.style.cssText = 'transform: translate(' + x + 'px, ' + y + 'px);';
  };

  if (ghost.style.display === 'none') {
    ghost.style.display = '';
  }

  setInterval(function () {

    setRandomCoords();
  }, 3000);






