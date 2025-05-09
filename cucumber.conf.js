const {
    Before,
    BeforeAll,
    AfterAll,
    After,
    setDefaultTimeout,
  } = require("@cucumber/cucumber");
  const { chromium } = require("playwright");
  const { cleanUpTempFiles } = require('./tests/acceptance/testHelper/helper.js')

  setDefaultTimeout(60000);
  BeforeAll(async function () {
    global.browser = await chromium.launch({
    headless: true,
    // headless: false,
    // slowMo: 1000,
    });
  });
  
  AfterAll(async function () {
    await global.browser.close();
  });
  
  Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
  });
  
  After(async function () {
    await global.page.close();
    await global.context.close();
    await cleanUpTempFiles();
  });