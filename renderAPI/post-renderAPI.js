const request = require('request');
const fs = require('fs');
const { get } = require('http');

const bearerToken =
  'test_eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI1NDkzIiwiYXVkIjoiY2FyYm9uZSIsImV4cCI6MjI4MDcyMzAzMiwiZGF0YSI6eyJpZEFjY291bnQiOjU0OTN9fQ.AaAP91V6vmQzkPRc4Lv8XafrB4T-3T0CvKY7xPNe4EA-STH6TR7gHysTdX9cHHD073sFFFlE2itPnbxjCsZv0mGIAEKLGkdarIKKLTV8caIBEydn31nw0WV077nefs_mxkhQXA1r2XNCqJ0XkQ5rx9ESHH5iWMAmsoi57Io7zgpjZIvU';
// const templateId =
//   'f2598dfc63f374e5a9d1d64c949dc5e808a1bb79e0e81fe5acb6ceb2b1218c41';

const data = {
  id: 42,
  date: 1492012745,
  company: {
    name: '我的公司名稱',
    address: '住家裡',
    city: '桃園市',
    postalCode: 123456,
  },
  customer: {
    name: '我的顧客',
    address: 'there',
    city: 'Faraway',
    postalCode: 654321,
  },
  products: [
    {
      name: 'product 1',
      priceUnit: 0.1,
      quantity: 10,
      priceTotal: 1,
    },
    {
      name: 'product 2',
      priceUnit: 0.2,
      quantity: 20,
      priceTotal: 4,
    },
    {
      name: 'product 3',
      priceUnit: 0.3,
      quantity: 30,
      priceTotal: 9,
    },
  ],
  total: 14,
};

const data2 = {
  user: {
    chinese_name: '小華',
  },
  color: '#FF0000',
};

module.exports = (templateId, getRenderAPI) =>
  request.post(
    {
      url: 'https://render.carbone.io/render/' + templateId,
      json: true,
      body: {
        data: data2,
        convertTo: 'pdf',
      },
      headers: {
        Authorization: 'Bearer ' + bearerToken,
        'carbone-version': '3',
      },
    },
    (err, response, body) => {
      // Handle error
      // Body contains an error or the render ID
      if (err) return console.log(err);
      console.log(body);
      getRenderAPI(body.data.renderId);
    }
  );
