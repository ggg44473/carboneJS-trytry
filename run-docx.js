const fs = require('fs');
const carbone = require('carbone');

// Data to inject
var data = [
  {
    movieName: '怪獸與鄧不力多的祕密',
    actors: [
      {
        firstname: '小明',
        lastname: '王',
        test: '測試一',
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

carbone.render(
  './doc_templates/docx_template.docx',
  data,
  function (err, result) {
    if (err) return console.log(err);
    fs.writeFileSync('./doc_results/docx_result.docx', result);
  }
);
