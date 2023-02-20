import inquirer from 'inquirer';
import fs from "fs/promises"

let response = await inquirer
  .prompt([
    {
    type: 'input',
    name: 'name',
    message: "What's your name?",
    default(){
        return 'Doe';
    }
  },

  ]
//inquirer.prompt(questions).then(answers => {
//console.log(`Hi ${answers.name}!`);
//}
);

let readmeContent = `
#Name
##

###`
fs.writeFile("README.md", readmeContent)