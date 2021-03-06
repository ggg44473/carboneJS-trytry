const request = require('request');
const fs = require('fs');

let bufferArray = [];
const fileName = './renderAPI/results/result.docx';

module.exports = (RENDER_ID) =>
  request
    .get({
      url: `https://render.carbone.io/render/${RENDER_ID}`,
    })
    .on('response', (response) => {
      if (response.statusCode !== 200) {
        // File is not found
        console.log('File is not found');
        return;
      }
    })
    .on('data', (data) => {
      bufferArray.push(data);
    })
    .on('end', () => {
      fs.writeFileSync(fileName, Buffer.concat(bufferArray));
    })
    .on('error', () => {
      // Handle network error
      console.log('some network error');
    });
