'use strict'

import {requestForUsers, requestForCountries} from './main2.js';

const isError = () => Math.floor(Math.random() * 10) < 0;
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
let totalArr = [];

requestForUsers(function (users) {
  for (let i=0; i<users.length; i++) {
    let u = users[i];
    let foundId = false;

    for (let j=0; j<totalArr.length; j++) {
      let total = totalArr[j];
      if (total.id === u.id) {
        total.fistName = u.fistName;
        total.lastName = u.lastName;
        foundId = true;
        break;
      }
    }
    if (!foundId) {
      totalArr.push({
        id: u.id,
        lastName: u.lastName,
        fistName: u.fistName
      });
    }
  }
  printInfo();
  registerRequest(false);
}, errorHandler );

requestForCountries(function (countries) {
  for (let i=0; i<countries.length; i++) {
    let c = countries[i];
    let foundId = false;

    for (let j=0; j<totalArr.length; j++) {
      let total = totalArr[j];
      if (total.id === c.userId) {
        total.country = c.country;
        foundId = true;
        break;
      }
    }
    if (!foundId) {
      totalArr.push({
        id: c.userId,
        country: c.country
      });
    }
  }
  printInfo();
  registerRequest(false);
}, errorHandler );

  console.log(totalArr);
  printHtml(totalArr);

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


