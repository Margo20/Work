'use strict'

const requestForCountries = function (cb) {
  const countries = [
    {
      userId: 44,
      country: 'Germany'
    },
    {
      userId: 1,
      country: 'Canada'
    },
    {
      userId: 342,
      country: 'Brazil'
    },
    {
      userId: 24,
      country: 'Denmark'
    },
    {
      userId: 2,
      country: 'Ireland'
    }
  ];

  setTimeout(function () {
    cb(countries);
  }, 500);
};

const requestForUsers = function (cb) {
  const users = [
    {
      id: 1,
      fistName: 'Chloe',
      lastName: 'Snyder'
    },
    {
      id: 44,
      fistName: 'Valdemar',
      lastName: 'Larsen'
    },
    {
      id: 342,
      fistName: 'Curtis',
      lastName: 'Garza'
    },
    {
      id: 2,
      fistName: 'Sedef',
      lastName: 'Sezek'
    },
    {
      id: 24,
      fistName: 'Emile',
      lastName: 'Taylor'
    }
  ];
  setTimeout(function () {
    cb(users);
  }, 500);
};

requestForUsers(function (users) {

  requestForCountries(function (countries) {
    // console.log(countries);
    // console.log(users);
  });
});

  const totalArr = users.map (user => {
    const country = countries.find((currentValue) => currentValue.userId === users[i].id)

    return {
      ...users[i],
      country
    };
    console.log(totalArr);
  })

const country = countries.find((currentValue) => currentValue.userId === users[i].id)



    function createList() {
      return document.createElement('ul');
    };

    function createListItem({ fistName, lastName, country }) {
    const li = document.createElement('li');
      li.innerText = `fistName: ${text1} , lastName: ${text2} , country: ${text3}`;

      return li;
    };

    totalArr.forEach(function (x) {
      const ul = createList();
      const li = createListItem(x.fistName, x.lastName, x.country);

      ul.appendChild(li);
      document.body.appendChild(ul);
    });
//     //
//     // export {requestForUsers}
//     // export default requestForCountries;
//   });
// });