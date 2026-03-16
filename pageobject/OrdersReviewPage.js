const { expect } = require("@playwright/test");

class OrdersReviewPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.country = page.locator("[placeholder*='Country']");
    this.dropdown = page.locator(".ta-results");
    this.emailId = page.locator(".user__name [type='text']").first();
    this.submit = page.locator(".action__submit");
    this.orderConfirmationText = page.locator(".hero-primary");
    this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
  }

  /**
   * @param {string} countryCode
   * @param {string} countryName
   */
  async searchCountryAndSelect(countryCode, countryName) {
    await this.country.pressSequentially(countryCode);

    await this.dropdown.waitFor();

    const optionsCount = await this.dropdown.locator("button").count();

    for (let i = 0; i < optionsCount; ++i) {
      const text = await this.dropdown.locator("button").nth(i).textContent();

      if (text?.trim() === countryName) {
        await this.dropdown.locator("button").nth(i).click();
        break;
      }
    }
  }

  /**
   * @param {string | RegExp | readonly (string | RegExp)[]} username
   */
  async VerifyEmailId(username) {
    await expect(this.emailId).toHaveText(username);
  }

  async SubmitAndGetOrderId() {
    await this.submit.click();
    await expect(this.orderConfirmationText).toHaveText(
      " Thankyou for the order. ",
    );
    return await this.orderId.textContent();
  }
}

module.exports = { OrdersReviewPage };
