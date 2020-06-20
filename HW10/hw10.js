'use strict'

const errorFn = function (err) {
  console.log(err);
};

const successFn = function ({results}) {
  female = results;
  sum();
}

let male;
let female;

function createList() {
  return document.createElement('ul');
};

function createListItem({name, picture}) {
  const li = document.createElement('li');
  li.innerText = `${name},${picture}`;

  return li;
};

function printHtml(arr) {
  const ul = createList();

  arr.forEach(function (el) {
    const li = createListItem(el);

    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}

const requestForUsers = function (res, success, error) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        success(xhr.response);

        console.log(JSON.parse(xhr.response));
      } else {
        error({
          code: xhr.status,
          message: xhr.responseText
          });
      }
    }
  }

  xhr.open('GET', 'https://randomuser.me/api/?results=3&gender=' + res, true);

  xhr.send();
}

function sum(){
  if (Array.isArray(male) && Array.isArray(female)) {
    const totalArr = [...male, ...female];

    console.log(totalArr);
    printHtml(totalArr);
  }
};

requestForUsers('male',successFn, errorFn);

requestForUsers('female', successFn, errorFn );


