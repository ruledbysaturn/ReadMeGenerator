// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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
        message: "Write a description of the usage of your project.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
