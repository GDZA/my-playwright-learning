import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { users } from "../test-data/users";

test.describe("Checkout", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.open();
    await loginPage.login(
  users.standard.username,
  users.standard.password
);
  });

  test("User can complete checkout and see success message", async () => {
    await inventoryPage.addFirstProduct();
    await inventoryPage.openCart();
    await cartPage.checkout();
    await checkoutPage.fillInfo("Anastasiia", "Hudz", "12345");
await checkoutPage.finish();

await expect(checkoutPage.successMessage).toBeVisible();

});

});