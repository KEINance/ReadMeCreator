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
  license !== 'none' ? '= [License](license)': ''
} 


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return ` # License
      Project is licensed under the ${license} license.
      `
  }
  return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.github}
${renderLicenseBadge(data.license)}

  ## Description
    ${data.description}

  ## USERSTORY
    ${data.userStory}

  ## ACCEPTANCE CRITERIA
    ${data.acceptance}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Video](#video)
  6. [Tests](#tests)
  ${renderLicenseLink(data.license)}
  8. [Questions](#questions)

  ## Installation
    Please, see ${renderLicenseSection(data.license)} to recieve more information about this lisence.
  
  ## Usage
    ${data.usage}


  ## Contributing
    ${data.contributing}

  ## Tests
    ${data.tests}

  ## Questions
  For additional queries regarding this repository, please, reach out via:
  Github: [${data.github}] (https://github.com/${data.github})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
