// Base imports
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// Important Consts
const baseTemplatePath = path.join(__dirname, 'templates');
const choice = 'backend';

/* console.log("Setting up project from templates. Prepare to answer some questions!");
console.log("What is the name of your Project?");
console.log("Which template should I use?");
console.log("Does it require a backend?"); */

//Get current path
const currentDir = () => {
    return path.resolve();
}

//Get access to file system
const copyDest = () => {

}

//pick template numerically
const pickTemplate = (option) => {
    const choice = new Map([
        [1, 'backend'],
        [2, 'no-backend']
    ]);
    return template = path.join(baseTemplatePath, choice.get(option));
}

//copy to new location

const createInDest = () => {
    
}

console.log(pickTemplate(2));
