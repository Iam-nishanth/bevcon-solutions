import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email to admin
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: 'Bevcon Solutions <rithvik@bevconsolutions.au>',
      to: process.env.ADMIN_EMAIL || 'info@bevconsolutions.au',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Inquiry - Bevcon Solutions</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1f2937; margin: 0; padding: 0; background-color: #f9fafb; }
            .container { max-width: 600px; margin: 40px auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #1B365D 0%, #2d5280 100%); color: white; padding: 40px 30px; text-align: center; }
            .logo { margin-bottom: 20px; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 10px 0 0 0; opacity: 0.9; font-size: 14px; }
            .content { padding: 40px 30px; }
            .alert-box { background: linear-gradient(135deg, #F26722 0%, #ff7b3d 100%); color: white; padding: 16px 20px; border-radius: 8px; margin-bottom: 30px; text-align: center; font-weight: 600; }
            .field { margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb; }
            .field:last-child { border-bottom: none; }
            .field-label { font-weight: 700; color: #1B365D; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
            .field-value { color: #374151; font-size: 16px; line-height: 1.6; }
            .field-value a { color: #F26722; text-decoration: none; font-weight: 600; }
            .field-value a:hover { text-decoration: underline; }
            .message-box { background-color: #f9fafb; border-left: 4px solid #1B365D; padding: 20px; margin: 20px 0; border-radius: 6px; }
            .footer { background-color: #1B365D; color: white; padding: 30px; text-align: center; }
            .footer p { margin: 5px 0; font-size: 13px; opacity: 0.9; }
            .footer .brand { font-weight: 700; font-size: 16px; margin-bottom: 10px; opacity: 1; }
            .divider { height: 4px; background: linear-gradient(90deg, #F26722 0%, #1B365D 100%); }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="divider"></div>
            <div class="header">
              <div class="logo" style="background-color: white; padding: 15px; border-radius: 8px; display: inline-block;">
                <img src="https://www.bevconsolutions.au/images/bevcon-solutions-logo.svg" alt="Bevcon Solutions" width="180" style="max-width: 100%; height: auto; display: block;" />
              </div>
              <h1>🔔 New Contact Inquiry</h1>
              <p>Website Contact Form Submission</p>
            </div>

            <div class="content">
              <div class="alert-box">
                Action Required: New Customer Inquiry
              </div>

              <div class="field">
                <div class="field-label">Contact Person</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}

              ${company ? `
              <div class="field">
                <div class="field-label">Company Name</div>
                <div class="field-value">${company}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">Inquiry Details</div>
                <div class="message-box">
                  <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>

              <p style="color: #6b7280; font-size: 14px; margin-top: 30px; padding: 15px; background: #fef3cd; border-left: 4px solid #F26722; border-radius: 4px;">
                <strong>⏱️ Response Time:</strong> Please respond within 24 hours to maintain excellent customer service standards.
              </p>
            </div>

            <div class="footer">
              <p class="brand">BEVCON SOLUTIONS</p>
              <p>Industrial Access | Material Handling | Fume Extraction</p>
              <p style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2);">
                This is an automated notification from bevconsolutions.au
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (adminError) {
      console.error('Admin email error:', adminError);
      return NextResponse.json({ error: adminError }, { status: 500 });
    }

    // Send confirmation email to user
    const { data: confirmData, error: confirmError } = await resend.emails.send({
      from: 'Bevcon Solutions <info@bevconsolutions.au>',
      to: email,
      subject: 'Thank you for contacting Bevcon Solutions',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - Bevcon Solutions</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.7; color: #1f2937; margin: 0; padding: 0; background-color: #f9fafb; }
            .container { max-width: 600px; margin: 40px auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #1B365D 0%, #2d5280 100%); color: white; padding: 50px 30px; text-align: center; }
            .logo { margin-bottom: 25px; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 12px 0 0 0; opacity: 0.95; font-size: 15px; }
            .content { padding: 45px 35px; }
            .content p { color: #374151; font-size: 16px; margin-bottom: 18px; line-height: 1.7; }
            .highlight { color: #1B365D; font-weight: 700; }
            .orange-text { color: #F26722; font-weight: 600; }
            .info-box { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-left: 4px solid #1B365D; padding: 20px; margin: 25px 0; border-radius: 6px; }
            .info-box p { margin: 0; color: #1e40af; font-size: 15px; }
            .cta-section { text-align: center; margin: 35px 0; }
            .button { display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #F26722 0%, #ff7b3d 100%); color: white !important; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 6px rgba(242, 103, 34, 0.3); transition: all 0.3s; }
            .button:hover { box-shadow: 0 6px 12px rgba(242, 103, 34, 0.4); transform: translateY(-2px); }
            .features { display: table; width: 100%; margin: 30px 0; }
            .feature { display: table-row; }
            .feature-icon { display: table-cell; width: 40px; padding: 10px 15px 10px 0; vertical-align: top; color: #F26722; font-size: 20px; }
            .feature-text { display: table-cell; padding: 10px 0; color: #4b5563; font-size: 14px; }
            .footer { background-color: #1B365D; color: white; padding: 35px 30px; text-align: center; }
            .footer .brand { font-weight: 700; font-size: 18px; margin-bottom: 12px; letter-spacing: 1px; }
            .footer p { margin: 8px 0; font-size: 13px; opacity: 0.9; line-height: 1.6; }
            .footer a { color: #F26722; text-decoration: none; font-weight: 600; }
            .footer a:hover { text-decoration: underline; }
            .divider { height: 4px; background: linear-gradient(90deg, #F26722 0%, #1B365D 100%); }
            .signature { margin-top: 30px; padding-top: 25px; border-top: 2px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="divider"></div>
            <div class="header">
              <div class="logo" style="background-color: white; padding: 15px; border-radius: 8px; display: inline-block;">
                <img src="https://www.bevconsolutions.au/images/bevcon-solutions-logo.svg" alt="Bevcon Solutions" width="200" style="max-width: 100%; height: auto; display: block;" />
              </div>
              <h1>✓ Message Received Successfully</h1>
              <p>We'll be in touch shortly</p>
            </div>

            <div class="content">
              <p>Dear <strong>${name}</strong>,</p>

              <p>Thank you for contacting <span class="highlight">Bevcon Solutions</span> — Australia's trusted partner for industrial entrance automation, bulk material handling, and fume extraction systems.</p>

              <div class="info-box">
                <p><strong>⏱️ What happens next?</strong><br>
                Our technical team will review your inquiry and respond within <strong>24 hours</strong> during business days. For urgent matters, please call us directly at <a href="tel:+61420562184" style="color: #1B365D; font-weight: 700;">+61 420 562 184</a>.</p>
              </div>

              <p>While you wait, explore our comprehensive industrial solutions:</p>

              <div class="features">
                <div class="feature">
                  <div class="feature-icon">🚪</div>
                  <div class="feature-text"><strong>Industrial Doors & Automation</strong> — High-speed doors, dock levelers, and entrance systems</div>
                </div>
                <div class="feature">
                  <div class="feature-icon">⚙️</div>
                  <div class="feature-text"><strong>Bulk Material Handling</strong> — Conveyors, idlers, pulleys, and complete systems</div>
                </div>
                <div class="feature">
                  <div class="feature-icon">🌫️</div>
                  <div class="feature-text"><strong>Fume Extraction Systems</strong> — Advanced scrubbing and air filtration solutions</div>
                </div>
              </div>

              <div class="cta-section">
                <a href="https://www.bevconsolutions.au/industries" class="button">View Industries We Serve →</a>
              </div>

              <div class="signature">
                <p style="margin: 0; color: #6b7280; font-size: 15px;">Best regards,</p>
                <p style="margin: 8px 0 0 0;"><strong class="highlight" style="font-size: 17px;">The Bevcon Solutions Team</strong></p>
                <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Engineering Excellence for Australian Industry</p>
              </div>
            </div>

            <div class="footer">
              <p class="brand">BEVCON SOLUTIONS</p>
              <p>Industrial Access | Material Handling | Fume Extraction</p>
              <p style="margin-top: 18px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.2);">
                📧 <a href="mailto:info@bevconsolutions.au">info@bevconsolutions.au</a> | 
                📞 <a href="tel:+61420562184">+61 420 562 184</a><br>
                🌐 <a href="https://www.bevconsolutions.au">www.bevconsolutions.au</a>
              </p>
              <p style="margin-top: 15px; font-size: 12px; opacity: 0.7;">
                This is an automated confirmation email. Please do not reply to this message.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (confirmError) {
      console.error('Confirmation email error:', confirmError);
      return NextResponse.json({ error: confirmError }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Emails sent successfully',
      adminData,
      confirmData
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
