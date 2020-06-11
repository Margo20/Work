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
    const totalArr = users.map(user => {
      let i;
      const country = countries.find((currentValue) => currentValue.userId === user.id)

      return {
        ...user,
        country: country.country
      };
    })

    function createList() {
      return document.createElement('ul');
    };

    function createListItem({fistName, lastName, country}) {
      const li = document.createElement('li');
      li.innerText = `${fistName} ${lastName}, ${country}`;

      return li;
    };

    totalArr.forEach(function (x) {
      const ul = createList();
      // const li = createListItem(x.fistName, x.lastName, x.country);
      const li = createListItem(x);

      ul.appendChild(li);
      document.body.appendChild(ul);
    });

    console.log(totalArr);
    console.log(countries);
    console.log(users);
  });
});
export {requestForUsers}
export default requestForCountries;


