const { test, expect } = require("@playwright/test");
const { APiUtils } = require("./utils/APIUtils");

const loginpayload = {
  userEmail: "lakshmi.itqa@gmail.com",
  userPassword: "QATester@9",
};

const orderpayload = {
  orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }],
};

let response;
let token;
let orderId = "";
const fakepayloadprders = { message: "No Product in Cart" };

test.beforeAll(async ({ request }) => {
  const apiUtils = new APiUtils(request, loginpayload);

  await apiUtils.getToken();
  response = await apiUtils.createOrder(orderpayload);

  token = apiUtils.token;
  orderId = apiUtils.orderId;
});

test("@SP place the order", async ({ page, request }) => {
  const apiUtils = new APiUtils(request, loginpayload);
  token = await apiUtils.getToken();

  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  await page.goto("https://rahulshettyacademy.com/client");
  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/69a084d8415d779f9b448bd2",
    async (route) => {
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakepayloadprders);
      route.fulfill({
        response,
        body,
      });
      //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
    },
  );

  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
  );

  console.log(await page.locator(".mt-4").textContent());
});
