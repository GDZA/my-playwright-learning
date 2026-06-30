# Final Project — Playwright Test Suite

## Test target

SauceDemo (https://www.saucedemo.com)

## Covered user journey

Login → Product Selection → Cart → Checkout

## Test cases

- Valid user can log in
- Locked user cannot log in
- User can add two products to cart
- User can remove one product from cart
- User can complete checkout and see success message

## Project structure

```
pages/
    LoginPage.ts
    InventoryPage.ts
    CartPage.ts
    CheckoutPage.ts

tests/
    login.spec.ts
    cart.spec.ts
    checkout.spec.ts
```

## Technologies

- TypeScript
- Playwright
- Page Object Model (POM)

## How to run

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run only final project tests:

```bash
npx playwright test tests/login.spec.ts tests/cart.spec.ts tests/checkout.spec.ts --project=chromium
```

Open HTML report:

```bash
npx playwright show-report
```

## Notes

- Tests use the Page Object Model design pattern.
- Assertions are kept in test files.
- Page Objects contain user actions and locators.
- Tests use semantic Playwright locators (`getByRole`, `getByPlaceholder`, `locator`).
- No hard waits (`waitForTimeout`) are used.

## Known limitations

This project covers the main user flow of SauceDemo and does not include every possible edge case.