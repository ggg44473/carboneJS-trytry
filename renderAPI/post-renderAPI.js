const request = require('request');

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
  cat: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
};

module.exports = (bearerToken, templateId, getRenderAPI) =>
  request.post(
    {
      url: 'https://render.carbone.io/render/' + templateId,
      json: true,
      body: {
        data: data2,
        // convertTo: 'pdf',
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
      if (body.data) getRenderAPI(body.data.renderId);
    }
  );
