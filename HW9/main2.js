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
      const {country} = countries.find((currentValue) => currentValue.userId === user.id)

      return {
        ...user,
        country
      };
      console.log(totalArr);
    })
    console.log(users);
    console.log(countries);
  });
});
export {requestForUsers, requestForCountries}