// TODO: Create a function that returns a license badge based on which license is passed in

const { linkClasses } = require("@mui/material");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "none") {
  return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
}
return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "none") {
  return `\n [license](#license)\n`
 } 
 return "";   
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "none") {
  return `## License

      licensed under the ${license}license. `;
} 
return "";
  
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents 
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Features](#Features)
- [Contributors](#Contributors)
- [Testing](#Testing)
${renderLicenseBadge(data.license)}
## Description 
${data.Description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Credits
${data.Credits}
## License
${renderLicenseSection(data.license)}
## Contributors
${data.Contributors}
## Testing
${data.Testing}
`;
}

module.exports = generateMarkdown;
