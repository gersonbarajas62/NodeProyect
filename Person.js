class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greating() {
        console.log(`My name is ${this.name} and i am ${this.age}`)
    };

   /* alert() {
        console.log(`you are ${this.age} and young`)
    }*/
}

module.exports = Person;