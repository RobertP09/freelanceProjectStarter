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