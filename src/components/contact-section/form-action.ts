"use server";

import { createTransport } from "nodemailer";

// Create transporter configuration
const createTransporter = () => {
  return createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function formAction(
  data: FormData
): Promise<{ success: boolean; message: string }> {
  try {
    const payload = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      tel: data.get("tel") as string,
    };

    // Validate required fields
    if (!payload.name || !payload.email || !payload.tel) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return {
        success: false,
        message: "Invalid email format",
      };
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    // Email content for the company
    const companyMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.COMPANY_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${payload.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
            
            <p><strong>Name:</strong> ${payload.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${payload.tel}">${payload.tel}</a></p>
          </div>
          
          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #1976d2;">
              <strong>Note:</strong> This submission was received from the contact form on your website.
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>Best regards,<br>Dialog Imobil Website System</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${payload.name}
        Email: ${payload.email}
        Phone: ${payload.tel}
        
        This submission was received from the contact form on your website.
      `,
    };

    // Auto-reply email for the user
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: payload.email,
      subject: "Thank you for contacting Dialog Imobil",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Thank you for contacting us!
          </h2>
          
          <p>Dear ${payload.name},</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p>Thank you for reaching out to Dialog Imobil. We have received your contact form submission and will get back to you as soon as possible.</p>
            
            <h3 style="color: #007bff;">Your submitted information:</h3>
            <p><strong>Name:</strong> ${payload.name}</p>
            <p><strong>Email:</strong> ${payload.email}</p>
            <p><strong>Phone:</strong> ${payload.tel}</p>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #2e7d32;">
              <strong>What's next?</strong> Our team will review your inquiry and contact you within 24 hours during business days.
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>If you have any urgent questions, please don't hesitate to call us directly.</p>
            <p>Best regards,<br>Dialog Imobil Team</p>
          </div>
        </div>
      `,
      text: `
        Dear ${payload.name},
        
        Thank you for reaching out to Dialog Imobil. We have received your contact form submission and will get back to you as soon as possible.
        
        Your submitted information:
        Name: ${payload.name}
        Email: ${payload.email}
        Phone: ${payload.tel}
        
        What's next? Our team will review your inquiry and contact you within 24 hours during business days.
        
        If you have any urgent questions, please don't hesitate to call us directly.
        
        Best regards,
        Dialog Imobil Team
      `,
    };

    // Send emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log("Emails sent successfully for:", payload);

    return {
      success: true,
      message:
        "Your message has been sent successfully. We'll get back to you soon!",
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again later.",
    };
  }
}
