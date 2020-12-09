// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js")

class Manager extends Employee {
    getName() {
        return this.name;
    }
    getID(){
        return this.id;
    };
    getEmail(){
        return this.email;
    }
    getGithub(){
        return this.github;
    };
    getRole() {
        return Engineer
    }
}

module.exports = Manager