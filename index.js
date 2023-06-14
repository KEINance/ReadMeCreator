//add inquirer and fs require
const inquirer = require('inquirer');
const fs = require('fs');
// add const for prompt titles
//add badge here for README
const generateReadMe = ({ github, email, repo, license, description, content, descrepancies, test, userknow, contributing }) => 

// !!!!!!!!
// Usage, and Questions
// usage????? 
// questions????


// select questions for console prompts
inquirer.prompt([
    {
        name: 'github',
        message: 'What is your GitHub username?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What is your e-mail?',
        type: 'input'
    },
    {
        name: "repo",
        message: "What is your repositories name?",
        type: 'input',
    },
    {
        name: "license",
        message: "What license will you be adding?",
        type: 'list',
        choices: ['None', 'MIT', 'Apache']
    },
    {
        name: "description",
        message: "What is a short description of your repository?",
        type: 'input',
    },
    {
        name: "content",
        message: "Please, provide list of table of contents?",
        type: 'input',
    },
    {
        name: "dependancies",
        message: "What command should be run to install dependancies?",
        type: 'input',
    },
    {
        name: "test",
        message: "What command should be run to run tests?",
        type: 'input',
    },
    {
        name: "userknow",
        message: "What should the user know about this project?",
        type: 'input',
    },
    {
        name: "contributing",
        message: "What does a user need to know with contributing to this repositiory?",
        type: 'input',
    }
])
// read responce and add README file
.then(response => {
    const readMePageContent = generateReadMe(response)
    fs.writeFile("README.md", readMePageContent, (err) => {
        err ? console.log(err) : 
        console.log("File saved!");
      });
});


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {} 



// template literals in {}






// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;






// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
