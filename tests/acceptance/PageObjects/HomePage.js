const { filesToDelete, swapFileOnRename } = require('../testHelper/helper.js');
const util = require("util")

class HomePage {
    constructor() {
        this.newFileSelector = `//button[@ aria-label="New file"]`
        this.fieldSelector = `//input[@class="input input--block"]`
        this.createButtonSelector = `//button[@aria-label="Create"]`
        this.textFieldSelector = `//textarea[@class="ace_text-input"]`
        this.saveButtonSelector = `//button[@aria-label="Save"]`
        this.closeButtonSelector = `//button[@aria-label="Close"]`
        this.fileNameSelector = `//div[@aria-label="%s"]`
        this.renameIconSelector='//button[@title="Rename"]'
        this.renameButtonSelector='//button[@type="submit"]'
    }

    async createFile(fileName,text){
        await page.click(this.newFileSelector)
        await page.fill(this.fieldSelector,fileName)
        await page.click(this.createButtonSelector)
        await page.fill(this.textFieldSelector,text)
        await page.click(this.saveButtonSelector)
        await page.click(this.closeButtonSelector)
        filesToDelete.push(fileName)
    }

    async renameFile(oldFileName, newFileName){
        swapFileOnRename(oldFileName, newFileName);
        await page.click(util.format(this.fileNameSelector, oldFileName))
        await page.click(this.renameIconSelector)
        await page.fill(this.fieldSelector, newFileName)
        await page.click(this.renameButtonSelector)
    }

}
module.exports = HomePage