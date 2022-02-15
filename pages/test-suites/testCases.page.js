class TestCases {
    get testCaseTable() { return $('.ant-table'); }
    get numberOfTestCasesTag() { return $('.ant-tag-magenta'); }
    get testCaseBackButton() { return $('.ant-page-header-back-button'); }
    get addTestCaseButton() { return $('button=Add Test Case'); }
    get addNewButton() { return $('button=Add New'); }
    get addTestCaseModel() { return $('.ant-modal-body'); }
    get testCaseTitleField() { return $('#form_in_modal_title'); }
    get testCasePrioritySelector() { return $('#form_in_modal_priority'); }
    get testCaseReferenceIdField() { return $('#form_in_modal_referenceKey'); }
    get testCaseReferenceUrlField() { return $('#form_in_modal_referenceUrl'); }
    get testCaseTextBoxes() { return $$('div[aria-label="Rich Text Editor, main"]'); }
    get testCaseCreateButton() { return $('button=Create'); }
    get okButton() { return $('button=OK'); }



    async createTestCaseForCustomSuite(title, priority, referenceId, referenceUrl, preconditions, testSteps, expectedOutcome) {
        await this.addTestCaseModel.waitForDisplayed( {timeout: 10000 } )
        await this.testCaseTitleField.setValue(title);
        await this.testCasePrioritySelector.click();
        await this.testCaseReferenceIdField.setValue(referenceId);
        await this.testCaseTextBoxes[0].setValue(preconditions);
        await this.testCaseTextBoxes[1].setValue(testSteps);
        await this.testCaseTextBoxes[2].setValue(expectedOutcome);
        await this.testCaseCreateButton.click();
    }

    async createTestCaseForPreDefinedSuite(title, priority, referenceId, preconditions, testSteps, expectedOutcome) {
        await this.addTestCaseModel.waitForDisplayed( {timeout: 10000 } )
        await this.testCaseTitleField.setValue(title);
        await this.testCasePrioritySelector.click();
        await this.testCaseReferenceIdField.setValue(referenceId);
        await this.testCaseTextBoxes[0].setValue(preconditions);
        await this.testCaseTextBoxes[1].setValue(testSteps);
        await this.testCaseTextBoxes[2].setValue(expectedOutcome);
        await this.testCaseCreateButton.click();
    }

    async checkTestCaseTitleValidationError(errorMessage) {
        const input = await this.testCaseTitleField.parentElement();
        const inputForm = await input.parentElement();
        const inputFormControl = await inputForm.parentElement();
    }
}

export default new TestCases();