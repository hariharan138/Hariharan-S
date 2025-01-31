const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000", "https://yourfrontend.com"] })); // Allow only frontend URLs

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    // Validate input fields
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    // Setup transporter
    let transporter;
    try {
        transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    } catch (error) {
        console.error("Error creating transporter:", error);
        return res.status(500).json({ success: false, message: "Email service error" });
    }

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to your email
        replyTo: email, // User's email as reply-to
        subject: "New Contact Form Submission",
        html: `<h1>New Message from ${name}</h1>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email sent successfully!" });
    } catch (err) {
        console.error("Error sending email:", err.response || err);
        res.status(500).json({ success: false, message: err.message || "Failed to send email" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
