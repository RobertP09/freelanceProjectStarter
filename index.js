// Base imports
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const logic = require('./logic/logic');

// Important Consts
const baseTemplatePath = path.join(__dirname, 'templates');

/* console.log("Setting up project from templates. Prepare to answer some questions!");
console.log("What is the name of your Project?");
console.log("Which template should I use?");
console.log("Does it require a backend?"); */

const questions = ["What is the name of your Project?","Which template should I use?"]

const projectName = "";

inquirer
  .prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Which template would you like to use?',
      choices: ['backend', 'no-backend'],
    },
  ])
  .then(answers => {
    console.info('Template Selected:', answers.template);
  });