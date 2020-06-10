  'use strict'

  function createTotalArr(arr1, arr2){
    let totalArr = [];

    for (let i=0; i < arr1.length; i++) {

      for (let j=0; j < arr2.length; j++) {

        if (arr1[i].id === arr2[j].userId) {
          //console.log("find: i = " + i + ", j = " + j + ", ID =" + arr1[i].id);

          let newObj1 = Object.assign({}, arr1[i]);
          let newObj2 = Object.assign({}, arr2[j]);
          let newObj = {
            ...newObj1,
            ...newObj2
          }

          totalArr.push(newObj);

          break;
        }
      }
    }
      console.log(totalArr);
    }

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

      createTotalArr(users, countries);
    }, 500);
  }, 500);



  // var arr = [" firstName", " lastName", " country"];
  // html = '<ul>';
  // arr.forEach(function(item, i, arr) {
  //   html += '<li>'+item+'</li>';
  // });
  // html += '</ul>'
  //
  // document.write(html);

  // export {createTotalArr}
  // export default setTimeout

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

