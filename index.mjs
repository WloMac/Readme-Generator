import inquirer from 'inquirer';
import fs from "fs/promises"

let {name, description, installation, usage, license, contributing, test, username, email} = await inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "Please provide Name of your project",
      default(){
          return 'How do you call your project';
      }
    },
    {
    type: 'input',
    name: 'description',
    message: "Please provide description of your project",
    default(){
        return 'Brief description';
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: "Please provide details about installation of your project",
    default(){
        return 'How to install?';
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: "Please provide details about usage of your project",
    default(){
        return 'How to use this project?';
    }
  },
  {
    type: 'input',
    name: 'contributing',
    message: "Please provide details how to contribute to your project",
    default(){
        return 'How other users can improve your project?';
    }
  },
  {
    type: 'input',
    name: 'test',
    message: "Has test been provided?",
    default(){
        return 'Has test been provided';
    }
  },

  {
    type: 'list',
    name: 'license',
    message: 'Select your license',
    choices: ['apache-2.0', 'bsl-1.0', 'bsd-3-clause', 'mpl-2.0', 'mit'],
    filter(val) {
      return val.toLowerCase();
    },
  },

  {
    type: 'input',
    name: 'username',
    message: "Developer GitHub username",
    default(){
        return 'Credits';
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Please provide your e-mail address",
    default(){
        return 'Your contact email';
    }
  },

  ]

);

let readmeContent = `
# ${name}
## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contribution
${contributing}

## Test
${test}

## License
${generateLicense(license)}

## Questions
[${username}](https://github.com/${username})

If you have any further questions about this README Generetor do not hesitate to contact using this e-mail address: ${email}


` //end of writting

fs.writeFile("README.md", readmeContent)



function generateLicense(license) {

  switch (license) {
    case "apache-2.0": 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
            
    case "bsl-1.0":
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    
    case "bsd-3-clause":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    
    case "mpl-2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    
    case "mit":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      
      default:
      break;
  }
  
}


