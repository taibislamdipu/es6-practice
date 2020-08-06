
//function 1
function dubleIt(num) {
    return num * 2;
}

// shortcut of function 1
const dubleIt2 = function myNum(num) {
    return num * 2;
}

// single line shortcut of function 1
const dubleIt3 = num => num * 2; // arrow function

const add = (num1, num2) => num1 + num2; // arrow function for multiple input parameter

const give5 = () => 5; // arrow function, always return 5

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    return result;
}

const result = dubleIt(25);
const result2 = add(5, 10);
const result3 = give5();
const result4 = doMath(7, 3);
console.log(result4);

