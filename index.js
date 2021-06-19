// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js")

const inquirer = require("inquirer");

const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your Project title?",
    },
    {
        type: "input",
        message: "What is your description for this project?",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install this project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use this project?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who did you contribute on this project with?",
        name: "contributors"
    },
    {
        type: "input",
        message: "How do you test this project?",
        name: "test"
    },
    {
        type: "list",
        message: "What license is used for this project?",
        name: "license",
        choices: ['Apache license', 'Mozilla', 'MIT', 'N/A'],
    },
    {
        type: "input",
        message: "What is the users github user name?",
        name: "github"
    },
    {
        type: "input",
        message: "What is the users email?",
        name: "email",
    },

];



// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", generateMarkdown(data),function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Done!");
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answer) => {
       writeToFile(answer)
         console.log(answer)
    })
}

// Function call to initialize app
init();


