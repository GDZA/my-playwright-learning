import { test, expect } from '@playwright/test';

test.describe('SauceDemo final project', () => {
  test('Valid user can log in and see inventory page', async ({ page }) => {
    // TODO
  });

  test('Locked user cannot log in and sees correct error', async ({ page }) => {
    // TODO
  });

  test('User can add two products to cart and verify badge count', async ({ page }) => {
    // TODO
  });

  test('User can remove one product and verify cart updates', async ({ page }) => {
    // TODO
  });

  test('User can complete checkout and see success message', async ({ page }) => {
    // TODO
  });
});