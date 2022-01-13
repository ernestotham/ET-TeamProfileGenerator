const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


emp = new Employee()
man = new Manager()
eng = new Engineer()
int = new Intern()

console.log(emp)
console.log(emp.getEmail())
console.log(emp.getRole())

console.log(man)
console.log(man.getEmail())
console.log(man.getRole())

console.log(eng)
console.log(eng.getEmail())
console.log(eng.getRole())

console.log(int)
console.log(int.getEmail())
console.log(int.getRole())