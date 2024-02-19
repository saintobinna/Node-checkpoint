var nodemailer = require("nodemailer");

const sendEMail = () => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "saintobinna@gmail.com",
      pass: "passwords#",
    },
  });

  var mailOptions = {
    from: "saintobinna@gmail.com",
    to: "akinolagabrieltemitope@gmail.com",
    subject: "Sending Email using Node.js",
    text: "how far instructor",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendEMail };
