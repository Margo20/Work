// 1) Создайте массив произвольных значений. Скопируйте массив таким образом,
// чтобы изменение копии не мутировало оригинал.
var names = ['Andrey', 'Vlad', 'Vova', 'Mery', 'Ola'];
var namesCopy = names.slice();
console.log(namesCopy);

// 2) Создайте объект с произвольными свойствами. Скопируйте объект таким образом,
//   чтобы изменение копии не мутировало оригинал.
//1) For... in  вариант
var car = {
  name: 'Volvo',
  color: 'red'
};
function copy(car){
  var copyCar = {};
  var key;

  for (key in car) {
    copyCar[key] = car[key];
  }
  return copyCar;
}
console.log(copy(car));
console.log(car);

//2) копирование с assign, JSON.parse
var car = {
  name: 'Volvo',
  color: 'red'
};
var cloneCar = Object.assign({}, car); // поверхностное копирование
console.log(cloneCar);

var cloneCar1 = JSON.parse(JSON.stringify(car)); // глубокое копирование
console.log(cloneCar1);

// 3) Напишите функцию printSquareRoot, которая принимает два аргумента: число и функцию.
//   Внутри себя printSquareRoot вызывает пришедшую из аргумента функцию, передав ей
// пришедшее из аргумента число. В свою очередь вызванная функция должна выводить в консоль
// квадратный корень полученного числа.
function printSquareRoot(num, someFunc) {
  someFunc(num);
};
var calc = function (i) {
  console.log(Math.sqrt(i))
};
var squareRoot = printSquareRoot(9, calc);

// 4) Внутри функции имеется пустой массив. Организуйте замыкание по аналогии со счётчиком,
// чтобы пустой массив наполнялся из аргументов вызова. Напишите проверку на количество элементов.
// Если в массиве их станет пять, а новый пришедший аргумент должен быть шестым, то массив
// очищается, и начинает наполняться заново (агрумент текущего вызова станет нулевым элементом,
// следующего - первым и т.д.).
function addArr() {
  var arr = [];

  function fillUp(obj) {
    if (arr.length === 5) {
      arr.length = 0;
    }
    arr.push(obj);
    console.log(arr);
  }

  return fillUp;
}

var funcWithClosure = addArr();
for (var i = 1; i < 12; i++) {
    funcWithClosure('A' + i);
}


