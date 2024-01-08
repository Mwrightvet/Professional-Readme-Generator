// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else if (license === "Apache") {
    const badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    return badge;
  } else if (license === "MIT") {
    const badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return badge;
  } else {
    // If license is not "none", "Apache", or "MIT"
    return ""; // Return an empty string for unsupported licenses
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    const licenseLink = `https://opensource.org/licenses/Apache-2.0`;
    return licenseLink;
  } else if (license === "MIT") {
    const licenseLink = `https://opensource.org/licenses/MIT`;
  } else if (license !== "none") {
    return `\n [license](#License)\n`;
  }
  return "";  //return an empty string if there is no license. 
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
  return `# ${data.Title}
by ${data.Username}
${renderLicenseBadge(data.Badges)}
## Table of Contents 
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Features](#Features)
- [Contributors](#Contributors)
- [Testing](#Testing)
- [Questions](#Questions)
## Description 
${data.Description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Credits
${data.Credits}
## License
${renderLicenseSection(data.License)}
## Contributors
${data.Contributors}
## Testing
${data.Testing}
## Questions
For Any questions: Contact ${data.Username} at ${data.Email} or visit ${data.Repo}
`;
}

module.exports = generateMarkdown;
