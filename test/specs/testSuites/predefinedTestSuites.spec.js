// import loginPage from "../../../pages/login/login.page";
// import projectsPage from "../../../pages/projects/projects.page";
// import navigationBar from "../../../pages/navigation/navigation.page";
// import testSuitePage from "../../../pages/test-suites/testSuite.page";
// import testCasesPage from "../../../pages/test-suites/testCases.page";
// import userData from "../../../data/users.data";
// import { faker } from "@faker-js/faker";

// describe("Verify functionality on test suites", () => {
//   beforeEach(async () => {
//     loginPage.open();
//     await loginPage.login(
//       userData.adminUser.username,
//       userData.adminUser.password
//     );
//     await projectsPage.clickProjectLaunch();
//     await navigationBar.clickTestSuitesMenuItem();
//   });

//   it.only("Verify that Admin can create a test suite from predefined template with one test case selected", async () => {
//     let title = "Auto_Test_200" + faker.random.alphanumeric(5);
//     let description =
//       "Testing predefined test suite creation with one test case" +
//       faker.random.alphanumeric(10);
//     await testSuitePage.clickNewTestSuiteButton();
//     await testSuitePage.createTestSuiteUsingTemplateWithSubsetOfTestCases(
//       "E-commerce",
//       1,
//       title,
//       description
//     );
//     const titleSelector = testSuitePage.getTableCell(title);
//     expect(titleSelector).toBeExisting();
//     const descriptionSelector = testSuitePage.getTableCell(description);
//     expect(descriptionSelector).toBeExisting();
//   });

//   it("Verify that Admin can create test suite from predefined template with all test cases selected", async () => {
//     let title = "Auto_Test_300" + faker.random.alphanumeric(5);
//     let description =
//       "Testing predefined test suite creation with all test cases" +
//       faker.random.alphanumeric(10);
//     await testSuitePage.clickNewTestSuiteButton();
//     await testSuitePage.createTestSuiteUsingTemplateWithAllTestCases(
//       "E-commerce",
//       title,
//       description
//     );
//     const titleSelector = testSuitePage.getTableCell(title);
//     expect(titleSelector).toBeExisting();
//     const descriptionSelector = testSuitePage.getTableCell(description);
//     expect(descriptionSelector).toBeExisting();
//   });

//   it("Verify that Admin cannot create test suite from predefined template with no test cases selected", async () => {
//     await testSuitePage.clickNewTestSuiteButton();
//     await testSuitePage.clickOnPredefinedTemplateAndGoToTestCases("E-commerce");
//     await testSuitePage.selectSubsetOfTestCasesFromPredefinedTestSuite(0);
//     expect(testSuitePage.nextButton).toHaveAttr("disabled");
//   });

//   it("Verify that Admin cannot create test suite from predefined template with the suite Title blank", async () => {
//     let description =
//       "Title should not be blank" + faker.random.alphanumeric(10);
//     await testSuitePage.clickNewTestSuiteButton();
//     await testSuitePage.createTestSuiteUsingTemplateWithAllTestCases(
//       "E-commerce",
//       "",
//       description
//     );
//     let errorMsg = await testSuitePage.getTitleValidationError();
//     expect(errorMsg).toHaveText("Please input a title");
//   });

//   it("Verify that Admin cannot create test suite from predefined template with the suite Description blank", async () => {
//     let title = "Description should not be blank" + faker.random.alphanumeric(5);
//     await testSuitePage.clickNewTestSuiteButton();
//     await testSuitePage.createTestSuiteUsingTemplateWithAllTestCases(
//       "E-commerce",
//       title,
//       ""
//     );
//     let errorMsg = await testSuitePage.getDescriptionValidationError();
//     expect(errorMsg).toHaveText("Please input a description");
//   });
// });
