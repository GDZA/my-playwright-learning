// Import Playwright test runner and assertion tools
import { test, expect } from '@playwright/test';

// Define a test that checks the page title
test('has title', async ({ page }) => {
   await page.goto('https://playwright.dev/');

 // Verify that the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});

// Define a test that checks the Get started link
test('get started link', async ({ page }) => {
  // Open the Playwright website
  await page.goto('https://playwright.dev/');

  // Click the "Get started" link
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify that the Installation heading is visible
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
