import { expect, test } from "@playwright/test";

test("core pages load and nav links work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /your bike is not broken/i })).toBeVisible();

  await page.getByRole("link", { name: /make a part/i }).first().click();
  await expect(page).toHaveURL(/make-a-part\.html$/);
  await expect(page.getByRole("heading", { name: /build the parts/i })).toBeVisible();

  await page.getByRole("link", { name: /host a workshop/i }).first().click();
  await expect(page).toHaveURL(/host-a-workshop\.html$/);
  await expect(page.getByRole("heading", { name: /bring upkeep to your city/i })).toBeVisible();

  await page.getByRole("link", { name: /about/i }).first().click();
  await expect(page).toHaveURL(/about\.html$/);
  await expect(page.getByRole("heading", { name: /a cultural shift/i })).toBeVisible();
});

test("mobile nav toggle opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const toggle = page.getByRole("button", { name: /toggle menu/i });
  const menu = page.locator("[data-nav-menu]");

  await toggle.click();
  await expect(menu).toHaveClass(/is-open/);

  await toggle.click();
  await expect(menu).not.toHaveClass(/is-open/);
});

test("make-a-part chip routes to expected part page", async ({ page }) => {
  await page.goto("/make-a-part.html");
  await page.getByRole("link", { name: /^saddle$/i }).first().click();
  await expect(page).toHaveURL(/parts\/saddle\.html$/);
  await expect(page.getByRole("heading", { name: /^saddle$/i })).toBeVisible();
});

test("part map marker selection updates workshop details", async ({ page }) => {
  await page.goto("/parts/fender.html");
  await page.waitForSelector("#part-map .leaflet-interactive");

  const initialName = (await page.locator("#workshop-name").textContent()) || "";
  const markers = page.locator("#part-map .leaflet-interactive");
  const markerCount = await markers.count();

  test.skip(markerCount < 2, "Need at least two markers for selection test.");

  await markers.nth(1).click({ force: true });
  await page.waitForTimeout(500);

  const updatedName = (await page.locator("#workshop-name").textContent()) || "";
  expect(updatedName).not.toEqual(initialName);
  await expect(page.locator("#workshop-image")).toHaveAttribute("src", /Assets\/stock\//);
});
