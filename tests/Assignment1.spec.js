import { test, expect } from "@playwright/test";

const BASE_URL = "https://eventhub.rahulshettyacademy.com";

const USER_EMAIL = "lakshmi.itqa@gmail.com";

const USER_PASSWORD = "QATester@9";

async function login(page) {
  await page.goto(`${BASE_URL}/login`);

  await page.getByPlaceholder("you@email.com").fill(USER_EMAIL);

  await page.getByLabel("Password").fill(USER_PASSWORD);

  await page.locator("#login-btn").click();

  await expect(
    page.getByRole("link", { name: "Browse Events →" }),
  ).toBeVisible();
}

function futureDateValue() {
  const date = new Date();

  date.setDate(date.getDate() + 5);

  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}T10:00`;
}

test("create event via UI, book it, and verify seat reduction", async ({
  page,
}) => {
  await login(page);

  await page.goto(`${BASE_URL}/admin/events`);

  const eventTitle = `Test Event ${Date.now()}`;

  await page.locator("#event-title-input").fill(eventTitle);

  await page
    .locator("#admin-event-form textarea")
    .fill("Playwright automated test event");

  await page.getByLabel("City").fill("Hyderabad");

  await page.getByLabel("Venue").fill("Test Venue");

  await page.getByLabel("Event Date & Time").fill(futureDateValue());

  await page.getByLabel("Price ($)").fill("100");

  await page.getByLabel("Total Seats").fill("50");

  await page.locator("#add-event-btn").click();

  await expect(page.getByText("Event created!")).toBeVisible();

  await page.goto(`${BASE_URL}/events`);

  const eventCards = page.getByTestId("event-card");

  await expect(eventCards.first()).toBeVisible();

  const targetCard = eventCards.filter({ hasText: eventTitle }).first();

  await expect(targetCard).toBeVisible({ timeout: 5000 });

  const seatsBeforeBooking = parseInt(
    await targetCard.getByText("seat").first().innerText(),
  );

  await targetCard.getByTestId("book-now-btn").click();

  const ticketCount = page.locator("#ticket-count");

  await expect(ticketCount).toHaveText("1");

  await page.getByLabel("Full Name").fill("Test User");

  await page.locator("#customer-email").fill("testuser@gmail.com");

  await page.getByPlaceholder("+91 98765 43210").fill("9876543210");

  await page.locator(".confirm-booking-btn").click();

  const bookingRefEl = page.locator(".booking-ref").first();

  await expect(bookingRefEl).toBeVisible();

  const bookingRef = (await bookingRefEl.innerText()).trim();

  await page.getByRole("link", { name: "View My Bookings" }).click();

  await expect(page).toHaveURL(`${BASE_URL}/bookings`);

  const bookingCards = page.locator("#booking-card");

  await expect(bookingCards.first()).toBeVisible();

  const matchingCard = bookingCards.filter({
    has: page.locator(".booking-ref", { hasText: bookingRef }),
  });

  await expect(matchingCard).toBeVisible();

  await expect(matchingCard).toContainText(eventTitle);

  await page.goto(`${BASE_URL}/events`);

  await expect(eventCards.first()).toBeVisible();

  const updatedCard = eventCards.filter({ hasText: eventTitle }).first();

  await expect(updatedCard).toBeVisible();

  const seatsAfterBooking = parseInt(
    await updatedCard.getByText("seat").first().innerText(),
  );

  expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);
});
