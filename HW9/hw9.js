'use strict'
const isError = () => Math.floor(Math.random() * 10) < 0;
import {requestForUsers, requestForCountries} from './main2.js';

const h1 = document.querySelector('h1');
const totalArr = [];
let users;
let countries;

// const requestInfo = {
//   total: 2,
//   done: 0,
//   isError: false
// };
//
// function registerRequest(isError) {
//   requestInfo.done++;
//
//   if (isError) {
//     requestInfo.isError = true;
//   }
//
//   if(requestInfo.total === requestInfo.done) {
//     printInfo(requestInfo.isError);
//   }
// };

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
function getSomething(newUsers, newCountries) {
  if (newUsers !== undefined) {
    users = newUsers;
  }
  if (newCountries !== undefined) {
    countries = newCountries;
  }

  if (users !== undefined && countries !== undefined){
    const totalArr = users.map(user => {
      const {country} = countries.find((currentValue) => currentValue.userId === user.id)
      return {
        ...user,
        country
      };
      console.log(totalArr);
      printInfo();
    })
    printHtml(totalArr);
  }
}

requestForUsers(function (users) {
  getSomething(users, undefined);

  // registerRequest(false);
}, errorHandler );

requestForCountries(function (countries) {
  getSomething(undefined,countries );

  // registerRequest(false);
}, errorHandler );

function errorHandler(error) {
  h1.innerText = error.message;
  console.log(error);
}

function printInfo() {
  h1.innerText = 'Array are completely received';
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


