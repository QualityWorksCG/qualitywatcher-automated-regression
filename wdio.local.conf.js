import { config as baseConfig } from "./wdio.conf.js";
require("dotenv").config();
let ENV = process.env.ENV;

if (!ENV || !["stg", "prod"].includes(ENV)) {
  console.log(
    "No environment specified. Falling back to default environment (stg)."
  );

  ENV = "stg";
  process.env.ENV = ENV;
}

export const config = {
  ...baseConfig,
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 5,
      //
      browserName: "chrome",
      "wdio:devtoolsOptions": {
        headless: true,
      },
      acceptInsecureCerts: true,
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
    },
  ],
};
