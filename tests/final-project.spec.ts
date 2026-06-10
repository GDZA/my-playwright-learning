import { test, expect } from '@playwright/test';

test.describe('SauceDemo final project', () => {
  test('Valid user can log in and see inventory page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/);
});

  test('Locked user cannot log in and sees correct error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('[data-test="error"]')).toHaveText(
    'Epic sadface: Sorry, this user has been locked out.'
  );
});

  test('User can add two products to cart and verify badge count', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Add to cart' }).nth(0).click();
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
});

 test('User can remove one product and verify cart updates', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Add to cart' }).nth(0).click();
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

  await page.getByRole('button', { name: 'Remove' }).nth(0).click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

  test('User can complete checkout and see success message', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  await page.locator('.shopping_cart_link').click();

  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByPlaceholder('First Name').fill('Anastasiia');
  await page.getByPlaceholder('Last Name').fill('Hudz');
  await page.getByPlaceholder('Zip/Postal Code').fill('12345');

  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('button', { name: 'Finish' }).click();

  await expect(page.locator('.complete-header')).toHaveText(
    'Thank you for your order!'
  );
});
});