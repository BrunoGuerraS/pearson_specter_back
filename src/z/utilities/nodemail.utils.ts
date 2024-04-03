import * as nodemailer from "nodemailer";
import config from "../config/config";

export const sendEmail = ({ email, report_id = 123 }: any) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "bruno932151@gmail.com",
      pass: config.nodeMailPass,
    },
  });

  const mailOptions = {
    from: "Jhon Dee",
    to: `${email}`,
    subject: "send report baby",
    html: `<h1>Reporte enviado ${report_id}</h1>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("esto es un detalle succes email", info);
    }
  });
};
