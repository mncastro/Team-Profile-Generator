// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js")

class Manager extends Employee {
    const (name, id, email, officenumber) {
        getName(name);
        getID(id);
        getEmail(email);
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