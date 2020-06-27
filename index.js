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
