const path = require("path");
const fs = require("fs-extra");
const homedir = require("os").homedir();

// Important Consts
const baseTemplatePath = path.join(path.join(__dirname, "templates"));
let copyLocationDir = "";

//Get current path
exports.currentDir = () => {
	return path.resolve();
};

// Wait function to allow us to get dir name into variable
async function wait() {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return 5;
}

//Get access to file system
exports.copyDest = async (name) => {
	try {
		copyLocationDir = path.join(
			homedir,
			"Documents",
			"business",
			`${name}`
		);

		await fs.ensureDir(
			path.join(homedir, "Documents", "business", `${name}`)
		);

		console.log(`Creating directory at "${copyLocationDir}"`);
	} catch (err) {
		console.error(err);
	}
};

//pick template
exports.pickTemplate = async (option) => {
	// Set up path string, ex: 'quickbusinesstemp/template/backend'
	const template = path.join(baseTemplatePath, option);
	try {
		//Create folder in destination
		wait().then(createInDest(template));
	} catch (err) {
		console.error(err);
	}
};

//Creates folder w/ files needed to develop
const createInDest = async (directory) => {
	try {
		//Copy template directory AKA backend - no backend to the selected
		await fs.copy(directory, copyLocationDir);
	} catch (err) {
		console.error(err);
	}
};
