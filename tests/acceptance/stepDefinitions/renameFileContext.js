const { Given, When, Then } = require('@cucumber/cucumber')

const HomePage = require("../PageObjects/HomePage.js")
const homePage = new HomePage

When('the admin renames a file {string} to {string}', async function (oldName, newName) {
  await homePage.renameFile(oldName, newName)
});