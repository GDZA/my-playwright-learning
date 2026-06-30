import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator(".shopping_cart_badge");
  }

  async addFirstProduct() {
    await this.page.getByRole("button", { name: "Add to cart" }).nth(0).click();
  }

  async addSecondProduct() {
    await this.page.getByRole("button", { name: "Add to cart" }).nth(1).click();
  }

  async removeFirstProduct() {
    await this.page.getByRole("button", { name: "Remove" }).nth(0).click();
  }

  async openCart() {
    await this.page.locator(".shopping_cart_link").click();
  }
}