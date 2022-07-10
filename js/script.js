const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const currentMonthEl = document.querySelector('h2');
const currentMonthDatesEl = document.querySelector('.dates__numbers')
 

currentMonthEl.innerText = 
currentYear.toString()  + ' / ' + currentDate.toLocaleString('eng', {month : 'long'}) ;

const firstDateOfMonth = new Date (currentDate);

firstDateOfMonth.setDate(1);

const lastDateOfMonth = new Date(firstDateOfMonth);
lastDateOfMonth.setMonth(lastDateOfMonth.getMonth()+1);
lastDateOfMonth.setDate(0);

firstDateOfMonthDay = firstDateOfMonth.getDay();

lastDateOfMonthDay = lastDateOfMonth.getDate();
console.dir (firstDateOfMonth);
console.dir (lastDateOfMonth);
console.dir (firstDateOfMonthDay);
console.dir (lastDateOfMonthDay);
console.dir (getAllDays);
console.log(typeof (lastDateOfMonthDay));

let days ;
function getAllDays(currentMonth){
for (i = 1; i <= lastDateOfMonthDay; i++){
    days += `<li>${i}</li>`;
 }
};

getAllDays.innerHTML = days;

currentMonthDatesEl.innerHTML = days;


