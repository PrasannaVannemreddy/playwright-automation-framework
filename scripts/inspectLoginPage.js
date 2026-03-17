const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log('title', await page.title());
  const checkbox = page.locator('input[type=checkbox]').first();
  console.log('checkbox count', await page.locator('input[type=checkbox]').count());
  console.log('checkbox id', await checkbox.getAttribute('id'));
  console.log('checkbox name', await checkbox.getAttribute('name'));
  const signInBtn = page.locator('#signInBtn');
  console.log('signInBtn text:', await signInBtn.textContent());
  const products = await page.locator('.card-body a').allTextContents();
  console.log('product links count', products.length);
  await browser.close();
})();
