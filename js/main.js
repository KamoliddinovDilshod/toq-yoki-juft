var elForm = document.querySelector(".section__form");
var elInput = document.querySelector(".section__input");
var elBtn = document.querySelector(".section__btn");
var elResult = document.querySelector(".section__span");

elForm.addEventListener("submit" , function(evt){
  evt.preventDefault();
  elInputVal = elInput.value;
  if(elInputVal%2==0){
    elResult.textContent= 'Juft son';
    elResult.classList.add("span__style");
    coup = numberCoup.push(elInputVal);
    console.log(numberCoup);
  }
  else{
    elResult.textContent= 'Toq son';
    elResult.classList.add("span__style");
    odd = numberOdd.push(elInputVal);
    console.log(numberOdd);
  }

  elInput.value = null;
})

var numberOdd =[1 , 3, 5, 7, 9 ,];
var numberCoup = [2 , 4 , 6 , 8 , 10 ,];