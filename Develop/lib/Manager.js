// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor (name, id, email, officenumber) {
        super (name, id, email);
        this.officenNumber = officeNumber;
    } 

    getOfficeNumber() {
        this.officenumber
    }

    getRole() {
        return Manager
    }
}

module.exports = Manager