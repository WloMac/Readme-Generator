import inquirer from 'inquirer';
import fs from "fs/promises"

let {description, installation, usage, licence} = await inquirer
  .prompt([
    {
    type: 'input',
    name: 'description',
    message: "Please provide description of your project",
    default(){
        return 'Description';
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
        return 'Usage description';
    }
  },

  {
    type: 'list',
    name: 'licence',
    message: 'Select your licence',
    choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'mit'],
    filter(val) {
      return val.toLowerCase();
    },
  },

  ]
//inquirer.prompt(questions).then(answers => {
//console.log(`Hi ${answers.name}!`);
//}
);

let readmeContent = `
#Project Description
${description}

##Installation
${installation}

##Usage
${usage}

##
${licence}



`
fs.writeFile("README.md", readmeContent)