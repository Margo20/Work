var body = document.body;
var btnToggle = document.getElementsByClassName('l-tasks__btn _toggle')[0];
var btnRemove = document.getElementsByClassName('l-tasks__btn _remove')[0];
var spansArray = document.getElementsByClassName('l-tasks__span');
var changeOfSubjectHandler = function(){
  body.classList.toggle('_color-schemie-light');
}
var removeSpanHandler = function(){
     if(body.classList.contains('_color-schemie-light')){
      spansArray[spansArray.length-1].remove(); 
      btnRemove.removeEventListener('click',removeSpanHandler);
     }
     else{
      spansArray[0].remove();
    }
      btnRemove.removeEventListener('click',removeSpanHandler);
    }

  btnRemove.addEventListener('click',removeSpanHandler);
  btnToggle.addEventListener('click',changeOfSubjectHandler);

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
  }(12));
  