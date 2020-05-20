var body = document.body;
var butt = document.querySelector('.btn');
var colors = [];
var obj = {
    field1: 'one',
    field2: 'two',
    field3: 'three',
    field4: 'four',
    field5: ['#00bcd4', ' #ffc107', '#2196f3']
  };
alert('Достаньте массив цветов');

butt.addEventListener('click', function(e) {
  lengthColors = colors.length;
  num = Math.floor(Math.random() * lengthColors);
  body.style.backgroundColor = colors[num];
  if (colors.length == 0) {
    const keys = Object.keys(obj);
      for (const key of keys) {
        const someObject = obj[key];
        if (Array.isArray(someObject)) {
          colors = someObject;      
        }
      }
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowRight') {
    num = num + 1;
    if (num >= colors.length) {
      num = 0;
    }
    body.style.backgroundColor = colors[num];
  } else if (event.code == 'ArrowLeft') {
    num = num - 1;
    if (num < 0) {
      num = colors.length - 1;
    }
    body.style.backgroundColor = colors[num];
  }
});