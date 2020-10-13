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

    },

    {
        type: "input",
        message: "Please enter your repo link to clone the project?",
        name: "repoLink"

    }
]).then(function (data) {
    axios.get(`https://api.github.com/users/${data.githubUserName}`).then(function (response) {

        const backTick = "```";
        const readMe =
            `## Project Name: 
${data.projectName}

## Licence:
${data.licenseName}

## Email:
${data.email}

## User Name:
${data.githubUserName} 

Node.js and ES6+ Homework: Good README Generator
               
This command-line application takes users input to auto generates a README file.

Table of Contents:

1. Quick start
2. User Story
3. Acceptance Criteria
4. Project description
5. Installation
6. Usage
7. Creators

## Quick Start
1. Clone the repo: ${data.repoLink}
2. Pull the latest code version


## User Story
                    
${backTick}
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
${backTick}


## Acceptance Criteria
${backTick}
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
${backTick}


## Project description
${data.projectDescription}
         
## Installation
${backTick}
Run --> npm i in terminal
${backTick}


## Usage

A command-line application will allow for quick and easy generation of a project README to get started quickly. 
This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

## Application usage guidance

![demo the command-line application](./assets/command-line-app.gif)

## Creators
Project created by: Venus Hu 

Github: 
${data.link}`
        console.log(readMe);
        fs.writeFileSync("README.md", readMe, (error) => {
            console.log(readMe);
            if (error) {
                throw error;
            }
        });

    });


});


