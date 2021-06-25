const normalPerson = {
    firstName : "Shakib",
    lastName : "AL Hasan",
    salary : 20000,
    getFullName : function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
const heroPerson = {
    firstName : "Hero",
    lastName : "Alom",
    salary : 30000
}
const friendlyPerson = {
    firstName : "Hero",
    lastName : "Alom",
    salary : 50000
}

// //bind
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(5000);
// heroChargeBill(5000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(5000);
// console.log(friendlyPerson.salary);

// console.log(normalPerson.salary);


// // call
// normalPerson.chargeBill.call(heroPerson, 300, 30, 70);
// normalPerson.chargeBill.call(heroPerson, 600, 30, 70);
// console.log(heroPerson.salary);


// apply
normalPerson.chargeBill.apply(heroPerson, [300, 30, 70]);
normalPerson.chargeBill.apply(heroPerson, [900, 30, 70]);
console.log(heroPerson.salary);

console.log(normalPerson.salary);