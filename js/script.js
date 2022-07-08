const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const currentMonthEl = document.querySelector('h2');

console.dir(document.body);

currentMonthEl.innerText = 
currentYear.toString()  + ' / ' + currentDate.toLocaleString('eng', {month : 'long'}) ;

const firstDateOfMonth = new Date (currentDate);

firstDateOfMonth.setDate(1);

const lastDateOfMonth = new Date(firstDateOfMonth);
lastDateOfMonth.setMonth(lastDateOfMonth.getMonth()+1);
lastDateOfMonth.setDate(0);

console.dir (firstDateOfMonth);
console.dir (lastDateOfMonth);