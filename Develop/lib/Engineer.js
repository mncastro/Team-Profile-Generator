// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js")

class Engineer extends Employee {
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

module.exports = Engineer