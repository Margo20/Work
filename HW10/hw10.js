'use strict'

const requestForUsers = function (success, error) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        success(xhr.response);
        // console.log(xhr.response);

        console.log(JSON.parse(xhr.response));
      } else {
        error();
      }
    }
  }

  xhr.open('GET', 'https://randomuser.me/api/?results=3&gender=male', true);

  xhr.send();
}
requestForUsers(function (uuu) {});

const requestForUsers1 = function (success, error) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        success(xhr.response);
        // console.log(xhr.response);

        console.log(JSON.parse(xhr.response));
      } else {
        error();
      }
    }
  }

  xhr.open('GET', 'https://randomuser.me/api/?results=3&gender=female', true);

  xhr.send();
}
requestForUsers1(function (rrr) {});