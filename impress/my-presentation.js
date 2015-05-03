var elemNext = document.getElementById('nxt');
elemNext.addEventListener('click',function() {
  impress().next();
}, false);

var elemPrev = document.getElementById('prv');
elemPrev.addEventListener('click',function() {
  impress().prev();
}, false);

var delayMs = 4000;
var elemEnd = document.getElementById('end');
elemEnd.addEventListener('click',function() {
  impress().goto('last-slide', delayMs); // Takes step ID or zero based step index
}, false);
