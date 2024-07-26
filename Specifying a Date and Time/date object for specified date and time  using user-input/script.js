let year = parseInt(prompt("Enter the year"));
let month = parseInt(prompt("Enter the month")) - 1; 
let day = parseInt(prompt("Enter the day"));
let hours = parseInt(prompt("Enter the hours"));
let minutes = parseInt(prompt("Enter the minutes"));
let seconds = parseInt(prompt("Enter the seconds"));

let specificDate = new Date(year, month, day, hours, minutes, seconds);

console.log("The Date object is: " + specificDate);
