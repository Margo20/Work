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
    var aimCenterX = domRect.left / 2;
    var aimCenterY = domRect.top / 2;

    if (isEnterKey) {
      imgAim.style.transform = 'scale(0.9)';
    }

    console.log(aimCenterX);
    console.log(aimCenterY);
  });

  document.addEventListener('keyup', function(e) {
    var isEnterKey = e.code === 'Enter';

    if (isEnterKey) {
      imgAim.style.transform = 'scale(1)';
    };
  });


  function setRandomCoords() {
    var cemeteryWidth = cemetery.offsetWidth;
    var cemeteryHeight = cemetery.offsetHeight;
    var ghostWidth = ghost.offsetWidth;
    var ghostHeight = ghost.offsetHeight;
    var calcLeft = cemeteryWidth - ghostWidth*2;
    var calcTop = cemeteryHeight - ghostHeight*2;
    var RandomX = Math.floor(Math.random() * calcLeft) + ghostWidth;
    var RandomY = Math.floor(Math.random() * calcTop) + ghostHeight;
    var x = RandomX;
    var y = RandomY;

    ghost.style.cssText = 'left: RandomX; top: RandomY;';

    if (x >= calcLeft) {
      x = calcLeft;
    } else if (x < 0) {
      x = 0;
    }

    if (y >= calcTop) {
      y = calcTop;
    } else if (y < 0) {
      y = 0;
    }

    ghost.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  };

  var timerId = setInterval(function () {
    if (ghost.style='display: none;') {
      ghost.style='display: block;';
    }
    setRandomCoords();
  }, 3000);



