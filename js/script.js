const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const currentMonthEl = document.querySelector('h2');

console.dir(document.body);

currentMonthEl.innerText = 
currentYear.toString()  + ' / ' + currentDate.toLocaleString('eng', {month : 'long'}) ;
