const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name = '', id = 0, email = '', gitHub = "") {
        super(name,id,email,"Engineer");
        this.gitHub = gitHub;
            
    }
  
    getGithub() {
      return this.gitHub
    }
  
   

  }
  


  module.exports = Engineer;