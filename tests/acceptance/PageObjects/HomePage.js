class HomePage {
    constructor() {
        this.newFileSelector = `//button[@ aria-label="New file"]`
        this.fieldSelector = `//input[@class="input input--block"]`
        this.createButtonSelector = `//button[@aria-label="Create"]`
        this.textFieldSelector = `//textarea[@class="ace_text-input"]`
        this.saveButtonSelector = `//button[@aria-label="Save"]`
        this.closeButtonSelector = `//button[@aria-label="Close"]`
        this.fileNameSelector = `//div[@aria-label="%s"]`

    }

    async createFile(fileName,text){
        await page.click(this.newFileSelector)
        await page.fill(this.fieldSelector,fileName)
        await page.click(this.createButtonSelector)
        await page.fill(this.textFieldSelector,text)
        await page.click(this.saveButtonSelector)
        await page.click(this.closeButtonSelector)
    }
}
module.exports = HomePage