

// define person and create person1
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// 創建 Person 物件實例
const person1 = new Person('John', 66);
person1.sayHello();


// directly create person2
const person2 = {
    name: 'Jane',
    age: 30,
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person2.sayHello();