import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../test-data/users";

test.describe("Login", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("standard user can log in", async ({ page }) => {
    await loginPage.login(
  users.standard.username,
  users.standard.password
);
    await expect(page).toHaveURL(/inventory/);
  });

  test("locked user sees error message", async () => {
   await loginPage.login(
  users.locked.username,
  users.locked.password
);
    await expect(loginPage.errorMessage).toContainText("locked out");
  });
});