'use strict'
const isError = () => Math.floor(Math.random()*10) < 5;

const requestForCountries = function (success, error) {
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
    if (isError()) {
      error({
        code: 500,
        message: 'Internal server Error'
      });
    } else {
        success(countries);
      }
  }, 500);
};

const requestForUsers = function (fnSuccess, fnError) {
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
    if (isError()) {
      fnError({
        code: 500,
        message: 'Internal server Error'
      });
    } else {
      fnSuccess(users);
    }
  }, 500);
};

export {requestForUsers, requestForCountries}


