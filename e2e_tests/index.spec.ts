import { CartItem } from "@/types"
import { expect, Page, test } from "@playwright/test"

test("mobile app looks as expected", async ({ page }) => {
  await page.goto("/")
  await forceLoadLazyImages(page)

  await expectFullPageScreenshot(page, "products_page")

  await page.getByRole("link", { name: "Cart, 0 items" }).click()
  await page.waitForURL("**/cart")

  await expectFullPageScreenshot(page, "cart_empty")

  await page.getByRole("link", { name: "MBST logo" }).click()
  await page.waitForURL("**/")
  await page.getByRole("textbox").fill("gala")
  await page.waitForURL("**/?search=gala")

  await expectFullPageScreenshot(page, "products_search_result")

  await page.getByRole("link", { name: "Galaxy A05s" }).click()
  await page.waitForURL("**/product/SMG-A05S")

  await expectFullPageScreenshot(page, "product_details_page")

  await page.getByText("128 GB").click()
  await page.locator('label[for="#FFFF00"]').click()
  await page.waitForURL("**/product/SMG-A05S?storage=128+GB&color=Amarillo")
  await page.getByRole("button", { name: "Add" }).click()
  await page.waitForURL("**/cart")

  await checkCartItemsInLocalStorage(page, [
    {
      id: "SMG-A25-0",
      name: "Galaxy A25 5G",
      storage: "128 GB",
      color: "Amarillo",
      price: 219,
      image: "http://mock-server:5000/mock-image.svg",
    },
  ])

  await expectFullPageScreenshot(page, "cart")

  await page.getByRole("button", { name: "Remove" }).click()

  await expectFullPageScreenshot(page, "cart_empty")
})

async function forceLoadLazyImages(page: Page): Promise<void> {
  return page.evaluate(() => {
    for (const image of document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]')) {
      image.setAttribute("loading", "eager")
    }
  })
}

export async function expectFullPageScreenshot(page: Page, name: string) {
  await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true })
}

async function checkCartItemsInLocalStorage(page: Page, expected: CartItem[]) {
  return await page.waitForFunction((expectedItems) => {
    return localStorage["cart"] === JSON.stringify(expectedItems)
  }, expected)
}
