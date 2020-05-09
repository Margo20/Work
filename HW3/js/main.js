var body = document.body;
var btnToggle = document.getElementsByClassName('l-tasks__btn _toggle')[0];
var btnRemove = document.getElementsByClassName('l-tasks__btn _remove')[0];
var spansArray = document.getElementsByClassName('l-tasks__span');
var itemText = document.getElementsByClassName('l-tasks__item-text')[0];
var changeOfSubjectHandler = function(){
  body.classList.toggle('_color-schemie-light');
}
var removeSpanHandler = function(){
     if(body.classList.contains('_color-schemie-light')){
      spansArray[spansArray.length-1].remove(); 
     } else{
      spansArray[0].remove();
    }

      btnRemove.removeEventListener('click',removeSpanHandler);
    }

  btnRemove.addEventListener('click',removeSpanHandler);
  btnToggle.addEventListener('click',changeOfSubjectHandler);

    ;(function(num) {
    var type = 'even';

      if( typeof num !=='number'){
         
        return itemText.textContent ='This is not a number';
      }

      if(num % 2!==0){
        type = 'odd';
      } 
        
      itemText.textContent ='Number '+ num +' is '+ type;
       
      }(1));


