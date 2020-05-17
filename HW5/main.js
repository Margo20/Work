var body = document.body;
var form = document.querySelector('form');

body.addEventListener('click', function(e){
    event.stopImmediatePropagation();
    console.log ('BODY_1');
});

body.addEventListener('click', function(e) {
    console.log ('BODY_2');
});

body.addEventListener('click', function(e) {
    console.log ('BODY_3');
});

form.addEventListener('submit', function(e) {

    var emailValue = e.target.elements.email.value;
    var passwordValue = e.target.elements.password.value;

    if (passwordValue && passwordValue.length < 10) {
        alert ('Параль должен быть не меньше 10 символов');
    }
});



