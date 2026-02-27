import { test } from "@playwright/test";

test("desktop home screenshot", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.waitForTimeout(800);
  await page.screenshot({ path: "tests/screenshots/desktop/home.png", fullPage: true });
});

test("desktop make-a-part screenshot", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/make-a-part.html");
  await page.waitForTimeout(800);
  await page.screenshot({ path: "tests/screenshots/desktop/make-a-part.png", fullPage: true });
});

test("mobile home screenshot", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForTimeout(800);
  await page.screenshot({ path: "tests/screenshots/mobile/home.png", fullPage: true });
});

test("mobile make-a-part screenshot", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/make-a-part.html");
  await page.waitForTimeout(800);
  await page.screenshot({ path: "tests/screenshots/mobile/make-a-part.png", fullPage: true });
});
