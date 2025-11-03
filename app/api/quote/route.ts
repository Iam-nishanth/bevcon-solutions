import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const {
      companyName,
      contactPerson,
      email,
      phone,
      industry,
      otherIndustry,
      projectTitle,
      projectLocation,
      timeline,
      budget,
      productCategories,
      specificRequirements,
      hearAboutUs,
      additionalNotes
    } = await request.json();

    // Validate required fields
    if (!companyName || !contactPerson || !email || !phone || !industry || !specificRequirements) {
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
    await resend.emails.send({
      from: 'Bevcon Solutions <rithvik@bevconsolutions.au>',
      bcc: 'rithvik@bevconsolutions.au',
      to: process.env.ADMIN_EMAIL || 'info@bevconsolutions.au',
      subject: `New Quote Request from ${companyName} - ${contactPerson}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Quote Request - Bevcon Solutions</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1f2937; margin: 0; padding: 0; background-color: #f9fafb; }
            .container { max-width: 700px; margin: 40px auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #1B365D 0%, #2d5280 100%); color: white; padding: 40px 30px; text-align: center; }
            .logo { margin-bottom: 20px; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 10px 0 0 0; opacity: 0.9; font-size: 14px; }
            .content { padding: 40px 30px; }
            .alert-box { background: linear-gradient(135deg, #F26722 0%, #ff7b3d 100%); color: white; padding: 16px 20px; border-radius: 8px; margin-bottom: 30px; text-align: center; font-weight: 600; }
            .section { margin-bottom: 32px; border-bottom: 1px solid #e5e7eb; padding-bottom: 24px; }
            .section:last-child { border-bottom: none; padding-bottom: 0; }
            .section-title { font-weight: 700; color: #1B365D; font-size: 16px; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: 700; color: #1B365D; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
            .field-value { color: #374151; font-size: 16px; line-height: 1.6; }
            .field-value a { color: #F26722; text-decoration: none; font-weight: 600; }
            .field-value a:hover { text-decoration: underline; }
            .requirements-box { background-color: #f9fafb; border-left: 4px solid #1B365D; padding: 20px; margin: 10px 0; border-radius: 6px; }
            .categories { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
            .category-tag { background-color: #dbeafe; color: #1e40af; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; }
            .footer { background-color: #1B365D; color: white; padding: 30px; text-align: center; }
            .footer p { margin: 5px 0; font-size: 13px; opacity: 0.9; }
            .footer .brand { font-weight: 700; font-size: 16px; margin-bottom: 10px; opacity: 1; }
            .divider { height: 4px; background: linear-gradient(90deg, #F26722 0%, #1B365D 100%); }
            .urgent { background-color: #fef3cd; border-left: 4px solid #F26722; padding: 15px; border-radius: 4px; margin-top: 20px; }
            .urgent strong { color: #F26722; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="divider"></div>
            <div class="header">
              <div class="logo" style="background-color: white; padding: 15px; border-radius: 8px; display: inline-block;">
                <img src="https://www.bevconsolutions.au/bevcon-solutions%20logo.png" alt="Bevcon Solutions" width="180" style="max-width: 100%; height: auto; display: block;" />
              </div>
              <h1>💼 New Quote Request</h1>
              <p>Detailed Project Inquiry</p>
            </div>

            <div class="content">
              <div class="alert-box">
                High-Priority Quote Request - Please Respond Within 24 Hours
              </div>

              <!-- Company Information -->
              <div class="section">
                <div class="section-title">🏢 Company Information</div>

                <div class="field">
                  <div class="field-label">Company Name</div>
                  <div class="field-value">${companyName}</div>
                </div>

                <div class="field">
                  <div class="field-label">Contact Person</div>
                  <div class="field-value">${contactPerson}</div>
                </div>

                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value"><a href="mailto:${email}" class="highlight">${email}</a></div>
                </div>

                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value"><a href="tel:${phone}" class="highlight">${phone}</a></div>
                </div>

                <div class="field">
                  <div class="field-label">Industry</div>
                  <div class="field-value">${industry}${otherIndustry ? ` (${otherIndustry})` : ''}</div>
                </div>
              </div>

              <!-- Project Details -->
              <div class="section">
                <div class="section-title">📋 Project Details</div>

                ${projectTitle ? `
                <div class="field">
                  <div class="field-label">Project Title</div>
                  <div class="field-value">${projectTitle}</div>
                </div>
                ` : ''}

                ${projectLocation ? `
                <div class="field">
                  <div class="field-label">Project Location</div>
                  <div class="field-value">${projectLocation}</div>
                </div>
                ` : ''}

                <div class="field">
                  <div class="field-label">Timeline</div>
                  <div class="field-value ${timeline.includes('Immediate') ? 'urgent' : ''}">${timeline}</div>
                </div>

                ${budget ? `
                <div class="field">
                  <div class="field-label">Budget Range</div>
                  <div class="field-value">${budget}</div>
                </div>
                ` : ''}
              </div>

              <!-- Product Interest -->
              <div class="section">
                <div class="section-title">📦 Product/Solution Interest</div>

                ${productCategories && productCategories.length > 0 ? `
                <div class="field">
                  <div class="field-label">Product Categories</div>
                  <div class="categories">
                    ${productCategories.map((cat: string) => `<span class="category-tag">${cat}</span>`).join('')}
                  </div>
                </div>
                ` : ''}

                <div class="field">
                  <div class="field-label">Specific Requirements</div>
                  <div class="requirements-box">
                    <div class="field-value">${specificRequirements.replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
              </div>

              <!-- Additional Information -->
              <div class="section">
                <div class="section-title">📝 Additional Information</div>

                ${hearAboutUs ? `
                <div class="field">
                  <div class="field-label">How they heard about us</div>
                  <div class="field-value">${hearAboutUs}</div>
                </div>
                ` : ''}

                ${additionalNotes ? `
                <div class="field">
                  <div class="field-label">Additional Notes</div>
                  <div class="requirements-box">
                    <div class="field-value">${additionalNotes.replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
                ` : ''}
              </div>
            </div>

              <p class="urgent" style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                <strong>⏱️ Response Time:</strong> Please respond within 24 hours to maintain excellent customer service standards and provide competitive pricing.
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

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Bevcon Solutions <info@bevconsolutions.au>',
      to: email,
      bcc: 'rithvik@bevconsolutions.au',
      subject: `Thank you for your Quote Request - ${companyName}`,
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
            .info-box ul { margin: 10px 0 0 0; padding-left: 20px; color: #1e40af; }
            .info-box li { margin: 8px 0; }
            .cta-section { text-align: center; margin: 35px 0; }
            .button { display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #F26722 0%, #ff7b3d 100%); color: white !important; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 6px rgba(242, 103, 34, 0.3); }
            .features { margin: 30px 0; }
            .feature { background-color: #f9fafb; padding: 15px; margin: 10px 0; border-radius: 6px; border-left: 3px solid #1B365D; }
            .feature strong { color: #1B365D; }
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
                <img src="https://www.bevconsolutions.au/bevcon-solutions%20logo.png" alt="Bevcon Solutions" width="200" style="max-width: 100%; height: auto; display: block;" />
              </div>
              <h1>✓ Quote Request Received!</h1>
              <p>We'll prepare your customized proposal</p>
            </div>

            <div class="content">
              <p>Dear <strong>${contactPerson}</strong>,</p>

              <p>Thank you for your interest in <span class="highlight">Bevcon Solutions</span> — Australia's trusted partner for industrial entrance automation, bulk material handling, and fume extraction systems.</p>

              <p>We have successfully received your detailed quote request for <span class="highlight">${companyName}</span> and appreciate you taking the time to provide comprehensive information about your project needs.</p>

              <div class="info-box">
                <p><strong>⏱️ What happens next?</strong></p>
                <ul>
                  <li>Our technical team will review your requirements within <strong>24 hours</strong></li>
                  <li>We'll prepare a customized quote based on your specific needs</li>
                  <li>A solutions specialist will contact you to discuss technical details</li>
                  <li>You'll receive a comprehensive proposal with competitive pricing</li>
                </ul>
              </div>

              <p>While you wait, explore our comprehensive industrial solutions:</p>

              <div class="features">
                <div class="feature">
                  <strong>🚪 Industrial Doors & Automation</strong> — High-speed doors, dock levelers, and entrance systems
                </div>
                <div class="feature">
                  <strong>⚙️ Bulk Material Handling</strong> — Conveyors, idlers, pulleys, and complete systems
                </div>
                <div class="feature">
                  <strong>🌫️ Fume Extraction Systems</strong> — Advanced scrubbing and air filtration solutions
                </div>
              </div>

              <div class="cta-section">
                <a href="https://www.bevconsolutions.au/industries" class="button">Explore Industry Solutions</a>
              </div>

              <p>If you have any immediate questions or need to provide additional information, please don't hesitate to contact us at <a href="tel:+61420562184" style="color: #F26722; font-weight: 700;">+61 420 562 184</a> or reply to this email.</p>

              <div class="signature">
                <p>Best regards,</p>
                <p><strong style="color: #1B365D; font-size: 17px;">The Bevcon Solutions Team</strong></p>
                <p style="color: #6b7280; font-size: 14px; margin-top: 8px;">Delivering Excellence in Industrial Solutions Across Australia</p>
              </div>
            </div>

            <div class="footer">
              <p class="brand">BEVCON SOLUTIONS</p>
              <p>Industrial Access | Material Handling | Fume Extraction</p>
              <p style="margin-top: 15px;">📞 <a href="tel:+61420562184">+61 420 562 184</a> | ✉️ <a href="mailto:info@bevconsolutions.au">info@bevconsolutions.au</a></p>
              <p style="margin-top: 10px;">🌐 <a href="https://www.bevconsolutions.au">www.bevconsolutions.au</a></p>
              <p style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 12px;">
                Backed by Bevcon Zentry, Spareng Incorporated & JR Fibreglass Industries
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, message: 'Quote request submitted successfully' });

  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}
