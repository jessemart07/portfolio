import sgMail from "@sendgrid/mail";
export default async function contactForm(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false });
  }
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL)
    return res.status(503).json({ success: false });
  let data;
  try {
    data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ success: false });
  }
  const {
    name,
    email,
    message,
    subject = "Portfolio enquiry",
    botcheck,
  } = data || {};
  if (
    botcheck ||
    typeof name !== "string" ||
    !name.trim() ||
    name.length > 80 ||
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" ||
    !message.trim() ||
    message.length > 5000 ||
    typeof subject !== "string" ||
    subject.length > 160
  )
    return res.status(400).json({ success: false });
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({
      to: "jessedev07@gmail.com",
      from: process.env.SENDGRID_FROM_EMAIL,
      replyTo: email.trim(),
      subject: subject.replace(/[\r\n]/g, " "),
      text: "Enquiry from " + name.trim() + "\n\n" + message.trim(),
    });
    return res.status(200).json({ success: true });
  } catch {
    return res.status(502).json({ success: false });
  }
}
export const config = { api: { bodyParser: { sizeLimit: "16kb" } } };
