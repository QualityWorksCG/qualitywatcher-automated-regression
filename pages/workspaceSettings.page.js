import { roles } from "../data/users.data";

class WorkspaceSettings {
  get manageTeamSpan() {
    return $("//*[contains(text(),'Manage Team')]");
  }

  get addTeamMemberSpan() {
    return $("//*[contains(text(),'Add team member')]");
  }

  get administratorSelectOption() {
    return $(
      "//div[contains(@class, 'ant-select-item-option-content') and contains(text(),'Administrator')]"
    );
  }
  get editorSelectOption() {
    return $(
      "//div[contains(@class, 'ant-select-item-option-content') and contains(text(),'Editor')]"
    );
  }
  get viewerSelectOption() {
    return $(
      "//div[contains(@class, 'ant-select-item-option-content') and contains(text(),'Viewer')]"
    );
  }

  get firstNameField() {
    return $("#dynamic_form_nest_item_members_0_firstName");
  }

  get lastNameField() {
    return $("#dynamic_form_nest_item_members_0_lastName");
  }

  get emailField() {
    return $("#dynamic_form_nest_item_members_0_email");
  }

  get roleSelect() {
    return $("#dynamic_form_nest_item_members_0_role");
  }

  get submitButton() {
    return $("button[type='submit']");
  }

  async clickManageTeamSpan() {
    await this.manageTeamSpan.waitForDisplayed({ timeout: 30000 });
    await this.manageTeamSpan.click();
  }

  async clickAddTeamMemberSpan() {
    await this.addTeamMemberSpan.scrollIntoView();
    await this.addTeamMemberSpan.waitForDisplayed({ timeout: 30000 });
    await this.addTeamMemberSpan.click();
  }

  async selectRole(role) {
    switch (role) {
      case roles.administrator:
        await this.administratorSelectOption.waitForDisplayed({
          timeout: 30000,
        });
        await this.administratorSelectOption.click();
        break;
      case roles.editor:
        await this.editorSelectOption.waitForDisplayed({ timeout: 30000 });
        await this.editorSelectOption.click();
        break;
      case roles.viewer:
        await this.viewerSelectOption.waitForDisplayed({ timeout: 30000 });
        await this.viewerSelectOption.click();
        break;

      default:
        break;
    }
  }

  async sendInvitation(firstName, lastName, email, role) {
    await this.firstNameField.waitForDisplayed({ timeout: 30000 });
    await this.firstNameField.setValue(firstName);
    await this.lastNameField.setValue(lastName);
    await this.emailField.setValue(email);
    await this.roleSelect.click();
    await this.selectRole(role);
    await browser.pause(2000);

    await this.submitButton.click();

    await browser.pause(8000);
  }

  async checkConfirmationUrl(confirmationUrl) {
    
  }
}

export default new WorkspaceSettings();
