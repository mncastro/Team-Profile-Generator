// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js")

class Engineer extends Employee {
    const (name, id, email, github) {
        getName(name);
        getID(id);
        getEmail(email);
        this.github = github;
    } 

    getGithub() {
        return this.github
    }

    getRole() {
        return Engineer
    }
}

module.exports = Engineer