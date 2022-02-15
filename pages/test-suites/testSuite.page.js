class TestSuite {
    get newTestSuiteButton() { return $('button=New Test Suite'); }
    get customTestSuiteTemplate() { return $('.ant-empty-description'); }
    get nextButton() { return $('button=Next'); }
    get doneButton() { return $('button=Done'); }
    get testCasesNumber() { return $('.ant-tag') }
    get selectTestCaseCheckBoxes() { return $$('.ant-table-selection-column'); }
    get testSuiteTitleField() { return $('#test-suite_title'); }
    get testSuiteDescriptionField() { return $('#test-suite_description'); }
    get customTestSuiteTitleField() { return $('#custom-suite_title'); }
    get customTestSuiteDescriptionField() { return $('#custom-suite_description'); }
    get createTestSuiteButton() { return $('button=Create Test Suite'); }
    get tableData() { return $('.ant-table'); }
    get tableRow() { return $$('.ant-table-row'); }
    get okButton() { return $('button=OK'); }
    get cancelButton() { return $('button=Cancel'); }
    get tblCell() { return $(".ant-table-cell"); }


    getTableCell(text) {
       const selector = this.tblCell.selector + text;
        return $(selector);
    }

    async clickNewTestSuiteButton() {
        await this.newTestSuiteButton.waitForEnabled({ timeout: 30000 })
        await this.newTestSuiteButton.click();
    }

    async clickOnPredefinedTemplateAndGoToTestCases(template) {
        await $(`.ant-col=${template}`).click();
        await this.nextButton.click();
    }

    async createTestSuiteUsingTemplateWithAllTestCases(template, title, description) {
        await this.clickOnPredefinedTemplateAndGoToTestCases(template);
        let numberOfTestCases = await this.testCasesNumber.getText();
        await this.selectTestCaseCheckBoxes[0].click();
        await this.nextButton.click();
        await this.testSuiteTitleField.setValue(title);
        await this.testSuiteDescriptionField.setValue(description);
        await this.doneButton.click();
        return numberOfTestCases
    }

    async selectPredefinedTemplate(template) {
        await this.clickOnPredefinedTemplateAndGoToTestCases(template);
    }

    async createTestSuiteUsingTemplateWithSubsetOfTestCases(template, numberOfTestCases, title, description) {
        await this.clickOnPredefinedTemplateAndGoToTestCases(template);
        for (let i = 1; i < numberOfTestCases + 1; i++) {
            await this.selectTestCaseCheckBoxes[i].click();
        }
        await this.nextButton.click();
        await this.typeTitleAndDescription(title, description)
    }

    async selectSubsetOfTestCasesFromPredefinedTestSuite(numberOfTestCases) {
        await browser.pause(5000)
        for (let i = 1; i < numberOfTestCases + 1; i++) {
            await this.selectTestCaseCheckBoxes[i].click();
        }
        await this.nextButton.click();
    }

    async typeTitleAndDescription(title, description) {
        await this.testSuiteTitleField.setValue(title);
        await this.testSuiteDescriptionField.setValue(description);
        await this.doneButton.click();
    }

    async createCustomTestSuite(title, description) {
        await this.customTestSuiteTemplate.click();
        await this.customTestSuiteTitleField.setValue(title);
        await this.customTestSuiteDescriptionField.setValue(description);
        await this.createTestSuiteButton.click();
    }

    async clickOnCustomTemplate() {
        await this.customTestSuiteTemplate.click();
    }

    async submitWithTitleAndDescriptionForCustomTemplates(title, description) {
        await this.customTestSuiteTitleField.setValue(title);
        await this.customTestSuiteDescriptionField.setValue(description);
        await this.createTestSuiteButton.click();
    }

    async getTitleValidationError() {
        const input = await this.testSuiteTitleField.parentElement();
        const inputForm = await input.parentElement();
        const inputFormControl = await inputForm.parentElement();
        return await inputFormControl.$('.ant-form-item-explain-error').getText();

    }

    async getDescriptionValidationError() {
        const input = await this.testSuiteDescriptionField.parentElement();
        const inputForm = await input.parentElement();
        const inputFormControl = await inputForm.parentElement();
        return await inputFormControl.$('.ant-form-item-explain-error').getText();
    }

    async getCustomTitleValidationError() {
        const input = await this.customTestSuiteTitleField.parentElement();
        const inputForm = await input.parentElement();
        const inputFormControl = await inputForm.parentElement();
        return await inputFormControl.$('.ant-form-item-explain-error').getText();
    }

    async getCustomDescriptionValidationError() {
        const input = await this.customTestSuiteDescriptionField.parentElement();
        const inputForm = await input.parentElement();
        const inputFormControl = await inputForm.parentElement();
        return await inputFormControl.$('.ant-form-item-explain-error').getText();
    }
}

export default new TestSuite();