'use strict'

const h1 = document.querySelector('h1');
const isError = () => Math.floor(Math.random()*11) < 5;
// const requestInfo = {
//   total: 2,
//   done: 0,
//   isError: false
// };
// let users = [];
// let countries = [];
//
// function registerRequest(isError) {
//   requestInfo.done++;
//
//   if (isError) {
//     requestInfo.isError = true;
//   }
//
//   if (requestInfo.total === requestInfo.done){
//     console.log('Done');
//   }
// }
function printInfo() {
  h1.innerText = 'Array are completely received';
  // console.log(users);
  // console.log(countries);
}

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
        printInfo();
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
      printInfo();
    }
  }, 500);
};

function errorHandler(error) {
  h1.innerText = error.message;
  console.log(error);
}
// function arrNew() {
//   const totalArr = users.map(user => {
//     const {country} = countries.find((currentValue) => currentValue.userId === user.id)
//     return {
//       ...user,
//       country
//     };
//     console.log(users);
//     console.log(countries);
//     console.log(totalArr);
//   })
// }

// requestForUsers(
//   u => {
//     users = [...u];
//     registerRequest(false);
//     arrNew();
//   },
//   err => {
//     registerRequest(true);
//     errorHandler();
//   });
//
// requestForCountries(
//   c => {
//     countries = [...c];
//     registerRequest(false);
//     arrNew();
//   },
//   err => {
//     registerRequest(true);
//     errorHandler();
//   });


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
    }, errorHandler  )

  }, errorHandler );

export {requestForUsers, requestForCountries}


