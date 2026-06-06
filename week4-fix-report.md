# Week 4 Fix Report

## Broken test #1 — wrong locator

Root cause: The placeholder locator was incorrect. The test used "User Name", but the actual placeholder is "Username".

Fix: Changed `getByPlaceholder("User Name")` to `getByPlaceholder("Username")`.

How I verified: Ran `npx playwright test tests/broken-tests.spec.ts --project=chromium` and confirmed the test passed.

## Broken test #2 — wrong expected text

Root cause: The expected error message did not match the actual text shown by the application.

Fix: Updated the expected text to `Epic sadface: Username and password do not match any user in this service`.

How I verified: Ran `npx playwright test tests/broken-tests.spec.ts --project=chromium` and confirmed the test passed.

## Broken test #3 — missing await

Root cause: The click action was missing `await`, so the assertion could run before the click finished.

Fix: Added `await` before `page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()`.

How I verified: Ran `npx playwright test tests/broken-tests.spec.ts --project=chromium` and confirmed the test passed.