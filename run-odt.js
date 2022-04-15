const fs = require('fs');
const carbone = require('carbone');

// Data to inject
var data = {
  firstname: 'Sean',
  lastname: 'Wang',
  testText: 'I am a test',
};

// Generate a report using the sample template provided by carbone module
// This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
// Of course, you can create your own templates!
carbone.render(
  './doc_templates/odt_template.odt',
  data,
  function (err, result) {
    if (err) {
      return console.log(err);
    }
    // write the result
    fs.writeFileSync('./doc_results/odt_result.odt', result);
  }
);
