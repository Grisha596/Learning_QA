const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const assert = require("assert")
const util = require("util")

const LoginPage = require("../PageObjects/LoginPage.js");
const loginPage = new LoginPage

const usernameSelector = '//input[@placeholder="Username"]';
const passwordSelector = '//input[@placeholder="Password"]';
const loginButtonSelector = '//input[@type="submit"]';
const messageSelector = '//div[@class="wrong"]';
const baseUrl = 'http://localhost:8080/';
const loginUrl = baseUrl+'login';
const homePageUrl = baseUrl+'files/';

Given('the admin has browsed to the login page', async function () {
  await loginPage.gotoLoginPage()
  await expect(page).toHaveURL(loginPage.loginUrl)
});

Given('the admin has logged in with username {string} and password {string} using webUI', async function (username, password) {
  await loginPage.login(username,password)
  const iconLocator = page.locator(util.format(loginPage.logoutIconSelector));
  await expect(iconLocator).toBeVisible()
});

When('admin logs in with username {string} and password {string} using webUI', async function (username, password) {
  await loginPage.login(username,password)
});

Then('admin should be redirected to the webUI homepage', async function () {
  await expect(page).toHaveURL(loginPage.homePageUrl)
});

Then('admin should see {string} message', async function (expectedMessage) {
  const actualMessage = await page.locator(messageSelector).textContent()
  assert.equal(
    actualMessage,
    expectedMessage,
    `Expected message "${expectedMessage}" but received "${actualMessage}"` 
  )
  });