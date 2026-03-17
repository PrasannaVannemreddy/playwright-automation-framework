class APiUtils {
  /**
   * @param {import('@playwright/test').APIRequestContext} apiContext
   * @param {Object} loginPayLoad
   */
  constructor(apiContext, loginPayLoad = {}) {
    this.apiContext = apiContext;
    this.loginPayLoad = loginPayLoad;
  }

  async getToken() {
    //login api - to get the token
    const loginResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: this.loginPayLoad,
      },
    );

    //expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    this.token = loginResponseJson.token;
    console.log(this.token);
    return this.token;
  }

  async createOrder(orderPayLoad = {}) {
    const response = {};

    response.token = await this.getToken();

    const orderResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: orderPayLoad,

        headers: {
          Authorization: response.token,
          "Content-Type": "application/json",
        },
      },
    );
    const orderResponsejson = await orderResponse.json();
    console.log(orderResponsejson);
    this.orderId = orderResponsejson.orders[0];
    response.orderId = this.orderId;
    return response;
  }
}

module.exports = { APiUtils };
