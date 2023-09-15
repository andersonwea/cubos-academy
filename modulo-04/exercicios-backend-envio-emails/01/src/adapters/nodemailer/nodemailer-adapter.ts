import nodemailer, { Transporter } from "nodemailer";
import { Email, EmailGateway } from "../email-gateway";
import { env } from "../../env";
import { compileHtmlTemplate } from "../../utils/nodemailer/compile-html-template";
import { User } from "@prisma/client";

export class NodemailerAdapter implements EmailGateway {
  private transporter: Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: false,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS
      }
    })
  }
  async sendEmail(email: Email, user: User): Promise<string> {
    const html = await compileHtmlTemplate({
      source: email.template,
      data: {
        message: email.message,
        userName: user.name
      }
    })

    await this.transporter.sendMail({
      from: `Anderson <${email.from}>`,
      to: `User <${user.email}>`,
      subject: email.subject,
      html: html
    })

    return 'E-mail enviado'
  }
}