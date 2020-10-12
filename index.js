const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

inquirer.prompt([
    {
        type: "input",
        message: "Please enter your project name?",
        name: "projectName"

    },

    {
        type: "input",
        message: "Please provide project detail description?",
        name: "projectDescription"

    },
    {
        type: "input",
        message: "Please enter License name?",
        name: "licenseName"

    },
    {
        type: "input",
        message: "Please enter your email address ?",
        name: "email"

    },
    {
        type: "input",
        message: "Please enter your github user name?",
        name: "githubUserName"

    },
    {
        type: "input",
        message: "Please enter your link in the Table of Content?",
        name: "link"

    }
]).then(function (data) {
    axios.get(`https://api.github.com/users/${data.githubUserName}`).then(function (response) {

        const test = "```";
        const readMe = `${data.projectName}
                    ${data.licenseName}
                    ${data.email}
                    ${data.githubUserName} 
                    # Table of Contents:
                    1. Quick start
                    2. User Story
                    3. Acceptance Criteria
                    4. Project description
                    5. Creators

                    ## Quick Start
                    1. Clone the repo: https://gw.bootcampcontent.com/GW-Coding-Boot-Camp/gwu-arl-fsf-pt-08-2020-u-c.git
                    2. Pull the latest code version
                    ## User Story
                    ${test}
                    AS A developer
                    I WANT a README generator
                    SO THAT can quickly create a professional README for a new project
                    ${test}
                    ## Acceptance Criteria
                    ${test}
                    GIVEN a command-line application that accepts user input
                    WHEN I am prompted for information about my application repository
                    THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
                    WHEN I enter my project title
                    THEN this is displayed as the title of the README
                    WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
                    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
                    WHEN I choose a license for my application from a list of options
                    THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
                    WHEN I enter my GitHub username
                    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
                    WHEN I enter my email address
                    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
                    WHEN I click on the links in the Table of Contents
                    THEN I am taken to the corresponding section of the README
                    ${test}
                    ## Project description
                     # ${data.projectDescription}
                     
                     ## Creators
                     Project created by: Venus Hu 

                     Github: 
                     # ${data.link}`
        console.log(readMe);
        fs.writeFileSync("README.md", readMe, (error) => {
            console.log(readMe);
            if (error) {
                throw error;
            }
        });

    });


});


