import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "59c8d28e70da12",
    pass: "a670cf52b8e852",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    const feedback = await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Adilson Pereira Lima <adilson.pereira.lima@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
