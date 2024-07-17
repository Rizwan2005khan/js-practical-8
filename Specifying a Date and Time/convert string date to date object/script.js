let inputDateTime = prompt("Enter a date and time (YYYY-MM-DD HH:MM:SS):");

let [datePart, timePart] = inputDateTime.split(' ');

let [year, month, day] = datePart.split('-');

let [hours, minutes, seconds] = timePart.split(':');

let specificDate = new Date(year, month - 1, day, hours, minutes, seconds);

console.log("The Date object is: " + typeof specificDate);
