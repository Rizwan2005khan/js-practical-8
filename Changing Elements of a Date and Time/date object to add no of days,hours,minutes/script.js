let currentDate = new Date();

let type = prompt("Enter the type of modification (days, hours, or minutes):");

let amount = parseInt(prompt("Enter the amount to add or subtract (for subtraction use negative numbers):"));

if (type === 'days') {
    currentDate.setDate(currentDate.getDate() + amount);
} else if (type === 'hours') {
    currentDate.setHours(currentDate.getHours() + amount);
} else if (type === 'minutes') {
    currentDate.setMinutes(currentDate.getMinutes() + amount);
} else {
    console.log("Invalid type specified. Please use 'days', 'hours', or 'minutes'.");
}

console.log("The new date and time is: " + currentDate);
