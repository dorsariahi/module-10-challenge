const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require("fs");
const { type } = require("os");
let team = []
const generateHtmlPage = require("./src/generateHtmlPage")

function mainMenu() {
    inquirer.prompt(
        [
            {
                type: "list",
                name: "menu",
                message: "what whould you like to do next?",
                choices: ["Add Engineer", "Add Intern", "Finish building the team"]
            },
        ]
    ).then(answers => {
        console.log(answers.menu)
        if (answers.menu == "Add Engineer") {
            inquirer.prompt(
                [
                    {
                        type: "input",
                        name: "engineersName",
                        message: "What is the engineers name?",
                    },
                    {
                        type: "input",
                        name: "employeeId",
                        message: "What is the engineer ID?",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the engineers email?",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the GitHub username?",
                    },
                ]
            ).then(answers => {
                console.log("here where we add Engineer")
                let createEngineer = new Engineer(answers.engineersName, answers.employeeId, answers.email, answers.github)
                team.push(createEngineer)
                mainMenu()
            })
        }
        if (answers.menu == "Finish building the team") {
            console.log("here is your team")
            console.log(team)
            generateHtmlPage(team)
        }
        if (answers.menu == "Add Intern") {
            inquirer.prompt(
                [
                    {
                        type: "input",
                        name: "internsName",
                        message: "What is the Interns name?",
                    },
                    {
                        type: "input",
                        name: "employeeId",
                        message: "What is the Intern ID?",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the Intern email?",
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What is the school name?",
                    },
                ]
            ).then(answers => {
                console.log("here where we add Intern")
                let createIntern = new Intern(answers.internsName, answers.employeeId, answers.email, answers.school)
                team.push(createIntern)
                mainMenu()
            })
        }
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