var aim = document.querySelector('.b-shooter__aim');
var imgAim = document.querySelector('.b-shooter__img-aim');
var cemetery = document.querySelector('.b-shooter');
var aimHalfWidth = imgAim.width / 2 ;
var aimHalfHeight = imgAim.height / 2 ;
var calcY = cemetery.offsetHeight - imgAim.height;
var calcX = cemetery.offsetWidth - imgAim.width;


cemetery.addEventListener('click', function(e) {
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

  imgAim.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});
document.addEventListener('keydown', function(e) {
  var isEnterKey = e.code === 'Enter';
  if (isEnterKey) {
    imgAim.style.padding = '10%';
  }
});
  document.addEventListener('keyup', function(e) {
    var isEnterKey = e.code === 'Enter';
    if (isEnterKey) {
      imgAim.style.padding = '0';
    };

});

// document.addEventListener('keydown', function(e) {
//   var isEnterKey = e.code === 'Enter';
//   if (isEnterKey) {
//     imgAim.style.padding = '10%';
//   }
// });
//   document.addEventListener('keyup', function(e) {
//     var isEnterKey = e.code === 'Enter';
//     if (isEnterKey) {
//       imgAim.style.padding = '0';
//     };
//
// });




