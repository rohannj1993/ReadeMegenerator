// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  console.log(data.title)
  return `# ${data.title}
 

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ##  Contributions
  ${data.contributors}

  ## Testing
  ${data.test}

  ## License
  ${data.license}

 ## Questions
 Please contact project owner
 Check out [https://github.com/${data.github}][github] for more fun.

 ## Github
 Owners github
 ${data.github}






  ## Helpful Links
  * [Agile Methodology](https://en.wikipedia.org/wiki/Agile_software_development)
  * [Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
  * [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial/getting_started)
  
  - - -
  © Rohan 2021

`;
}

module.exports = generateMarkdown;
