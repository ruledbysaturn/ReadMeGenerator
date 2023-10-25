// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GNU': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'Mozilla Public': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  };

  return license && license in licenseBadges ? licenseBadges[license] : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GNU': 'https://www.gnu.org/licenses/gpl-3.0',
      'Mozilla Public': 'https://opensource.org/licenses/MPL-2.0',
  };

  return license && license in licenseLinks ? licenseLinks[license] : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSections = {
      'MIT': 'This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).',
      'Apache 2.0': 'This project is licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).',
      'GNU': 'This project is licensed under the [GNU GPL v3 License](https://www.gnu.org/licenses/gpl-3.0).',
      'Mozilla Public': 'This project is licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).',
  };

  return license && license in licenseSections ? licenseSections[license] : '';
}

//function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = '';
  if (data.license && data.license.length > 0) {
      if (data.license.includes('none')) {
          licenseSection = 'This project is not licensed.';
      } else {
          licenseSection = `This project is licensed under the ${data.license.join(", ")} license.`;
      }
  }
  const licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}
${licenseBadge}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)  

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
If you have any questions, please do not hesitate to reach out.
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;