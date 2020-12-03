const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown.js');


// array of questions for user
const questions = [
    {
        name: "username",
        message: "What is your GitHub username?",

    },
    {   
        name: "title",
        message: "Enter your project title:",
    },
    {   
        name: "description", 
        message: "Enter a project description:",
    },
    {
        name: "installation",
        message: "Enter installation instructions:"
    },
    {
        name: "usage",
        message: "Enter usage informaton:"
    },
    {
        type: "list",
        name: "license",
        message: "Select license type:",
        choices: ["copyleft","lpgl","MIT","permissive","proprietary","public"]
    },
    {
        name: "contributors",
        message: "Contribution Guidelines:"
    },
    {
        name: "tests",
        message: "Enter test instructions:"
    },
    {
        name: "email",
        message: "Enter contact email:",
    }
];
/* // function to write README file
function writeToFile(fileName, data) {
} */

// function to initialize program
function init() {
    inquirer.prompt(questions).then(resp => {

        generateReadMe(resp);
    });
}

function generateReadMe(responses){

    fs.writeFile
    (
        "./output/README.md",
        generateMarkdown.getReadMe(responses),
        (err) => {
            if(err)
                console.log("An error occured while writing file");
            else
                console.log("File saved");
        }
    );
}
// function call to initialize program
init();
