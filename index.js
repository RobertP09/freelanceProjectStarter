// Base imports
const inquirer = require('inquirer')
const { copyDest, pickTemplate } = require('./logic')

/* 
Done - "What is the name of your Project?"
Done - "Which template should I use?"
*/

inquirer
	.prompt([
		{
			type: 'input',
			name: 'dirName',
			message: 'What is the name of the business?',
		},
		{
			type: 'list',
			name: 'template',
			message: 'Which template would you like to use?',
			choices: ['backend', 'no-backend'],
		},
	])
	.then((answers) => {
		const { dirName, template } = answers
		copyDest(dirName)
		pickTemplate(template)
	})
	.catch((err) => {
		if (error) return console.error(err)
	})
