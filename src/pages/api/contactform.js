// pages/api/contact.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { email, message, subject, name } = JSON.parse(req.body);
  const data = await req.body;
  console.log(email);
  const msg = {
    to: 'jessedev07@gmail.com', // Your email address
    from: email, // Sender's email address
    subject: subject,
    text: message,
    html: `
    <h1>New Email Enquiry<h1>
    <p>Hi Jesse, you have received a new enquiry from ${name}<p>
    <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error sending email');
  }
};
