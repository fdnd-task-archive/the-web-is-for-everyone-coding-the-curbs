// Module Wrapper Fucntion
// (function (exports, require, module, __filename, __dirname){

// })

const person = {
    name: 'Matthijs Blauw',
    age: 30
}

class Persoon{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

module.exports = Persoon