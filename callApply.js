const normalPerson = {
    firstName : "Shakib",
    lastName : "AL Hasan",
    salary : 20000,
    getFullName : function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }

}
console.log(normalPerson.lastName);

normalPerson.chargeBill(5000);
normalPerson.chargeBill(5000);
console.log(normalPerson.salary);
