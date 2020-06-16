'use strict'

import {requestForUsers, requestForCountries} from './main2.js';

const h1 = document.querySelector('h1');
let users = [];
let countries = [];

const requestInfo = {
  total: 2,
  done: 0,
  isError: false
};

function registerRequest(isError) {
  requestInfo.done++;

  if (isError) {
    requestInfo.isError = true;
  }

  if(requestInfo.total === requestInfo.done) {
    printInfo(requestInfo.isError);
  }
};

function printInfo() {
  h1.innerText = 'Array are completely received';
  }

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
const totalArr = [];

requestForUsers(function (u) {
  printInfo();
  users = u;
  registerRequest(false);
}, errorHandler );

requestForCountries(function (c) {
  printInfo();
  countries = c;
  registerRequest(false);

  const totalArr = users.map(user => {
      const {country} = countries.find((currentValue) => currentValue.userId === user.id)
      return {
        ...user,
        country
      };
    console.log(totalArr);
    printHtml(totalArr);
    })
}, errorHandler );

function errorHandler(error) {
  h1.innerText = error.message;
  console.log(error);
}


// requestForUsers(function (users) {
//   printInfo();
//   requestForCountries(function (countries) {
//
//     printInfo();
//     const totalArr = users.map(user => {
//       const {country} = countries.find((currentValue) => currentValue.userId === user.id)
//       return {
//         ...user,
//         country
//       };
//       console.log(totalArr);
//     })
//     console.log(users);
//     console.log(countries);
//     printHtml(totalArr);
//   }, errorHandler  )
//
// }, errorHandler );


