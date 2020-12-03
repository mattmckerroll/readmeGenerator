// function to generate markdown for README
function getReadme(data) {
  return `# ${data.title}

  ${data.description}

  ### Contents
1. [Installation Instructions](#installation-instructions)
2. [Usage](#usage)
3. [Contributors](#contributors)
4. [Tests](#tests)
5. [Questions](#questions)

# Installation Instructions

# Usage

# Contributors

# Tests

# Questions

`;
}

module.exports = getReadme;
