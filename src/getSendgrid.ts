import mail, { MailService } from "@sendgrid/mail";

export function getSendGrid(): MailService {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (apiKey === undefined) {
    throw new Error("Missing SENDGRID_API_KEY environment variable");
  }
  mail.setApiKey(apiKey);
  return mail;
}

export default getSendGrid;
