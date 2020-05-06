var body = document.body;
var btnToggle = document.getElementsByClassName('l-tasks__btn _toggle');
var btnRemove = document.getElementsByClassName('l-tasks__btn _remove');
var spansArray = document.getElementsByClassName('l-tasks__span');
var clickHandler = function(){
  body.classList.toggle('_color-schemie-light');
}
  btnToggle[0].addEventListener('click',clickHandler);

var removeSpanHandler = function(){
     if(body.classList.contains('_color-schemie-light')){
      spansArray[spansArray.length-1].remove('l-tasks__span'); 
      btnRemove[0].removeEventListener('click',removeSpanHandler);
     }
     else{
      spansArray[0].remove('l-tasks__span');}
      btnRemove[0].removeEventListener('click',removeSpanHandler);
    }
  btnRemove[0].addEventListener('click',removeSpanHandler);
;(function(num) {
  if( typeof num ==='number' && num % 2===0){
    document.getElementsByClassName('l-tasks__item-text')[0].textContent ='Number'+' '+ num +' '+'is'+' '+'even';
  }
  else
    if(typeof num ==='number' && num % 2!==0){
     document.getElementsByClassName('l-tasks__item-text')[0].textContent ='Number'+' '+ num +' '+'is'+' '+'odd';
  } 
    else {
     document.getElementsByClassName('l-tasks__item-text')[0].textContent ='This is not a number';
   };
  }(1));
  