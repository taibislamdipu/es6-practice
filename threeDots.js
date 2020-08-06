
const fndAge = [10, 14, 22, 23, 18];
const uncleAge = [23, 47, 50, 24, 44];
const nanaAge = [64, 32, 20];

const allAge = [...fndAge, ...uncleAge, 27, ...nanaAge];

const maxValue = [250, 80, 650, 400]

//console.log(allAge);
const result = Math.max(...maxValue);
console.log(result);