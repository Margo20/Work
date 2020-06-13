'use strict'

import {requestForUsers, requestForCountries} from './main2.js';

console.log(requestForUsers, requestForCountries)

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

  arr.forEach(function (x) {
    const li = createListItem(x);

    ul.appendChild(li);
  });
  printHtml(arr);
  document.body.appendChild(ul);
}







