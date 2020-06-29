'use strict'

let male;
let female;
const conteiner = document.getElementsByClassName('conteiner')[0];

const errorFn = function (err) {
  console.log(err);
};

function createList() {
  return  document.createElement('ul');
   ul.classList.add('outer');
};

function createListItem({name, picture, email, gender, login }) {
  const li = document.createElement('li');
  li.classList.add('user');
  li.innerHTML = `<div   class="${gender}" >
            <button type = "button" class = "user-btn.remove" data-id = "${login.uuid}">
            X
            </button>
                      <div class="user__inner-info">
                      <img src="${picture.large}" alt="user img">
                      <h3 >${name.title} ${name.first} ${name.last}</h3>
                      <p>${email}</p>
                  </div>
            </div>`;
  return li;
};

function printHtml(arr) {
  const ul = createList();

  arr.forEach(function (el) {
    const li = createListItem(el);

    ul.appendChild(li);
  });
  conteiner.appendChild(ul);
  document.getElementsByClassName('preloader')[0].remove();
};

const requestForUsers = function (res, success, error) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        success(JSON.parse(xhr.response));

        console.log(JSON.parse(xhr.response));
      } else {
        error({
          code: xhr.status,
          message: xhr.responseText
          });
      }
    }
  }

  xhr.open('GET', 'https://randomuser.me/api/?results=3&gender' + res);

  xhr.send();
}

function sum(){
  if (Array.isArray(male) && Array.isArray(female)) {
    const totalArr = [...male, ...female];

    console.log(totalArr);
    printHtml(totalArr);
  }
};

requestForUsers('male',function ({results}) {
  male = results;
  sum();
}, errorFn);

requestForUsers('female', function ({results}) {
  female = results;
  sum();
}, errorFn );





