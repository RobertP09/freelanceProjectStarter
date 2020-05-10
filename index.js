// Base imports
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { currentDir, copyDest, pickTemplate } = require("./logic");

/* console.log("Setting up project from templates. Prepare to answer some questions!");
console.log("What is the name of your Project?");
console.log("Which template should I use?");
console.log("Does it require a backend?"); */

inquirer
	.prompt([
		{
			type: "list",
			name: "template",
			message: "Which template would you like to use?",
			choices: ["backend", "no-backend"],
		},
	])
	.then((answers) => {
    const { template } = answers
    pickTemplate(template);
		// console.info("Template Selected:", answers.template);
	});
