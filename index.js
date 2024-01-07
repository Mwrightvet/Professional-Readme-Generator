// TODO: Include packages needed for this application
const fs = require('fs'); // this is a node module that is basic requirement
const inquirer = require('inquirer'); // Inquire is special software that must be downloaded/installed from npm
const generateMarkdown = require('./utils/generateMarkdown.js'); // pulls whatever is in the generate markdown in
const path = require('path'); // this is how the prompts gets put into the generate markdown file

// TODO: Create an array of questions for user input
const prompts = inquirer [
    { 
        type:'input',
        name:'Title',
        message: 'What is the name of your project?'
    },
    {
        type:'input',
        name: 'Description',
        message: 'What is the description of your project?'

    },
    {
        type:'input',
        name: 'Table of Contents',
        message: 'What is the name of your project?'

    },
    {
        type:'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?'

    },
    {
        type:'input',
        name: 'Usage',
        message: 'What will the project be used for?'

    },
    {
        type:'input',
        name: 'Credits',
        message: 'Were any third-party assets used that require attribution?'

    },
    {
        
        type:'checkbox',
        name: 'License',
        choices:["MIT", "Apache"],
        message: 'Select the License for this project'

    },
    {
        
        type:'input',
        name: 'Badges',
        message: 'What is the name of your project?',

    },
    {
        type:'input',
        name: 'Features',
        message: 'If your project has a lot of features, list them here.'

    },
    {
        type:'input',
        name: 'Contributors', 
        message:' List here how you would like other developers to contribute',
    },
    {
        type:'input',
        name: 'Testing',
        message: 'Include tests steps for your application.',
    }
    ]    

// TODO: Create a function to initialize app
function init() {
 inquirer.prompt(prompts).then(responses) => {
    console.log("Creating Professional README.jd File...");
    writeToFile("./dist/README.md",generateMarkdown({...responses}));
 }    
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
return fs.writeFileSync(path.join(process.cmd(), fileName),data);

// Function call to initialize app
init();
