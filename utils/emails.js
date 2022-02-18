import MailSlurp from "mailslurp-client";
import { getMailSlurpSecretValue } from "../secrets";

const getMailClient = async () => {
  const { MAILSLURP_API_KEY } = await getMailSlurpSecretValue();
  const mailClient = new MailSlurp({ apiKey: MAILSLURP_API_KEY });
  return mailClient;
};
export const createInbox = async () => {
  const mailClient = await getMailClient();
  const inbox = await mailClient.createInbox();
  return inbox;
};

export const getSingleInbox = async () => {
  const mailClient = await getMailClient();
  const inbox = await mailClient.getAllInboxes(0, 1);

  if (inbox.length === 0) {
    console.log("No inboxes found, creating one");
    return await createInbox();
  }
  console.log("Found inboxes, using first one");
  return inbox;
};

export const getInboxFromMailClient = async (inboxId) => {
  const mailClient = await getMailClient();
  const inbox = await mailClient.getInbox(inboxId);
  return inbox;
};

export const getLatestEmail = async (inboxId, timeout = 10000) => {
  const mailClient = await getMailClient();
  const latestEmail = await mailClient.waitForLatestEmail(inboxId, timeout);
  return latestEmail;
};

export const getEmailAddress = async () => {
  const inbox = await getSingleInbox();
  return inbox.emailAddress;
};
