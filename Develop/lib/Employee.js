// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
    }

    getName(){
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithub () {
        return this.github;
    }

  }

  
module.exports = Employee