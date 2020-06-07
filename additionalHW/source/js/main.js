  var aim = document.querySelector('.b-shooter__aim');
  var imgAim = document.querySelector('.b-shooter__img-aim');
  var ghost = document.querySelector('.b-shooter__img-ghost');
  var cemetery = document.querySelector('.b-shooter');
  var fire = document.querySelector('.b-shooter__img-fire');
  var delayToReset = 500;

  cemetery.addEventListener('click', function(e) {
    var calcY = e.currentTarget.offsetHeight - aim.offsetHeight;
    var calcX = e.currentTarget.offsetWidth - aim.offsetWidth;
    var y = e.offsetY - imgAim.height / 2 ;
    var x = e.offsetX - imgAim.width / 2 ;

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
    if (e.code === 'Enter') {
      imgAim.style.transform = 'scale(0.9)';
    }
  });

  document.addEventListener('keyup', function(e) {
    if (e.code === 'Enter') {
      var domRect = imgAim.getBoundingClientRect();
      var domGhost = ghost.getBoundingClientRect();
      var aimCenterX = domRect.width / 2 + domRect.x;
      var aimCenterY = domRect.height / 2 + domRect.y;

      imgAim.style.transform = '';
      console.log(aimCenterX, aimCenterY);

      if (
        aimCenterX <= domGhost.right - 20
        && aimCenterX >= domGhost.left + 20
        && aimCenterY >= domGhost.top -20
        && aimCenterY <= domGhost.bottom + 20
      ) {
        var animationGhost = `opacity: 0; transition-duration: ${delayToReset * 0.6}ms;
                transition-delay: ${delayToReset * 0.4}ms;`;

        ghost.style.cssText += animationGhost;
        imgAim.style.display = 'none';
        fire.style.cssText = `opacity: 0; transition-duration: ${delayToReset * 0.6}ms;
                visibility: visible; transition-delay: ${delayToReset * 0.4}ms;`;

        setTimeout(function() {
          fire.removeAttribute('style');
          fire.style.visibility = 'hidden';
          imgAim.style.display = '';
          ghost.removeAttribute('style');
          ghost.style.display = 'none';
        }, delayToReset);
      };
    };
  });

  function setRandomCoords() {
    var limitX = cemetery.offsetWidth - ghost.offsetWidth;
    var limitY = cemetery.offsetHeight - ghost.offsetHeight;
    var x = Math.floor(Math.random() * (limitX + 1));
    var y = Math.floor(Math.random() * (limitY + 1));
    ghost.style.left = x + 'px';
    ghost.style.top = y + 'px';
  };

  setInterval(function () {
    if (ghost.style.display === 'none') {
      ghost.style.display = '';
    }
    setRandomCoords();
  }, 3000);