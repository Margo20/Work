'use strict'

let su = function (x) {
};
let er = function (a, b) {
};

const requestForUsers = function (pp, success, error) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        success(xhr.response);

        console.log(JSON.parse(xhr.response));
      } else {
        error(xhr.status, xhr.responseText);
      }
    }
  }

  xhr.open('GET', 'https://randomuser.me/api/?results=3&gender=' + pp, true);

  xhr.send();
}

requestForUsers('male', su, er);

requestForUsers('female', su, er);