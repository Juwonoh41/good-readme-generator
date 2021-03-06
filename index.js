// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title.'
    },
    {
        type: 'input',
        name: 'descriptions',
        message: 'Enter the description.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation requirements.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test guidelines.'
    },
    {
        type: 'list',
        message: 'Please select a license',
        name: 'license',
        choices: ["ISC", "MIT", "Apache", "GNU GPLv3"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const write = generateMarkdown(data)
    //ileName = "readme.md"
    let catcherr = (err) => {
        if(err){
            throw(err)
        }else{
            console.log("File written")
        }
    }
    fs.writeFile(fileName, write, catcherr)
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data)=> {
        writeToFile("Readme.md", data)
    })
}

// Function call to initialize app
init();
