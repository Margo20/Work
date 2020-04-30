var arr = ['Яблоко','Груша'];
arr.unshift ('Банан');// 1) Добавить элемент в начало массива
arr.push ('Слива');//2) Добавить элемент в конец массива
arr.pop (); //3) Удалить элемент из массива (двумя способами)
arr.shift();

//4) Удалить повторяющиеся значения из массива
var array = [15, 1, 7, 10, 15, 8, 1, 6, 7];

 function unique(arr) {     
  var result = [];

  for (var num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}
console.log( unique(array) ); 


//5) Массив содержит числа и строки. Вывести в консоль
//все числовые значения больше 7. Формат вывода - "индекс тире значение"

var arr = [2, 'flowers', 5,'greenbox',8, 16,'sonnydays','fox'];

for(var i=0; i<arr.length; i++){
  if(typeof arr[i] === "number" && arr[i] >7){
    console.log(i + ' - ' + arr[i])
  };
};
//6) Массив содержит числа и строки. Вывести в консоль все строковые значения 
//массива, длина которых больше 5. Формат вывода - "индекс тире значение"

var arr = [2, 'flowers', 5,'greenbox',8, 16,'sonnydays', 'fox'];

for(var i=0; i<arr.length; i++){
  if(typeof arr[i] ==="string"&& arr[i].length>5){
    console.log(i + ' - ' + arr[i])
  };
};
//7) Массив содержит все возможные типы данных в произвольном порядке. Задача перебрать 
//массив и вывести сообщение на каждую итерацию. Сообщение будет содержать текст 
//"This is a number", если текущий тип - это number, "This is a string", 
//если текущий тип - string и "This is some type", если текущий тип не string и не number

var arr = [9,'flowers', 890n, true, null,undefined, Symbol,Math,alert];

for(var i=0; i<arr.length; i++){
  if(typeof arr[i] ==="string"){
    console.log('This is a string:'+' ' + arr[i]);
  } else {
    if (typeof arr[i] ==="number"){
      console.log('This is a number:'+' ' + arr[i]);
    }
    else {
      console.log('This is some type:'+' ' + arr[i]);
    }    
  }
}
//8) Массив содержит несколько объектов следующего вида:
//{
//    id: 1,
//    message: 'Test',
//    isHidden: true
//}
//Поле id содержит произвольную цифру, message - произвольный текст, isHidden - true либо false. 
//Задача пробежаться циклом по массиву и вывести message тех объектов, у которых isHidden не true
var arrObjects = [{id: 7,message: 'first',isHidden: true},
                  {id: 13,message: 'second',isHidden: false},
                 {id: 3,message: 'third',isHidden: false}];
for(var i=0; i<arrObjects.length; i++){
  if(arrObjects[i].isHidden!=true){
    console.log(arrObjects[i].message);
  }
}

//10) Есть массив строк. Задача перебрать массив и вывести только
// те элементы, в которых содержится буква 'u'

var arr = ['sub','right','grey','tour','use'];
for(var i=0; i<arr.length; i++){
  var str = arr[i];
  str.split('');
 if(str.includes('u')){console.log(str)};
}
//11) Есть массив произвольных чисел. Задача перебрать массив и вывести в 
//консоль сообщение на каждую итерацию о том чётное перед нами число, либо нечётное
var arr = [1,4,7,0,3,6,5,10];
for(var i=0; i<arr.length; i++){
  var num = arr[i];
  if(num % 2==0){console.log('Число четное:' + num)}
  else{console.log('Число нечетное:' + num)}
}

// 12) Есть две функции. Первая принимает число в качестве единственного аргумента
 // и возвращает квадрат этого числа. Вторая функция принимает первую как аргумент, 
 // вызывает её у себя внутри, передав любое число. Результат вызова кладёт в пустой 
 // массив и возвращает
function int(num){
  
	return num*num;
};
function calculate(calc){
	var arr = [];
    arr.push(calc(5));
  
  return arr;
}
console.log(calculate(int));
