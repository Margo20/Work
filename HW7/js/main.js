// 5) Добавьте элемент button в html и привяжите к нему событие клик,
// которое будет считать
// количество нажатий и выводить его в текст кнопки.
// Количество нажатий должно сохраняться в замыкании.

var btn = document.querySelector('.btn');
var funcWithClosure = function () {
  var num = 0;

  function addToNum(e) {
    e.currentTarget.textContent = 'Количество нажатий: ' + ++num;
  }

  return addToNum;
};

var funcOnClick = funcWithClosure();

btn.addEventListener('click', funcOnClick );




