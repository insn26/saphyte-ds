import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  async postVisit(page) {
    const element = page.locator("#storybook-root");
    await element.waitFor({ state: "visible" });
  },
};

export default config;
