//add inquirer and fs require
const inquirer = require('inquirer');
const fs = require('fs');

// add markdown link
const generateMarkdown = require('./generateMarkdown.js')

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
        choices: ['None', 'MIT', 'Apache'],
    },
    {
        name: "description",
        message: "What is a short description of your repository?",
        type: 'input',
    },
    {
        name: "acceptance",
        message: "What is a short acceptance criteria of your repository?",
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

//population of question content
.then((questions) => {
    const readMePageContent = generateMarkdown(questions);
    fs.writeFile('README.md', readMePageContent, 
    (err) => err ? console.error(err) : console.log('Eureka!!'))
});
