import { test, expect, type Page } from '@playwright/test';

test.describe('SauceDemo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  async function login(page: Page) {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
      page,
      'User should be redirected to inventory page after successful login'
    ).toHaveURL(/inventory/);
  }

  test('Login - happy path', async ({ page }) => {
    await login(page);
  });

  test('Negative login - wrong password', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
      page.locator('[data-test="error"]'),
      'Error should appear for wrong credentials'
    ).toBeVisible();
  });

  test('Add product to cart', async ({ page }) => {
    await login(page);

    await page.getByRole('button', { name: 'Add to cart' }).first().click();

    await expect(
      page.locator('.shopping_cart_badge'),
      'Cart badge should show 1 after adding a product'
    ).toHaveText('1');
  });

  test('Remove product from cart', async ({ page }) => {
    await login(page);

    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.getByRole('button', { name: 'Remove' }).first().click();

    await expect(
      page.locator('.shopping_cart_badge'),
      'Cart badge should not be visible after removing product'
    ).not.toBeVisible();
  });

  test('Empty form validation', async ({ page }) => {
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
      page.locator('[data-test="error"]'),
      'Error should appear when login form is submitted empty'
    ).toBeVisible();

    await expect(
      page.locator('[data-test="error"]'),
      'Error text should explain that username is required'
    ).toContainText('Username is required');
  });

  test('Only username validation', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
      page.locator('[data-test="error"]'),
      'Error should appear when password is missing'
    ).toBeVisible();

    await expect(
      page.locator('[data-test="error"]'),
      'Error text should explain that password is required'
    ).toContainText('Password is required');
  });

  test('Only password validation', async ({ page }) => {
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
      page.locator('[data-test="error"]'),
      'Error should appear when username is missing'
    ).toBeVisible();

    await expect(
      page.locator('[data-test="error"]'),
      'Error text should explain that username is required'
    ).toContainText('Username is required');
  });

  test('Fast add and remove cycle keeps cart empty', async ({ page }) => {
    await login(page);

    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.getByRole('button', { name: 'Remove' }).first().click();

    await expect(
      page.locator('.shopping_cart_badge'),
      'Cart badge should not be visible after fast add/remove cycle'
    ).not.toBeVisible();
  });
  test('Negative login - locked out user', async ({ page }) => {
  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.locator('[data-test="error"]'),
    'Locked out user should see locked account error'
  ).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});
});