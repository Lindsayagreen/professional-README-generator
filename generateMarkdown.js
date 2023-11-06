// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license === "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "";
  } else {
    return `(https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === "MIT") {
    return "";
  } else {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
  }
}

function generateMarkdown(data) {
  return `
  ## ${data.title}    ${renderLicenseBadge(data.license)}  
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  ${renderLicenseSection(data.license)}  
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  My email [${data.email}](mailto:${
    data.email
  }). You can also find me on [GitHub](https://github.com/${data.github}).
  `;
}

module.exports = generateMarkdown;
