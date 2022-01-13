class Employee {
    
    constructor(name='', id=0, email='',role="Employee") {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }
  
    getName() {
      return this.name
    }

    getId(){
        return this.id

    }

    getEmail(){
        return this.email

    }

    getRole(){
        return this.role

    }    
  }
  
  emp = new Employee()

  module.exports = Employee;
  