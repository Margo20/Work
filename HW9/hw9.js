  'use strict'

  setTimeout(function () {
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
    let j;

    for (j = 0; j <= users.length; j++) {
      const r = Object.values(users[j]);
      console.log(r);
    }

    setTimeout(function () {
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
      let i;

      for (i = 0; i <= countries.length; i++) {
        const d = Object.values(countries[i]);
        console.log(d);
      }
    }, 2000);

  }, 2000);

  let arr = [];
  if ((users[j].id) === (countries[i].id)) {
    const newObject = {
      ...users,
      country: Object.values(countries[i])
    };
    arr.push(newObject);
    console.log(arr);
  } ;

  // var arr = [" firstName", " lastName", " country"];
  // html = '<ul>';
  // arr.forEach(function(item, i, arr) {
  //   html += '<li>'+item+'</li>';
  // });
  // html += '</ul>'
  //
  // document.write(html);

  export {request}
  export default request1

  // function createList() {
  //   return document.createElement('ul');
  // }
  // function createListItem(text) {
  //   const li = document.createElement('li')
  //   li.innerText = text;
  //
  //   return li;
  // }

  // request(0,function(x0) {
  //   const ul = createList();
  //   const li = createListItem(x0);
  //
  //   ul.appendChild(li);
  //   document.body.appendChild(ul);
  //
  //   // console.log(x0);
  //
  //   request(1,function(x1) {
  //     // console.log(x1);
  //     ul.appendChild(createListItem(x1)
  //     );
  //     document.body.appendChild(ul);
  //
  //     request(2, function (x2) {
  //       // console.log(x2);
  //       ul.appendChild(createListItem(x2)
  //       );
  //       document.body.appendChild(ul);
  //     });
  //   });
  // });

