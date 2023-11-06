const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

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

function writeToFile(fileName, data) {
  fs.writeFile(
    fileName,
    data,
    (err) => console.log(err),
    console.log("README.md successfully created!")
  );
}

function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile("My-ReadME.md", generateMarkdown(data));
    })
    .catch((err) => console.log(err));
}

init();
