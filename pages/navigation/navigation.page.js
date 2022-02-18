class NavigationBar {
  get overviewTile() {
    return $('a[href="/overview"]');
  }
  get testRunsTile() {
    return $('a[href="/test-runs"]');
  }

  get testRunMenuItem() {
    return $(".ant-menu-item:nth-child(4)");
  }

  get testSuiteItem() {
    return $(".ant-menu-item:nth-child(6)");
  }

  get testSuitesTile() {
    return $('a[href="/test-suites"]');
  }
  get settingsIcon() {
    return $(".ant-menu-item:nth-child(12)");
  }

  async getTestRunMenuItem() {
    const url = await browser.getUrl();
    const projectUrlParts = url.split("/");
    const projectId = projectUrlParts[projectUrlParts.length - 2];
    return $(`a[href="/${projectId}/test-runs]`);
  }

  async getTestSuiteMenuItem() {
    const url = await browser.getUrl();
    const projectUrlParts = url.split("/");
    const projectId = projectUrlParts[projectUrlParts.length - 2];
    console.log(`a[href="/${projectId}/test-suites"]`);
    return $(`a[href="/${projectId}/test-suites"]`);
  }

  async clickSettingsIcon() {
    await this.settingsIcon.waitForDisplayed({ timeout: 50000 });
    await this.settingsIcon.click();
  }

  async clickOverviewTile() {
    await this.overviewTile.click();
  }

  async clickTestRunsTile() {
    await this.getTestRunMenuItem.waitForDisplayed({ timeout: 50000 });
    await this.getTestRunMenuItem.click();
  }

  async clickTestSuitesMenuItem() {
    await this.testSuiteItem.waitForDisplayed({ timeout: 50000 });
    await this.testSuiteItem.click();
  }
}

export default new NavigationBar();
