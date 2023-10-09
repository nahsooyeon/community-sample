import { expect, test } from "@playwright/test";
import { STORAGE_STATE } from "../../playwright.config";

test("sample test", async ({ page }) => {
  await page.context().storageState({ path: STORAGE_STATE });
  await page.goto("http://localhost:3000");
  await expect(page.getByText("메인 페이지")).toBeVisible();
});
