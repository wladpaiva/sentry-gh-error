import { test, expect } from "@playwright/test";

test("home page should be visible", async ({ page }) => {
  // Navigate to the homepage
  await page.goto("/");

  // Check if the main content is visible
  await expect(page.locator("main")).toBeVisible();

  // Verify the Next.js logo is present
  await expect(page.getByAltText("Next.js logo")).toBeVisible();

  // Check if the getting started text is present
  await expect(page.getByText("Get started by editing")).toBeVisible();

  // Verify the deployment button is present
  await expect(page.getByRole("link", { name: "Deploy now" })).toBeVisible();
});
