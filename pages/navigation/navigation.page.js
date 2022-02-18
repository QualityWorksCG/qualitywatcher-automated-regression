class NavigationBar {
  get overviewTile() {
    return $('a[href="/overview"]');
  }
  get testRunsTile() {
    return $('a[href="/test-runs"]');
  }
  get testSuitesTile() {
    return $('a[href="/test-suites"]');
  }
  get settingsIcon() {
    return $(".ant-menu-item:nth-child(12)");
  }

  async clickSettingsIcon() {
    await this.settingsIcon.waitForDisplayed({ timeout: 30000 });
    await this.settingsIcon.click();
  }

  async clickOverviewTile() {
    await this.overviewTile.click();
  }

  async clickTestRunsTile() {
    await this.testRunsTile.waitForDisplayed({ timeout: 30000 });
    await this.testRunsTile.click();
  }

  async clickTestSuitesTile() {
    await this.testSuitesTile.waitForDisplayed({ timeout: 30000 });
    await this.testSuitesTile.click();
  }
}

export default new NavigationBar();
