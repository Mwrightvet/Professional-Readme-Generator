// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
inquirer 
    .prompt {[
    { 
        type:'input',
        name:'title',
        message: 'What is the name of your project?'
    },
    {
        type:'input',
        name: 'Description'
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
        name: 'Contribution', 
        message:' List here how you would like other developers to contribute',
    },
    {
        type:'input',
        name: 'Tests',
        message: 'Include tests steps for your application.'
    }
    ]}
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    const fs = require{'fs'};
    cosnt inquirer = require{`./utils/generateMarkdown.js`};
    const generate = require{''}
}

// Function call to initialize app
init();
