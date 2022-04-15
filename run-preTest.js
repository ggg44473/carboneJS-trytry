const fs = require('fs');
const carbone = require('carbone');

// Data to inject
var data = {
  user: {
    chinese_name: '小華',
  },
  color: '#FF0000',
};

var options = {
  convertTo: 'pdf', //can be docx, txt, ...
};

carbone.render(
  './doc_templates/preTestResult.docx',
  data,
  options,
  function (err, result) {
    if (err) return console.log(err);
    fs.writeFileSync('./doc_results/preTestResult.pdf', result);
    process.exit(); // to kill automatically LibreOffice workers
  }
);
