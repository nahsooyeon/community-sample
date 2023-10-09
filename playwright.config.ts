import { defineConfig, devices } from "@playwright/test";
import path from "path";

export const STORAGE_STATE = path.join(__dirname, "./test/e2e/storageState.json");

export default defineConfig({
  timeout: 60000,
  testDir: "./test/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["html", { outputFolder: "playwright-report" }]],
  workers: process.env.CI ? 1 : undefined,

  projects: [
    {
      name: "setup",
      testMatch: /global-setup\.ts/,
    },
    {
      name: "authorized chromium",
      use: { ...devices["Desktop Chrome"], storageState: STORAGE_STATE },
      dependencies: ["setup"],
      testMatch: "**/**/*.spec.ts",
    },
  ],
});
