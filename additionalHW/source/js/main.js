const aim = document.querySelector('.b-shooter__aim');
const imgAim = document.querySelector('.b-shooter__img-aim');
const ghost = document.querySelector('.b-shooter__img-ghost');
const cemetery = document.querySelector('.b-shooter');
const fire = document.querySelector('.b-shooter__img-fire');
const delayToReset = 500;
const progressIcon = document.getElementsByClassName('b-shooter__progress-icon');
let isGameOver = false;
const health = document.getElementsByClassName('b-shooter__health-icon');
const bShooterHealth = document.querySelector('.b-shooter__health');
const bShooterGameOver = document.querySelector('.b-shooter__game-over');
const bShooterTitle = document.querySelector('.b-shooter__game-over-title');


cemetery.addEventListener('click', function(e) {
if (
  ghost.style['animation-play-state'] === 'paused' || isGameOver ) {
  return;
};

  const calcY = e.currentTarget.offsetHeight - aim.offsetHeight;
  const calcX = e.currentTarget.offsetWidth - aim.offsetWidth;
  let y = e.offsetY - imgAim.height / 2;
  let x = e.offsetX - imgAim.width / 2;

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
  aim.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('keydown', (e) => {
 if (e.code === 'Space') {
    e.preventDefault();
    imgAim.style.transform = 'scale(.9)';
  };
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'Enter' && isGameOver) {
    return reset();
  }

  if (e.code !== 'Space' || isGameOver) {
    return;
  };

  const domRect = imgAim.getBoundingClientRect();
  const domGhost = ghost.getBoundingClientRect();
  let aimCenterX = domRect.width / 2 + domRect.x;
  let aimCenterY = domRect.height / 2 + domRect.y;

  imgAim.style.transform = '';
  console.log(aimCenterX, aimCenterY);

  if (
    aimCenterX <= domGhost.right - 20
    && aimCenterX >= domGhost.left + 20
    && aimCenterY >= domGhost.top -20
    && aimCenterY <= domGhost.bottom + 20
  ) {
      let animationGhost = `opacity: 0; 
      transition-duration: ${delayToReset * 0.6}ms; 
      transition-delay: ${delayToReset * 0.4}ms;`;

      ghost.style.cssText += animationGhost;
      fire.style.cssText += animationGhost;
      ghost.style['animation-play-state'] = 'paused';
      fire.style.visibility = 'visible';
      imgAim.style.display = 'none';

      setTimeout(function() {
        if(isGameOver) {
          dropTheCurtain(true);
        } else {
          fire.removeAttribute('style');
          fire.style.visibility = 'hidden';
          imgAim.style.display = '';
          ghost.removeAttribute('style');
          ghost.style.display = 'none';
          ghost.style['animation-play-state'] = 'running';
          }
        }, delayToReset);
      markProgress();
    };
});

function setRandomCoords() {
  const limitX = cemetery.offsetWidth - ghost.offsetWidth;
  const limitY = cemetery.offsetHeight - ghost.offsetHeight;
  const x = Math.floor(Math.random() * (limitX + 1));
  const y = Math.floor(Math.random() * (limitY + 1));

  ghost.style.left = x + 'px';
  ghost.style.top = y + 'px';
};

setInterval(() => {
  if (
    ghost.style['animation-play-state'] === 'paused' || isGameOver ) {
    return;
  };

  if (ghost.style.display === 'none') {
    ghost.style.display = '';
    setRandomCoords();

  } else {
    setRandomCoords();
    markLifeStatus();
  };
}, 3000);

const markProgress = () => {
  for (let i = 0; i < progressIcon.length; i++) {
    if (!progressIcon[i].classList.contains('_shootToGhost')) {
      progressIcon[i].classList.add('_shootToGhost');

      if (i === progressIcon.length - 1) {
        isGameOver = true;
      };

      break;
    };
  };
};


const markLifeStatus = () => {
  if (bShooterHealth.classList.contains('_blinkHealthBar')) {
    isGameOver = true;
    dropTheCurtain(false)
    return;
  };

  for (let i = 0; i < health.length; i++) {
    if (!health[i].classList.contains('_lostHealth')) {
      health[i].classList.add('_lostHealth');

      if (i === health.length - 1) {
        bShooterHealth.classList.add('_blinkHealthBar');
      };

      break;
    };
  };
}

const dropTheCurtain = (isWin) => {
  if (isWin) {
    bShooterTitle.innerText = 'YOU WIN';
    cemetery.classList.add('_win')
  }  else {
    bShooterTitle.innerText = 'YOU LOSE';
    cemetery.classList.add('_lose');
    ghost.removeAttribute('style');
  };
};

const reset = () => {
  isGameOver = false;
  bShooterHealth.classList.remove('_blinkHealthBar');
  cemetery.classList.remove('_lose');
  cemetery.classList.remove('_win');
  imgAim.removeAttribute('style');
  fire.removeAttribute('style');
  fire.style.visibility = 'hidden';
  ghost.removeAttribute('style');
  ghost.style.display = 'none';

  for (let i = 0; i < progressIcon.length; i++) {
    if (progressIcon[i].classList.contains('_shootToGhost')) {
        progressIcon[i].classList.remove('_shootToGhost');
    };
  };

  for (let i = 0; i < health.length; i++) {
    if (health[i].classList.contains('_lostHealth')) {
        health[i].classList.remove('_lostHealth');
    };
  };
}