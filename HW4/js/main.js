(function(){
  var univ = document.querySelector('.b-universe');
  var earth = document.querySelector('.b-universe_img');
  var earthWidth = earth.width / 2;
  var earthHeight = earth.height / 2;
  univ.addEventListener('click', function(e) {
   if (e.target.tagName == "DIV" && earth.style.display !== 'none') {
      var x = e.offsetX;
      var y = e.offsetY;
      if (y >= univ.offsetHeight - earthHeight) {
        y = univ.offsetHeight - earthHeight;
      }
      if (y < earthHeight) {
        y = earthHeight;
      }
      if (x >= univ.offsetWidth - earthWidth) {
        x = univ.offsetWidth - earthWidth;
      }
      if (x < earthWidth) {
        x = earthWidth;
      }
        earth.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    }

    if (e.target.tagName == "IMG") {
      earth.style.display = 'none';
    } else if (earth.style.display == 'none' && e.target.tagName == "DIV"){
      earth.style.display = '';
    }
  });
})();
