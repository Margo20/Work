var el = document.body;
var btn = document.getElementsByClassName('l-tasks__btn_toggle');

var clickHandler = function(){
  el.classList.toggle('_color-schemie-light');
}
btn[0].addEventListener('click',clickHandler);

var btn1 = document.getElementsByClassName('l-tasks__btn_remove');
var sp = document.getElementsByClassName('l-tasks__span');
var removeSp = function(){
  // for (var i = 0; i < classList.length; i++){
     if(document.body.classList.contains('_color-schemie-light')){

      sp[sp.length-1].remove('l-tasks__span'); 
      btn1[0].removeEventListener('click',removeSp);
     }
     else{
      sp[0].remove('l-tasks__span');}
      btn1[0].removeEventListener('click',removeSp);
    }

btn1[0].addEventListener('click',removeSp);

var result = (function(num) {
  
  if( typeof num ==='number' && num % 2==0){
    document.getElementsByClassName('l-tasks__item-text')[0].textContent ='This is a number:'+' ' + num +' '+'even';
  }
  else
    if(typeof num ==='number' && num % 2!==0){
     document.getElementsByClassName('l-tasks__item-text')[0].textContent ='This is a number:'+' ' + num +' '+'odd';
  } 
    else {
     document.getElementsByClassName('l-tasks__item-text')[0].textContent ='This is not a number';
   };
  }(9));
  