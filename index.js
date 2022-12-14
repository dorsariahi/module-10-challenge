const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require("fs")
let team = []


function mainMenu() {
    inquirer.prompt(
        [
            {
                type: "list",
                name: "menu",
                message: "what whould you like to do?",
                choices: ["Add Engineer", "Add Intern", "Finish building the team"]
            },
        ]
    ).then(answers => {
        //if statement
        // inquirer prompt for engineer questions
    })
}

function startApplication() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "managersName",
                message: "What is the managers name?",
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is the Employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the managers email?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the managers office number?",
            },

        ]
    ).then(answers => {
        console.log("here where we add manager")
        let createManager = new Manager(answers.managersName, answers.employeeId, answers.email, answers.officeNumber)
        team.push(createManager)
        mainMenu()
    })
}
startApplication();