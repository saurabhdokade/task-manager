const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email service provider
      auth: {
        user: process.env.EMAIL_USERNAME, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: `Task Manager <${process.env.EMAIL_USERNAME}>`, // Sender address
      to: options.email, // Receiver address
      subject: options.subject, // Subject line
      text: options.message, // Plain text body
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;
