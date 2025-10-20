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
      from: 'Bevcon Solutions <quotes@bevconsolutions.au>',
      to: process.env.ADMIN_EMAIL || 'admin@bevconsolutions.au',
      subject: `New Quote Request from ${companyName} - ${contactPerson}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Quote Request</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8fafc; }
            .container { max-width: 700px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
            .header { background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .content { padding: 40px 30px; }
            .section { margin-bottom: 32px; border-bottom: 1px solid #e5e7eb; padding-bottom: 24px; }
            .section:last-child { border-bottom: none; }
            .section-title { font-weight: 600; color: #059669; font-size: 18px; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px; }
            .field { margin-bottom: 16px; }
            .field-label { font-weight: 600; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { color: #4b5563; font-size: 16px; line-height: 1.5; }
            .requirements-box { background-color: #f0fdf4; border-left: 4px solid #059669; padding: 20px; margin: 20px 0; border-radius: 4px; }
            .categories { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
            .category-tag { background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500; }
            .footer { background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer p { margin: 0; color: #6b7280; font-size: 14px; }
            .highlight { color: #059669; font-weight: 600; }
            .urgent { color: #dc2626; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📋 New Quote Request</h1>
            </div>

            <div class="content">
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

            <div class="footer">
              <p>This quote request was submitted via the Bevcon Solutions website.</p>
              <p style="margin-top: 10px;">Please respond promptly to provide competitive pricing and excellent service.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Bevcon Solutions <quotes@bevconsolutions.au>',
      to: email,
      subject: `Quote Request Confirmation - ${companyName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Quote Request Confirmation</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
            .header { background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .content { padding: 40px 30px; }
            .highlight { color: #059669; font-weight: 600; }
            .footer { background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer p { margin: 0; color: #6b7280; font-size: 14px; }
            .button { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
            .timeline { background-color: #f0fdf4; border-left: 4px solid #059669; padding: 20px; margin: 20px 0; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Quote Request Received!</h1>
            </div>

            <div class="content">
              <p>Dear ${contactPerson},</p>

              <p>Thank you for your interest in <span class="highlight">Bevcon Solutions</span>! We have received your quote request for ${companyName} and appreciate you providing detailed information about your project needs.</p>

              <div class="timeline">
                <p><strong>What happens next?</strong></p>
                <ul>
                  <li>Our technical team will review your requirements within 24 hours</li>
                  <li>We'll prepare a customized quote based on your specific needs</li>
                  <li>A solutions specialist will contact you to discuss details</li>
                  <li>You'll receive a comprehensive proposal with competitive pricing</li>
                </ul>
              </div>

              <p>While you wait, feel free to explore our website to learn more about our products and capabilities:</p>

              <div style="text-align: center;">
                <a href="https://www.bevconsolutions.au/products" class="button">View Our Products</a>
              </div>

              <p>If you have any immediate questions or need to provide additional information, please don't hesitate to contact us.</p>

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

    return NextResponse.json({ success: true, message: 'Quote request submitted successfully' });

  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}
