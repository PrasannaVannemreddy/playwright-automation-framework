const { test, expect } = require("@playwright/test");

test("End 2 ENd UI control", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  const name = await page
    .locator(".form-control[name='name']")
    .fill("Lakshmi Prasanna");

  const email = await page
    .locator("input[name='email']")
    .fill("lakshmi.itqa@gmail.com");

  const password = await page.getByPlaceholder("Password").fill("QATester@9");

  const checkbox = await page
    .getByLabel("Check me out if you Love IceCreams!")
    .click();

  await page.getByLabel("Gender").selectOption("Female");

  await page.getByText("Employed").check();
  await page.locator("input[name='bday']").fill("1991-05-03");

  await page.getByRole("button", { name: "Submit" }).click();
  console.log(
    await page
      .getByText("Success! The Form has been submitted successfully!.")
      .isVisible(),
  );
  await page.getByRole("link", { name: "Shop" }).click();
  await page
    .locator("app-card")
    .filter({ hasText: "Nokia Edge" })
    .getByRole("button")
    .click();
});
