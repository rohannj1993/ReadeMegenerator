// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github account",
        message: "What is your github name?",
      },
      {
        type: "input",
        message: "What is this projects title?",
        name: "title",
      },
      {
        type: "input",
        message: "What is your description for this project?",
        name: "description",
      },
    { type: "input",
      message: "What is your email?" ,
      name: "User email"

    },

      {
          type: "input",
          message: "Who did you contribute on this project with?",
          name: "contributors"
      },

      {
        type: "input",
        message: "How do you install this project?",
        name: "installation"
    },
    
    {
        type: "input",
        message: "How do you use this project?",
        name: "usage"
    },


];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then((answer) =>  {
    console.log(answer)
})}

// Function call to initialize app
init();
