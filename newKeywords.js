///    //    /// ///   class to objects
class person{
    constructor(firstName, lastName, salary){
        this.fName = firstName;
        this.lName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new person('Hero', "Alom", 23000);
const normalPerson = new person('Shakib', 'Al Hasan', 34676787);
console.log(heroPerson);
console.log(normalPerson);

// unnecessary thing after es6
function person1(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}
const playerPerson = new person1('Messi', 34, 345678904212);
console.log(playerPerson);