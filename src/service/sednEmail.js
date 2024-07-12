import nodemailer from "nodemailer";

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Marawan.abdelaziz33@gmail.com",
      pass: "xomeotjkymrjtzfi",
    },
  });

  const info = await transporter.sendMail({
    from: '"Marawan Abdelaziz" <Marawan.abdelaziz33@gmail.com>',
    to: to ? to : "tarekmagday@gmail.com",
    subject: subject ? subject : "Hello ✔",
    html: html ? html : "Hello ✔",
  });

  console.log("info: ", info);
  if (info.accepted.length) {
    return true;
  }
  return false;
};

export default sendEmail;
