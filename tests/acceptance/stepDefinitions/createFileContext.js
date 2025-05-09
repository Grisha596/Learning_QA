const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const util = require("util")

const HomePage = require("../PageObjects/HomePage.js");
const homePage = new HomePage

Given('the admin has created a new file {string} with content {string}', async function (fileName, content) {
    await homePage.createFile(fileName, content)
    const fileLocator = page.locator(util.format(homePage.fileNameSelector, fileName));
    await expect(fileLocator).toBeVisible()
  });

When('the admin creates a new file {string} with content {string}', async function (fileName, text) {
    await homePage.createFile(fileName,text)
});

Then('the admin should be able to see {string} file', async function (fileName) {
    const fileLocator = page.locator(util.format(homePage.fileNameSelector, fileName));
    await expect(fileLocator).toBeVisible()
});