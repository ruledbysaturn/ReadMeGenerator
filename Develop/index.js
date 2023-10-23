// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMD = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are needed to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Write a description of how to use your project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license for your project.",
        choices: ["MIT", "Apache 2.0", "GNU", "Mozilla Public"],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log('Your README has been created!')
    );
}

// TODO: Create a function to initialize app
function init() {}
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMD(answers);
            writeToFile("README.md", markdown);
        })
        .catch((error) => {
            console.error("Error has occurred:", error);
        });
        
// Function call to initialize app
init();
