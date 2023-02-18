const inquirer = require("inquirer");
const fs = require("fs")
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const initQuestions = [
    {
        type: "input",
        name: "manager",
        message: "What is the Team Manager's name?"
    }, 
    {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID?"
    }, 
    {
        type: "input", 
        name: "managerEmail", 
        message: "What is the manager's email address?"
    },
    {
        type: "input",
        name: "number",
        message: "What is the manager's office number?"
    },
    {
        type: "list", 
        name: "choose",
        message: "How would you like to proceed?",
        choices: ["Add An Engineer", "Add An Intern", "Finish Building My Team"]
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "engineer",
        message: "What is the engineer's name?"
    }, 
    {
        type: "input",
        name: "engineerId",
        message: "What is the engineers's ID?"
    }, 
    {
        type: "input", 
        name: "engineerEmail", 
        message: "What is the engineers's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?"
    }
]

const internQuestions = [
    {
        type: "input",
        name: "intern",
        message: "What is the intern's name?"
    }, 
    {
        type: "input",
        name: "internId",
        message: "What is the intern's ID?"
    }, 
    {
        type: "input", 
        name: "internEmail", 
        message: "What is the intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "Where does the intern go to school?"
    }
]

const team = [];

function init() {

    if (team.length === 0) {
        inquirer.prompt(initQuestions).then((answers) => {
            team.push(answers);
        if(answers.choose == "Add An Engineer") {
            addEngineer();
        } else if(answers.choose == "Add An Intern") {
            addIntern();
        } else {
            createTeam(team);
        }
        })
    } else {
        inquirer.prompt(initQuestions[initQuestions.length -1]).then((answers) => {
        if(answers.choose == "Add An Engineer") {
            addEngineer();
        } else if(answers.choose == "Add An Intern") {
            addIntern();
        } else {
            createTeam(team);
        }           
        })
    }
}

function addEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        team.push(answers);
        init();
    })
}

function addIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        team.push(answers);
        init();
    })
}

function createTeam(team) {
    console.log(team)
    const createMembers = new Promise((resolve, reject) => {

        if (team.length > 0) {
            const createEmployees = team.map((member) => {
                if (member.manager) {
                    const name = member.manager
                    const id = member.managerId
                    const email = member.managerEmail
                    const officeNumber = member.number
                    const manager = new Manager(name, id, email, officeNumber)
                    return manager
                } else if (member.engineer) {
                    const name = member.engineer
                    const id = member.engineerId
                    const email = member.engineerEmail
                    const github = member.github
                    const engineer = new Engineer (name, id, email, github)
                    return engineer
                } else {
                    const name = member.intern
                    const id = member.internId
                    const email = member.internEmail
                    const school = member.school
                    const intern = new Intern (name, id, email, school)
                    return intern
                }        
            })
            resolve(createEmployees);
        } else {
            reject("no")
        }


    })

    createMembers.then((data) => {
        console.log(data)
    })
}


init(); 