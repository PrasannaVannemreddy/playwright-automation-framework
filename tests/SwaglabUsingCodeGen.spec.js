import { test, expect } from "@playwright/test";

test("swag lab end 2 end", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill("standard_user");
  await page.locator('[data-test="lastName"]').fill("lucky");
  await page.locator('[data-test="postalCode"]').fill("500079");
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="total-label"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText(
    "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
  );
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  await expect(page.locator('[data-test="complete-text"]')).toContainText(
    "Your order has been dispatched, and will arrive just as fast as the pony can get there!",
  );
  await page.locator('[data-test="back-to-products"]').click();
});
