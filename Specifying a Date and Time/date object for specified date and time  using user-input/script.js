let year = parseInt(prompt("Enter the year (e.g., 2022):"));
let month = parseInt(prompt("Enter the month (1-12):")) - 1; 
let day = parseInt(prompt("Enter the day (1-31):"));
let hours = parseInt(prompt("Enter the hours (0-23):"));
let minutes = parseInt(prompt("Enter the minutes (0-59):"));
let seconds = parseInt(prompt("Enter the seconds (0-59):"));

let specificDate = new Date(year, month, day, hours, minutes, seconds);

console.log("The Date object is: " + specificDate);
