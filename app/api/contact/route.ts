import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'Bevcon Solutions <contact@bevconsolutions.au>',
      to: process.env.ADMIN_EMAIL || 'admin@bevconsolutions.au',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
            .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .content { padding: 40px 30px; }
            .field { margin-bottom: 24px; }
            .field-label { font-weight: 600; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
            .field-value { color: #4b5563; font-size: 16px; line-height: 1.5; }
            .message-box { background-color: #f9fafb; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; border-radius: 4px; }
            .footer { background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer p { margin: 0; color: #6b7280; font-size: 14px; }
            .highlight { color: #1e40af; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Inquiry</h1>
            </div>

            <div class="content">
              <div class="field">
                <div class="field-label">From</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}" class="highlight">${email}</a></div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value"><a href="tel:${phone}" class="highlight">${phone}</a></div>
              </div>
              ` : ''}

              ${company ? `
              <div class="field">
                <div class="field-label">Company</div>
                <div class="field-value">${company}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">
                  <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>

            <div class="footer">
              <p>This message was sent from the Bevcon Solutions contact form.</p>
              <p style="margin-top: 10px;">Please respond promptly to provide excellent customer service.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'Bevcon Solutions <contact@bevconsolutions.au>',
      to: email,
      subject: 'Thank you for contacting Bevcon Solutions',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you for contacting us</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
            .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .content { padding: 40px 30px; }
            .highlight { color: #1e40af; font-weight: 600; }
            .footer { background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer p { margin: 0; color: #6b7280; font-size: 14px; }
            .button { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>

            <div class="content">
              <p>Dear ${name},</p>

              <p>Thank you for reaching out to <span class="highlight">Bevcon Solutions</span>. We have received your message and appreciate you taking the time to contact us.</p>

              <p>Our team will review your inquiry and get back to you within 24 hours. We're committed to providing you with the best possible solutions for your industrial needs.</p>

              <p>In the meantime, feel free to explore our website to learn more about our comprehensive range of products and services:</p>

              <div style="text-align: center;">
                <a href="https://www.bevconsolutions.au/products" class="button">View Our Products</a>
              </div>

              <p>Best regards,<br>
              <strong>The Bevcon Solutions Team</strong></p>
            </div>

            <div class="footer">
              <p>Bevcon Solutions | Industrial Entrance & Bulk Material Handling Solutions</p>
              <p style="margin-top: 10px;">Australia's trusted provider of entrance automation and material handling solutions</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
