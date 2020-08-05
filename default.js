
// function add(num1, num2) {
//     // if (num2 == undefined) {  
//     //     num2 = 0;
//     // }
//     num2 = num2 || 0; // line 3,4,5 er shortcut
//     return total = num1 + num2;
// }

// const result = add(11)
// console.log(result);

function add(num1, num2 = 20) { // ES6 er features, direct parameter er moddhe value set kora jabe. 
    const result = num1 + num2;
    return result;
}

const total = add(6, 3);
console.log(total);