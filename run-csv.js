const fs = require('fs');
const carbone = require('carbone');

// Data to inject
var data = [
  {
    movieName: 'Matrix',
    actors: [
      {
        firstname: 'Keanu',
        lastname: 'Reeves',
        test: 'YO TEST 1',
      },
      {
        firstname: 'Laurence',
        lastname: 'Fishburne',
        test: 'YO TEST 2',
      },
      {
        firstname: 'Carrie-Anne',
        lastname: 'Moss',
      },
    ],
  },
  {
    movieName: 'Back To The Future',
    actors: [
      {
        firstname: 'Michael',
        lastname: 'J. Fox',
      },
      {
        firstname: 'Christopher',
        lastname: 'Lloyd',
        test: 'YO TEST 3',
      },
    ],
  },
];

// 因為直出CSV似乎無法迭代巢狀陣列
var options = {
  convertTo: 'csv', //can be docx, txt, ...
};

carbone.render(
  './doc_templates/ods_template.ods',
  data,
  options,
  function (err, result) {
    if (err) return console.log(err);
    fs.writeFileSync('./doc_results/csv_result.csv', result);
  }
);
