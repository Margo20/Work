var body = document.body;
var form = document.querySelector('.f-default');
var butt = document.querySelector('.f-default__btn');

body.addEventListener('click', function(e){
    e.stopImmediatePropagation();
    console.log('BODY_1');
});

body.addEventListener('click', function() {
    console.log('BODY_2');
});

body.addEventListener('click', function() {
    console.log('BODY_3');
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var emailValue = e.target.elements.email.value;
    var passwordValue = e.target.elements.password.value;

    if (!emailValue || !passwordValue) {
        alert('Поля не должны быть пустыми');
    } else if (passwordValue && passwordValue.length < 10) {
        alert('Параль должен быть не меньше 10 символов');
    }
});

butt.addEventListener('click', function(e){
    e.stopPropagation();
});





