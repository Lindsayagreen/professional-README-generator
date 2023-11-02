// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ## Description
  ${answers.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  This project is licensed under the ${answers.license} license.
  ## Contributing
  ${answers.contributing}
  ## Tests
  ${answers.tests}
  ## Questions
  For additional questions, you can reach me at [${answers.email}](mailto:${answers.email}). You can also find me on [GitHub](https://github.com/${answers.github}).
  `;
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);
    const filename = "README.md";

    fs.writeFile(filename, readmeContent, (err) => {
    err ? console.error(err) : console.log("README.md generated successfully!");
    });
  });
}

module.exports = generateMarkdown;
