const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    { name: "username",
    message: "What is your GitHub username?",

},
{   
    name: "title",
    message: "Enter your project title:",
},
{   
    name: "description", 
    message: "Enter a project description:",
},
{
    name: "installation",
    message: "Enter installation instructions:"
},
{
    name: "usage",
    message: "Enter usage informaton:"
},
{
    type: "list",
    name: "license",
    message: "Select license type:",
    choices: ["MIT,", "GPLv3", "Apache", "Artistic2", "Unlicense"]
},
{
    name: "contributors",
    message: "Contribution Guidelines:"
},
{
    name: "tests",
    message: "Enter test instructions:"
},
{
    name: "email",
    message: "Enter contact email:",
}
]);

const generateReadme = (data) =>{
  
    let license;
    
    switch (data.license) {
      case "MIT": 
        license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
      case "GPLv3":
        license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
      case "Apache":
        license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case "Artistic2":
        license = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
        break;
      case "Unlicense":
        license = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        break;
  
      default:
        license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
    }
  
  
  
  
    return `# ${data.title}

  ## Description
  ${data.description}

  ${license}

  ### Contents
1. [Installation Instructions](#installation-instructions)
2. [Usage](#Usage)
3. [Contributors](#contributors)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License](#License)

# Installation Instructions
${data.installation}

# Usage
${data.usage}

# Contributors
${data.users}

# Tests
${data.tests}

# Questions
For questions please contact me at ${data.email}

Please also take a look at my Github profile: https://github.com/${data.username}

# License
${license}

`};

promptUser()
  .then((data) => writeFileAsync('./output/README.md', generateReadme(data)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));