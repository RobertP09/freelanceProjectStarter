const path = require("path");
const fs = require("fs-extra");
const homedir = require('os').homedir();

// Important Consts
const baseTemplatePath = path.join(path.join(__dirname, "templates"));
let copyLocationDir;

//Get current path
exports.currentDir = () => {
	return path.resolve();
};

//Get access to file system
exports.copyDest = async (name) => {
	try {
		copyLocationDir = await fs.ensureDir(path.join(homedir, 'Documents',' business', `${name}`));
	} catch (err) {
		console.error(err)
	}
};

//pick template numerically
exports.pickTemplate = async (option) => {
	const template = path.join(baseTemplatePath, option);
	try {
		await createInDest(template);
	} catch (err) {
		console.error(err);
	}
};

//copy to new location
const createInDest = async (directory) => {
	try {
		await fs.copy(directory, copyLocationDir);
		console.log(`Created directory at "${copyLocationDir}"`);
	} catch (err) {
		console.error(err);
	}
};
