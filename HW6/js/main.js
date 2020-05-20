var body = document.body;
var btn = document.querySelector('.btn');
var colors = [];
var num;
var obj = {
    field1: 'one',
    field2: 'two',
    field3: 'three',
    field4: 'four',
    field5: ['#00bcd4', ' #ffc107', '#2196f3']
  };

btn.addEventListener('click', function() {
  if (!colors.length) {
    var fieldArray = Object.getOwnPropertyNames(obj);

    for (i = 0; i < fieldArray.length; i++) {
      var field = fieldArray[i];
      var someObject = obj[field];

      if (Array.isArray(someObject)) {
         colors = someObject;
      }
    }
  }
  num = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[num];
});

document.addEventListener('keydown', function (event) {
  var isLeftKey = event.code === 'ArrowLeft' ;
  var isRightKey = event.code === 'ArrowRight';

  if ((isRightKey || isLeftKey) && !colors.length) {
    alert('Достаньте массив цветов');
    return;
  }

  if (isRightKey) {
    num++;
    if (num >= colors.length) {
      num = 0;
    }
    body.style.backgroundColor = colors[num];
  } else if (isLeftKey) {
    num--;
    if (num < 0) {
      num = colors.length - 1;
    }
    body.style.backgroundColor = colors[num];
  }
});