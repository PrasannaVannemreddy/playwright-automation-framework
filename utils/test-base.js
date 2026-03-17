const base = require("@playwright/test");

exports.customtest = base.test.extend({
  // @ts-ignore
  testDataForOrder: {
    username: "lakshmi.itqa@gmail.com",
    password: "QATester@9",
    productName: "ADIDAS ORIGINAL",
  },
});
