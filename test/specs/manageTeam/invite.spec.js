import loginPage from "../../../pages/login/login.page";
import projectPage from "../../../pages/projects/projects.page";
import workspaceSettings from "../../../pages/workspaceSettings.page";
import navigationPage from "../../../pages/navigation/navigation.page";
import userData from "../../../data/users.data";
import { getLatestEmail, createInbox } from "../../../utils/emails";

import { faker } from "@faker-js/faker";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

const { adminUser, roles } = userData;
const { username, password } = adminUser;

const loginAsAdmin = async () => {
  await loginPage.open();
  await loginPage.login(username, password);
};

const INVITATION_EMAIL_PATTERN =
  /https:\/\/(stg?|).?qualitywatcher.com\/invitation.*/g;

describe("Invite Users", async () => {
  beforeEach("Navigate to the user invite page", async () => {
    await loginAsAdmin();

    await projectPage.clickOnFirstProjectInList();
    await navigationPage.clickSettingsIcon();
    await workspaceSettings.clickManageTeamSpan();
    await workspaceSettings.clickAddTeamMemberSpan();
  });

  it("As an admin user, I should be able to invite an admin user", async () => {
    const inbox = await createInbox();
    const emailAddress = inbox.emailAddress;
    await workspaceSettings.sendInvitation(
      firstName,
      lastName,
      emailAddress,
      roles.administrator
    );

    const invitationEmail = await getLatestEmail(inbox.id);
    const confirmationUrl = invitationEmail.body.match(
      INVITATION_EMAIL_PATTERN
    )[0];
    console.log(confirmationUrl);
  });

  //   it("As an admin user, I should be able to invite an editor user", async () => {
  //     const inbox = await createInbox();
  //     const emailAddress = inbox.emailAddress;
  //     await workspaceSettings.sendInvitation(
  //       firstName,
  //       lastName,
  //       emailAddress,
  //       roles.administrator
  //     );

  //     const invitationEmail = await getLatestEmail(inbox.id);
  //     const confirmationUrl = invitationEmail.body.match(/https:\/\/.*/)[0];
  //   });

  //   it("As an admin user, I should be able to invite an viewer user", async () => {
  //     const inbox = await createInbox();
  //     const emailAddress = inbox.emailAddress;
  //     await workspaceSettings.sendInvitation(
  //       firstName,
  //       lastName,
  //       emailAddress,
  //       roles.administrator
  //     );

  //     const invitationEmail = await getLatestEmail(inbox.id);
  //     const confirmationUrl = invitationEmail.body.match(/https:\/\/.*/)[0];
  //   });
});
