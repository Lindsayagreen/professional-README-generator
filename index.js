const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title name?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'What is the projects description?',
      name: 'description',
    },
    {
      type: 'list',
      message: 'List table of contents',
      name: 'contents',
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'uses',
    },
    {
        type: 'input',
        message: 'License',
        name: 'licenses',
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Questions',
        name: 'question',
    },
])
  .then(answers => {
    // console.log(answers.name); 
    const filename = `${answers.name.toLowerCase().split('').join('')}.json`

    fs.writeFile(filename, JSON.stringify(answers), (err) => {
      err ? console.error(err) :console.log('Success!');
    })
  }); 