const inquirer = require("inquirer");

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
        message: "What is the engineer's gitHub username?"
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
    console.log(team)

    if (team.length === 0) {
        inquirer.prompt(initQuestions).then((answers) => {
            team.push(answers);
        if(answers.choose == "Add An Engineer") {
            addEngineer();
        } else if(answers.choose == "Add An Intern") {
            internQuestions();
        } else {
            return team;
        }
        })
    } else {
        inquirer.prompt(initQuestions[initQuestions.length -1]).then((answers) => {
        if(answers.choose == "Add An Engineer") {
            addEngineer();
        } else if(answers.choose == "Add An Intern") {
            addIntern();
        } else {
            console.log(team);
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

init(); 