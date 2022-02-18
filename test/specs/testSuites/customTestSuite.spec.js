import loginPage from "../../../pages/login/login.page";
import projectsPage from "../../../pages/projects/projects.page";
import navigationBar from "../../../pages/navigation/navigation.page";
import testSuitePage from "../../../pages/test-suites/testSuite.page";
import testCasesPage from "../../../pages/test-suites/testCases.page";
import userData from "../../../data/users.data";
import commonUtils from "../../../utils/common.utils";

describe("Verify functionality on test suites", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(
      userData.adminUser.username,
      userData.adminUser.password
    );
    await projectsPage.clickOnFirstProjectInList();
    await navigationBar.clickTestSuitesMenuItem();
  });

  it("Verify that Admin can successfully create a custom test suite", async () => {
    let title = "Auto_Test_400_" + commonUtils.randomString(5);
    let description =
      "Testing custom test suite creation with no test case" +
      commonUtils.randomString(10);
    await testSuitePage.clickNewTestSuiteButton();
    await testSuitePage.createCustomTestSuite(title, description);
    const expectedTitle = await testSuitePage.getTitleDataFromTable(title);
    const expectedDescription = await testSuitePage.getDescriptionDataFromTable(
      description
    );
    expect(expectedTitle).toBe(title);
    expect(expectedDescription).toBe(description);
  });

  it("Verify that Admin cannot create custom test suite with blank Title and Description entered", async () => {
    let description =
      "Custom test suite with blank title" + commonUtils.randomString(10);
    await testSuitePage.clickNewTestSuiteButton();
    await testSuitePage.createCustomTestSuite("", description);
    let errorMsg = await testSuitePage.getCustomTitleValidationError();
    expect(errorMsg).toHaveText("Please input a title");
  });

  it("Admin cannot create custom test suite with Title and blank Description entered", async () => {
    let title =
      "Custom test suite with blank description" + commonUtils.randomString(5);
    await testSuitePage.clickNewTestSuiteButton();
    await testSuitePage.createCustomTestSuite(title, "");
    let errorMsg = await testSuitePage.getCustomDescriptionValidationError();
    expect(errorMsg).toHaveText("Please input a description");
  });

  it("Verify that Admin cannot create custom test suite with blank Title and blank Description entered", async () => {
    let title = "Automation test" + commonUtils.randomString(5);
    await testSuitePage.clickNewTestSuiteButton();
    await testSuitePage.createCustomTestSuite("", "");
    let errorMsgTitle = await testSuitePage.getCustomTitleValidationError();
    expect(errorMsgTitle).toHaveText("Please input a title");
    let errorMsgDesc =
      await testSuitePage.getCustomDescriptionValidationError();
    expect(errorMsgDesc).toHaveText("Please input a description");
  });
});
