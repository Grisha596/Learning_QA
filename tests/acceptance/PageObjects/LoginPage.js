class LoginPage {
    constructor() {
        this.usernameSelector = '//input[@placeholder="Username"]'
        this.passwordSelector = '//input[@placeholder="Password"]'
        this.loginButtonSelector = '//input[@type="submit"]'
        this.messageSelector = '//div[@class="wrong"]'
        this.logoutIconSelector='//button[@aria-label="Logout"]'

        this.baseUrl = 'http://localhost:8080/'
        this.loginUrl = this.baseUrl+'login'
        this.homePageUrl = this.baseUrl+'files/'
    }

    async gotoLoginPage() {
        await page.goto(this.loginUrl)
    }

    async login(username, password) {
        await page.fill(this.usernameSelector, username)
        await page.fill(this.passwordSelector, password)
        await page.click(this.loginButtonSelector)
    }

}
module.exports = LoginPage