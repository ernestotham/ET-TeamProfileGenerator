const inquirer =require("inquirer");
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const ManagerInfo = []
const EngineerListInfo = []
const InternListInfo = []


class runApp {

    constructor() {
        this.status = "started"

    }

    askForTeamMember() {

        return inquirer
            .prompt([
                {
                    type: "list",
                    name: 'TeamMember',
                    message: "Which type of team member would you like to add?",
                    choices: ['Engineer','Intern','I don\'t want to add any more team members' ],
                },
                
            ])
            .then(val=>{
                // console.log(val);
                return val

            });

    }


    askForEngineer() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: 'EngineerName',
                    message: "What is the team engineer's name?"
                },
                {
                    type: "input",
                    name: 'EngineerId',
                    message: "What is the team engineer's id?"
                },
                {
                    type: "input",
                    name: 'EngineerEmail',
                    message: "What is the team engineer's email?"
                },
                {
                    type: "input",
                    name: 'EngineerGithub',
                    message: "What is the team engineer's Github?"
                }
            ])
            .then((val) =>{
                console.log(val);
                EngineerListInfo.push(new Engineer(val['EngineerName'],val['EngineerId'],val['EngineerEmail'],val['EngineerGithub']))
                return val

            })
        

    }


        askForIntern() {
            return inquirer
                .prompt([
                    {
                        type: "input",
                        name: 'InternName',
                        message: "What is the team Intern's name?"
                    },
                    {
                        type: "input",
                        name: 'InternId',
                        message: "What is the team Intern's id?"
                    },
                    {
                        type: "input",
                        name: 'InternEmail',
                        message: "What is the team Intern's email?"
                    },
                    {
                        type: "input",
                        name: 'InternSchool',
                        message: "What is the team Intern's school?"
                    }
                ])    
                .then((val) =>{
                    console.log(val);
                    InternListInfo.push(new Intern(val['InternName'],val['InternId'],val['InternEmail'],val['InternSchool']))
                    return val

                })
        }

    
    moreMembers() {
            this.askForTeamMember().then(val =>{
                // console.log(val)

            
            
                    if(val['TeamMember'] == `I don't want to add any more team members`){
                    
                    }

                    else if(val['TeamMember'] == 'Engineer'){

                        this.askForEngineer().then(resp =>{
                            // console.log(resp)
                            this.moreMembers()
                            })
                        }

                    else if(val['TeamMember'] == 'Intern'){

                        this.askForIntern().then(resp =>{
                            // console.log(resp)
                            this.moreMembers()
                        })
                    }
            

            

                
            })
    }
    


    askForManager() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: 'managerName',
                    message: "What is the team manager's name?"
                },
                {
                    type: "input",
                    name: 'managerId',
                    message: "What is the team manager's id?"
                },
                {
                    type: "input",
                    name: 'managerEmail',
                    message: "What is the team manager's email?"
                },
                {
                    type: "input",
                    name: 'managerOfficeNumber',
                    message: "What is the team manager's office number?"
                }
            ])
            .then(val =>{

                console.log(val);
                ManagerInfo.push(new Manager(val['managerName'],val['managerId'],val['managerEmail'],val['managerOfficeNumber']))
                this.moreMembers()
                

            })
        
            
            
    }

        

    }

    

    app = new runApp()
    app.askForManager()
    