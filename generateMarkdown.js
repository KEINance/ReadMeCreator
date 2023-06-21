// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = ''
    if (license === 'MIT') {
        badge = `[license] (https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === 'Apache') {
        badge = `[license] (https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    } else {
        badge = ''
    }; 
    return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license !== 'None' ? '= [License](license)': ''
} 


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return ` # License
      Project is licensed under the ${license} license.
      `
  }
  return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## GitHub User
  ${data.github}
  
  ## ${data.repo}
  
  ## License 
  ${data.repo} is licensed under ${renderLicenseBadge(data.license)}.

  ## Description
  ${data.description}
  
  ## USERSTORY
  ${data.story}
  
  ## ACCEPTANCE CRITERIA
  ${data.acceptance}
  
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Video](#video)
  6. [Tests](#tests)
  7. ${renderLicenseLink(data.license)}
  8. [Questions](#questions)
  
  console.log(${renderLicenseBadge(data.license)})
  
  ## Installation
    Please, run ${data.dependancies} in terminal for download. 
    See ${renderLicenseSection(data.license)} to recieve more information about this lisence.
    
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
