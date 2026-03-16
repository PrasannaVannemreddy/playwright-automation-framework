const { test, expect } = require("@playwright/test");

//test.use({ browserName: 'webkit'});

test("@Web Browser Context-Validating Error login", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  page.route("**/*.{jpg,png,jpeg}", (route) => route.abort());

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  const cardTitleNames = page.locator(".card-body a");
  console.log(await cardTitleNames.count());

  // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());

  const userName = page.locator("#username");
  const password = page.locator("#password");
  const signIn = page.locator("#signInBtn");
  page.on("request", (request) => {
    console.log(request.url());
  });
  page.on("response", (response) => {
    console.log(response.url(), response.status());
  });
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  await userName.fill("rahulshetty");
  await password.fill("Learning@830$3mK2");
  await signIn.click();

  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signIn.click();

  console.log(await page.locator(".card-body a").first().textContent());

  console.log(await page.locator(".card-body a").nth(1).textContent());

  console.log(await page.locator(".card-body a").nth(2).textContent());

  console.log(await page.locator(".card-body a").nth(3).textContent());

  const allcardTitleNames = await cardTitleNames.allTextContents();

  console.log(allcardTitleNames);
});

test("@web UI control", async ({ page }) => {
  const userName = page.locator("#username");
  const password = page.locator("#password");
  const signIn = page.locator("#signInBtn");

  const doc = page.locator("[href*=documents-request]");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  await userName.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");
  await page.locator(".radiotextsty").nth(1).click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".radiotextsty").nth(1).isChecked());
  await expect(page.locator(".radiotextsty").nth(1)).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();

  await expect(doc).toHaveAttribute("class", "blinkingText");

  //await signIn.click();
  // await page.pause();
});

test("child page handle", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const doc = page.locator("[href*=documents-request]");
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    doc.click(),
  ]);

  const text = await newPage.locator(".red").textContent();
  console.log(text);
  let domain;
  if (text) {
    const arrayText = text.split("@");
    domain = arrayText[1].split(" ")[0];
    console.log(domain);
    await page.locator("#username").fill(domain);
  }

  console.log(await page.locator("#username").textContent());
  await page.pause();
});
