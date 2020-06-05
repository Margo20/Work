  'use strict'
  // 1) Сделайте функцию, которая получает имя пользователя и выводит на экран 'Hello, Имя'.
  //   Если имя не передано, функция должна выводить 'Hello, %username%'.

  function printName(username = '%username%') {
    console.log(`Hello, ${username}`);
  }

  printName();
  printName('Bob');

  // 2) Есть маcсив объектов с информацией о населённых пунктах .Задача на его основе сделать объект с двумя
  // полями usа  и europe, где значением каждого поля станет массив строк, содержащий релевантные названия городов.
  const arr7 = [
    {
      city: 'New York',
      country: 'USA'
    },
    {
      city: 'Paris',
      country: 'France'
    },
    {
      city: 'San Francisco',
      country: 'USA'
    },
    {
      city: 'Minsk',
      country: 'Belarus'
    }
  ];

  let obj7 = arr7.reduce(function(total,item) {
    item.country==='USA' ? total.usa.push(item.city) : total.europe.push(item.city);

    return total;
  },{ usa: [], europe: []});
  console.log(obj7);
  // 3) Найдите минимальный элемент произвольного массива чисел используя Math и синтаксис es5.
  // Найдите максимальный элемент того же массива, используя Math и синтаксис es6.
   let arr = [1, 5, 7, 13, 8, -3];

    console.log(
    Math.min.apply(null,arr)
    );

    console.log(
      Math.max(...arr)
    );
  // 4) Напишите функцию, которая принимает два аргумента и возвращает их сумму, затем каррируйте
  // эту функцию до одного аргумента.
  function func(arg, arg1) {
    return arg + arg1;
  }
  console.log(func(3,5));

  let func1 = func.bind(null, 3);
  console.log(func1(5));

  // 5) Реализуйте чейн. Вначале задаётся число, затем выполняются арифметические действия,
  //   в конце результат выводится в консоль  setNum(10).plus(7).minus(2).showNum() // 10 + 7 - 2
  let count = {
    num : 0,
    setNum(arg) {
      this.num = arg;

      return this;
    },
    plus(arg) {
      this.num += arg;

      return this;
    },
    minus(arg) {
      this.num -= arg;

      return this;
    },
    showNum() {
      console.log(this.num);
    }
  };

  count.setNum(10).plus(7).minus(2).showNum();

  // 6) Выполните деструктурирующее присваивание переменным полей объекта, полученного в пункте 2.
  const obJ = {
    usa: ['New York', 'San Francisco'],
    europe: ['Paris', 'Minsk']
  };

  let {usa, europe} = obJ;
    console.log(usa, europe);

  // 7) "Натравите" метод printInfo из obj на obj1.

    const obj = {
    fistName: 'Yura',
    lastName: 'Alekseyev',
    job: 'web developer',

    printInfo: function() {
      console.log(`${this.fistName} ${this.lastName} works as ${this.job}.`)
    }
  };

  const obj1 = {
    fistName: 'John',
    lastName: 'Kalligan',
    job: 'musician'
  };
  obj.printInfo.call(obj1);
