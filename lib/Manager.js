const Employee = require('./employee');

class Manager extends Employee {
    constructor(name = '', id = 0, email = '', officeNumber = 0) {
      super(name,id,email,"Manager");
      this.officeNumber = officeNumber;
      
    }
  
    getOfficeNumber() {
      return this.officeNumber
    }
  
  
  }
  

  module.exports = Manager;