import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
app.set("trust proxy", 1);

const PORT = process.env.PORT || 5000;

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET"],
  })
);

app.use(express.json({ limit: "50kb" }));

// Basic protection against spam submissions
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Bird Net Surat API is running",
  });
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      propertyType,
      service,
      message,
    } = req.body;

    // Required fields
    if (!name?.trim() || !phone?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name and phone number are required.",
      });
    }

    // Basic phone validation
    const cleanPhone = phone.trim();

    if (!/^[0-9+() -]{7,18}$/.test(cleanPhone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number.",
      });
    }

    const safeName = escapeHtml(name.trim());
    const safePhone = escapeHtml(cleanPhone);
    const safeEmail = escapeHtml(email?.trim() || "Not provided");
    const safePropertyType = escapeHtml(
      propertyType?.trim() || "Not selected"
    );
    const safeService = escapeHtml(service?.trim() || "Not selected");
    const safeMessage = escapeHtml(
      message?.trim() || "No message provided"
    ).replaceAll("\n", "<br>");

    const mailSubject = `New Quote Request - ${service?.trim() || "Bird Net Surat"}`;

    const html = `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#f4f9fc;font-family:Arial,sans-serif;color:#102a43;">
          <div style="max-width:700px;margin:30px auto;background:#ffffff;border:1px solid #d9e7f0;border-radius:10px;overflow:hidden;">

            <div style="background:#0B3A68;padding:24px 28px;color:#ffffff;">
              <h1 style="margin:0;font-size:24px;">
                New Quote Request
              </h1>
              <p style="margin:7px 0 0;color:#dcecf8;">
                Bird Net Surat
              </p>
            </div>

            <div style="padding:28px;">

              <h2 style="font-size:18px;margin:0 0 18px;">
                Customer Details
              </h2>

              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;font-weight:bold;width:180px;">Name</td>
                  <td style="padding:10px 0;">${safeName}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">Phone</td>
                  <td style="padding:10px 0;">
                    <a href="tel:${safePhone}" style="color:#1769AA;">
                      ${safePhone}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">Email</td>
                  <td style="padding:10px 0;">${safeEmail}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">Property Type</td>
                  <td style="padding:10px 0;">${safePropertyType}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0;font-weight:bold;">Service Required</td>
                  <td style="padding:10px 0;">${safeService}</td>
                </tr>
              </table>

              <div style="margin-top:25px;padding:18px;background:#f4f9fc;border-left:4px solid #1769AA;">
                <strong>Customer Message</strong>
                <p style="margin:10px 0 0;line-height:1.7;">
                  ${safeMessage}
                </p>
              </div>

              <div style="margin-top:25px;padding-top:18px;border-top:1px solid #d9e7f0;font-size:13px;color:#526777;">
                This enquiry was submitted through the Bird Net Surat website.
              </div>

            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: `"Bird Net Surat Website" <${process.env.SMTP_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: mailSubject,
      html,
    };

    // Let the client reply directly to customer
    if (email?.trim()) {
      mailOptions.replyTo = email.trim();
    }

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Quote request sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your request. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Bird Net Surat API running on port ${PORT}`);
});