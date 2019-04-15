let elem = document.getElementById('picOfCat');
let elem2 = document.getElementById('picOfKitty');
let movesNumber = document.getElementById('finalClicks');
let counter = 0;

elem.addEventListener('click', function(){
  counter = counter + 1
  movesNumber.innerHTML = counter;
}, false);

elem2.addEventListener('click', function(){
  counter = counter + 1
  movesNumber.innerHTML = counter;
}, false);
