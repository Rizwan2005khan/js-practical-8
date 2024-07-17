let myVar = parseFloat(prompt("Enter a number:"));

let decimalPlaces = parseInt(prompt("Enter the number of decimal places:"));

let fixedNumber = myVar.toFixed(decimalPlaces);

console.log(fixedNumber);
