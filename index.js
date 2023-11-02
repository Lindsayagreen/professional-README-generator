// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What is your project title name?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the projects description?",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Test Instructions",
    name: "test",
  },
  {
    type: "list",
    message: "Choose a license",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);
    const filename = "README.md";

    fs.writeFile(filename, readmeContent, (err) => {
    err ? console.error(err) : console.log("README.md generated successfully!");
    });
  });
}

function generateREADME(answers) {
  return `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test Instructions](#test-instructions)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Test Instructions
  ${answers.test}
  
  ## License
  This project is licensed under the ${answers.license} license.
  
  ## Questions
  You can find me on GitHub: [${answers.github}](https://github.com/${answers.github})
  
  For any questions or inquiries, please email me at ${answers.email}.
  `;
}


init();







// function init () {
// inquirer
// .prompt(questions)

// .then((answers) => {
//   const readMeFile = `${answers.readMeFile
//     .toLowerCase()
//     .split(" ")
//     .join("")}.json`;

//   fs.writeFile(readMeFile, JSON.stringify(answers), (err) => {
//     err ? console.error(err) : console.log("README.md generated successfully!");
//   });
// });
// }
