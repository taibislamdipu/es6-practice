

class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'Dhaka school'
    }
}

const student1 = new Student(1, 'Shuvo');
const student2 = new Student(2, 'Mahi');

console.log(student1, student2); // access full info of the object
console.log(student1.name, student2.name); // access specific info of the object