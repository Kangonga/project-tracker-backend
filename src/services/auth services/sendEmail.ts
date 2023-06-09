import 'dotenv/config';
import { createTransport } from 'nodemailer';

export const sendEmail = (email: string, token: string) => {
  const transporter = createTransport({
    service: process.env.NODEMAILER_SERVICE,
    host: process.env.NODEMAILER_HOST,

    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    secure: Boolean(process.env.NODEMAILER_SECURE),
    port: Number(process.env.NODEMAILER_PORT),
  });
  const mailOptions = {
    from: process.env.NODEMAILER_FROM,
    to: email,
    subject: 'reset password token',
    text: token,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      throw new Error(err.message);
    } else {
      console.log('mail sent. Info', info);
    }
  });
};
