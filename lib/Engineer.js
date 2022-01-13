const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
      super(name,id,email);
      this.github = gitHub;
      role = "Engineer"
    }
  
    GetGitHub() {
      return this.github
    }
  
    
  }
  