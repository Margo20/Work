var fruits =['apple', 'orange', 'pineapple'];
// 1) Добавить элемент в начало массива
fruits.unshift ('banana');
console.log(fruits)
//2) Добавить элемент в конец массива
fruits.push ('orange');
console.log(fruits)
//3) Удалить элемент из массива (двумя способами)
fruits.pop ();
console.log(fruits)
fruits.shift();
console.log(fruits)

var removedItem = fruits.splice(2, 1);
console.log(removedItem);

//4) Удалить повторяющиеся значения из массива
var array = [15, 1, 7, 10, 15, 8, 1, 6, 7];

  result = array.filter(function(item, pos) {
    return array.indexOf(item) === pos;
});
 console.log(result);



//5) Массив содержит числа и строки. Вывести в консоль
//все числовые значения больше 7. Формат вывода - "индекс тире значение"

var arr = [2, 'flowers', 5,'greenbox',8, 16,'sonnydays','fox'];

for(var i=0; i<arr.length; i++){
  if(typeof arr[i] === 'number' && arr[i] >7){
    console.log(i + ' - ' + arr[i])
  };
};
//6) Массив содержит числа и строки. Вывести в консоль все строковые значения 
//массива, длина которых больше 5. Формат вывода - "индекс тире значение"

var arr = [2, 'flowers', 5,'greenbox',8, 16,'sonnydays', 'fox'];

for(var i=0; i<arr.length; i++){
  if(typeof arr[i] ==='string'&& arr[i].length>5){
    console.log(i + ' - ' + arr[i])
  };
};
//7) Массив содержит все возможные типы данных в произвольном порядке. Задача перебрать 
//массив и вывести сообщение на каждую итерацию. Сообщение будет содержать текст 
//"This is a number", если текущий тип - это number, "This is a string", 
//если текущий тип - string и "This is some type", если текущий тип не string и не number

var arr = [9,'flowers', 890n, true, null,undefined, Symbol, Math, alert];

for(var i=0; i<arr.length; i++){
  if(typeof arr[i] ==='string'){
    console.log('This is a string:'+' ' + arr[i]);
  } else if(typeof arr[i] ==='number'){
      console.log('This is a number:'+' ' + arr[i]);
    }
    else {
      console.log('This is some type:'+' ' + arr[i]);
    }    
  };

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
  if (!arrObjects[i].isHidden){
    console.log(arrObjects[i].message);
  }
}
//9) Есть массив объектов, содержащих одно единственное поле title. Это поле является произвольной
//строкой. Задача на его основе создать новый массив, в который будут помещены эти же объекты с 
//дополнительным полем titleUppercased, содержащим строку title, но написанную заглавными буквами

var arr = [{title: 'string'}];
var arr2 = [];

for(var i=0; i<arr.length; i++) {
  var item ={}
  
  item.title = arr[i].title;
  item.titleUppercased = arr[i].title.toUpperCase();
  
  arr2.push(item);
   
}
console.log(arr); 
console.log(arr2); 

//10) Есть массив строк. Задача перебрать массив и вывести только
// те элементы, в которых содержится буква 'u'

var array = ['sub','right', 'gjjjjuf', 'grey','tour','use'];

for(var i=0; i<array.length; i++) {
 if(array[i].indexOf('u') >= 0 ){
   console.log(array[i])
 }
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
function multi(num){
  
  return num*num;
}

function addToArr(funct){
  var arr = [];
  arr.push(funct(5));
  return arr;
}

console.log(addToArr(multi));

