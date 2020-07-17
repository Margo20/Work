'use strict'

const conteiner = document.getElementsByClassName('conteiner')[0];
const male = fetch('https://randomuser.me/api/?results=3&gender=male');
const female = fetch('https://randomuser.me/api/?results=3&gender=female');

Promise.all([male,female])
  .then(
    res => {
      const users = res.map(item => item.json());

      return Promise.all(users);
    }
  )
  .then(
    res => {
      console.log('Raw Data: ', res);

      const [male, female] = res;
      const union = [
        ...male.results,
        ...female.results
      ];
      printHtml(union);

      console.log('Union of the arrays: ', union);
    }
  );

function createList() {
  return  document.createElement('ul');
}

function createListItem({name, picture, email, gender, login }) {
  const li = document.createElement('li');
  li.classList.add('user');
  li.innerHTML = `<div   class="${gender}" >
            <button type = "button" class = "user-btn_remove" data-id = "${login.uuid}">
            X
            </button>
            <div class="user__inner">
                <img src="${picture.large}" alt="user img">
                      <div class="user__inner-info">

                      <h3 >${name.title} ${name.first} ${name.last}</h3>
                      <p>${email}</p>
                  </div>
            </div>`;
  return li;
}

function printHtml(arr) {
  const ul = createList();
  ul.classList.add('l-users');

  arr.forEach(function (el) {
    const li = createListItem(el);

    ul.appendChild(li);
  });
  conteiner.appendChild(ul);

  document.getElementsByClassName('preloader')[0].remove();

  let btn_remove = document.querySelectorAll('.user-btn_remove');
  btn_remove.forEach(function (el) {

    fetch('https://httpstat.us/200', {
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlcoder"
      },
      body: `{${id}}`

      })
      .then(response => response.json())
      .then(el.onclick = function (e) {
        let user = e.target.closest('.user');
        user.remove();

        console.log(e);
      })
      .catch(error => {
        console.log('Request filed', error);
      })
  })
}
