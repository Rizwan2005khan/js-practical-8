let currentDate = new Date();

let type = prompt("Enter the type of modification");

let amount = parseInt(prompt("Enter the amount to add or subtract"));

if (type === 'days') {
    currentDate.setDate(currentDate.getDate() + amount);
} else if (type === 'hours') {
    currentDate.setHours(currentDate.getHours() + amount);
} else if (type === 'minutes') {
    currentDate.setMinutes(currentDate.getMinutes() + amount);
} else {
    console.log("Invalid type specified. Please use 'days', 'hours', or 'minutes'.");
}

console.log(currentDate);
