'use strict'
const isError = () => Math.floor(Math.random() * 10) < 0;
import {requestForUsers, requestForCountries} from './main2.js';

const h1 = document.querySelector('h1');
const totalArr = [];
let users;
let countries;

function createList() {
  return document.createElement('ul');
};

function createListItem({fistName, lastName, country}) {
  const li = document.createElement('li');
  li.innerText = `${fistName} ${lastName}, ${country}`;

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
function getSomething() {
  if (Array.isArray(users) && Array.isArray(countries)) {
    const totalArr = users.map(user => {
      const {country} = countries.find((currentValue) => currentValue.userId === user.id)
      return {
        ...user,
        country
      };
    })
    console.log(totalArr);
    printInfo();
    printHtml(totalArr);
  }
}

requestForUsers(function (res) {
  users = res;
  getSomething();
}, errorHandler );

requestForCountries(function (res) {
  countries = res;
  getSomething();
}, errorHandler );

function errorHandler(error) {
  h1.innerText = error.message;
  console.log(error);
}

function printInfo() {
  h1.innerText = 'Array are completely received';
}