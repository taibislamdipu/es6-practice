

const person = { name: 'ema watson', age: 23, phone: 01717112211, address: 'Dhaka Bangladesh', friends: ['rohim', 'korim', 'mubin', 'kubin', 'subin'] };

/* const name = person.name;
const age = person.age; */

const { name, age, address, bfName } = person; // single line er moddhe same kaj ta kora

console.log(name, age, bfName, address);
const friend = ['sakib khan', 'amir khan', 'salman khan', 'sharukh khan', 'dipjol khan'];

// useing three dot method
const [desiFriend, indianFrined, ...bakishobFriend] = friend;
console.log(desiFriend, bakishobFriend);

// value pick from nested variable
const complexObject = {
    name: 'Mamun',
    info: {
        leader: 'Tiger Lemon',
        address: 'Dhaka Bangladesh'
    }
}
const { leader } = complexObject.info;
console.log(leader);