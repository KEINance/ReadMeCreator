// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = ''
    if (license === 'MIT') {
        badge = `![license](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === 'Apache') {
        badge = `![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    } else {
        badge = ''
    }; 
    return badge;
};

// If there is no license, return an empty string
function renderLicenseLink(license) {
 return license !== 'None' ? '[License](#license)' : '';
} 

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
      Project is licensed under the ${license} license.
      `
  }
  return '';
};

// Create a generator for the README file population
function generateMarkdown(data) {
  return `
  ## GitHub User
  ${data.github}
  
  ## ${data.repo}
  
  ## Table of Contents
  1. ${renderLicenseLink(data.license)}
  2. [Description](#description)
  3. [UserStory](#story)
  4. [AcceptanceCriteria](#acceptance)
  5. [Installation](#installation)
  6. [Tests](#tests)
  7. [Usage](#usage)
  8. [Contributing](#contributing)
  9. [Questions](#questions)

  ## License 
  ${data.repo} is licensed under ${renderLicenseBadge(data.license)}.

  ## Description
  ${data.description}
  
  ## USERSTORY
  ${data.story}
  
  ## ACCEPTANCE CRITERIA
  ${data.acceptance}
  

  ## Installation
    Please, run ${data.dependancies} in terminal for download. ${renderLicenseSection(data.license)}
    See ${renderLicenseBadge(data.license)} to recieve more information about this license.
    
  ## Tests
    Please, run command ${data.test} in terminal to run code.

  ## Usage
    ${data.repo} is easiest to use when installed with ${data.usage}

  ## Contributing
    ${data.contributing}

  ## Questions
  For additional queries regarding this repository, please, reach out via:
  Github: [${data.github}] (https://github.com/${data.github})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
