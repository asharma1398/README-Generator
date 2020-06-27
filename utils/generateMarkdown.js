// function to generate markdown for README
function generateMarkdown(data) {
  
  // created compatible license name to later join to badge URL
  var printLicense = data.license.split(" ").join("_")
 
  return `# ${data.title}

  ![GitHub License](https://img.shields.io/badge/license-${printLicense}-blue.svg)

`;

}

module.exports = generateMarkdown;
