// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/apm/l/${license}?color=sea%20green)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `![link](${license})`
  //switch statments
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `![section](The license being used is ${license})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ####DESCRIPTION
  ${data.descriptions}

  ####TABLE OF CONTENTS
  [Installation](installation instructions)
  [Usage](#usage information)
  [Contributions](#contribution guidelines)
  [Test](#test instructions)
  #

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  The application is licensed under ${data.license}.
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}


`;
}

module.exports = generateMarkdown;
