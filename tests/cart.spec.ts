import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { users } from "../test-data/users";

test.describe("Cart", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);


    await loginPage.open();
    await loginPage.login(
  users.standard.username,
  users.standard.password
);
  });

  test("User can add two products to cart", async () => {
  await inventoryPage.addFirstProduct();
  await inventoryPage.addSecondProduct();

  await expect(inventoryPage.cartBadge).toHaveText("2");
});

test("User can remove one product and verify cart updates", async () => {
  await inventoryPage.addFirstProduct();
  await inventoryPage.addSecondProduct();

  await expect(inventoryPage.cartBadge).toHaveText("2");

  await inventoryPage.removeFirstProduct();

  await expect(inventoryPage.cartBadge).toHaveText("1");
});

});