const nodemailer = require("nodemailer");
const ejs = require('ejs');
const path = require("path");


const sendMail = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "authcsuf@outlook.com",
        pass: "xxxxxxxx",
      },
    });

    const template = await ejs.renderFile(path.join(__dirname, "email_templates/test.ejs"), {})

    const options = {
      from: "authcsuf@outlook.com",
      to: "subhadip1203edu@gmail.com",
      subject: "account verification",
      text: "Please verify your account",
      html: template,
    };

    const status = await transporter.sendMail(options);
    console.log(status.accepted);
  } catch (err) {
    console.log(err);
  }
};

sendMail();
