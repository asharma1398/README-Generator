// establishing requirements 
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

// name of new generated README file 
var newFile = "generatedREADME.md"

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a project description:",
        name: "description"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "list",
        message: "What kind of license does your project have?",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "NONE"]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        default: "npm test",
        name: "test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "using"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing the repo?",
        name: "contributing"
    }

];

// function to write README file & initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {
        
        fs.writeFile(newFile, generateMarkdown(response), function(err) {
            if (err) throw err;
            else console.log(`Success! Your new file is called ${newFile}`);
        })
    })
}

// function call to initialize program
init();
