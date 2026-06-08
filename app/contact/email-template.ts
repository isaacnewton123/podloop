export interface EmailOpts {
  ticketId: string;
  date: string;
  firstName?: string;
  domain?: string;
  companyName?: string;
}

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function escapeAttr(unsafe: string): string {
  return escapeHtml(unsafe);
}

function getStyles(): string {
  return `
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
      body { margin: 0; padding: 0; background-color: #ffffff; font-family: Inter, sans-serif; color: #374151; }
      .email-wrapper { width: 100%; background-color: #ffffff; padding: 40px 16px; box-sizing: border-box; }
      .email-container { max-width: 580px; margin: 0 auto; background-color: #ffffff; }
      .header { background-color: #101010; padding: 24px 40px; text-align: center; border-radius: 16px; margin-bottom: 32px; }
      .header img { height: 64px; width: auto; }
      .hero { padding: 0 0 32px; text-align: center; }
      .hero-title { font-family: "Cal Sans", Inter, sans-serif; font-size: 36px; font-weight: 600; line-height: 1.15; letter-spacing: -1px; margin-top: 0; margin-bottom: 16px; color: #3b82f6; }
      .hero-body { font-size: 16px; line-height: 1.5; color: #374151; margin-bottom: 32px; }
      .ticket-card { background-color: #f5f5f5; border-radius: 12px; padding: 24px; border: 1px solid #e5e7eb; margin-bottom: 48px; text-align: left; }
      .ticket-row td { padding: 8px 0; font-size: 14px; }
      .ticket-label { color: #6b7280; font-weight: 500; width: 40%; }
      .ticket-value { font-weight: 600; text-align: right; color: #111111; }
      .help-section { padding: 0 0 48px; text-align: center; }
      .help-title { font-family: "Cal Sans", Inter, sans-serif; font-size: 22px; font-weight: 600; line-height: 1.3; letter-spacing: -0.3px; margin-top: 0; margin-bottom: 12px; color: #3b82f6; }
      .button-primary { background-color: #111111; color: #ffffff !important; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 20px; border-radius: 8px; display: inline-block; margin-top: 16px; }
      .footer { background-color: #101010; padding: 64px 40px; text-align: center; border-radius: 16px; margin-bottom: 32px; }
      .footer p { font-size: 14px; color: #a1a1aa; line-height: 1.5; margin: 8px 0; }
      .footer a { color: #ffffff; text-decoration: none; font-weight: 500; margin: 0 12px; }
      .preheader { display: none; max-height: 0; overflow: hidden; mso-hide: all; font-size: 0; }
    </style>
  `;
}

function getPreheader(companyName: string): string {
  const safeName = escapeHtml(companyName);
  return `<div class="preheader">Your support request to ${safeName} has been received. Ticket details inside.</div>`;
}

function getHeader(logoUrl: string, companyName: string): string {
  return `
    <div class="header">
      <img src="${escapeAttr(logoUrl)}" alt="${escapeAttr(companyName)} Logo" />
    </div>
  `;
}

function getHero(opts: EmailOpts, companyName: string): string {
  const safeName = escapeHtml(companyName);
  const safeTicket = escapeHtml(opts.ticketId);
  const safeDate = escapeHtml(opts.date);
  
  return `
    <div class="hero">
      <h1 class="hero-title">Request Received</h1>
      <p class="hero-body">
        Hello there,
        <br><br>
        Thank you for contacting the ${safeName} support team. We have successfully received your message and logged it in our system. 
        Our support staff is reviewing your inquiry and will follow up with you as soon as possible.
        <br><br>
        In the meantime, you can review your ticket details below for your records:
      </p>
      <div class="ticket-card">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr class="ticket-row">
            <td class="ticket-label">Ticket ID</td>
            <td class="ticket-value">#${safeTicket}</td>
          </tr>
          <tr class="ticket-row">
            <td class="ticket-label" style="border-top: 1px solid #e5e7eb;">Submitted</td>
            <td class="ticket-value" style="border-top: 1px solid #e5e7eb;">${safeDate}</td>
          </tr>
        </table>
      </div>
    </div>
  `;
}

function getHelpSection(siteUrl: string): string {
  const safeUrl = escapeAttr(siteUrl);
  return `
    <div class="help-section">
      <h2 class="help-title">Need immediate answers?</h2>
      <p class="hero-body" style="margin-bottom: 0;">
        While you wait for our team to respond, you might find the answer you're 
        looking for in our comprehensive Help Center. We've compiled guides, 
        tutorials, and FAQs to help you get the most out of our platform.
      </p>
      <a href="${safeUrl}/docs" class="button-primary">Visit Help Center</a>
    </div>
  `;
}

function getFooter(companyName: string, siteUrl: string): string {
  const safeName = escapeHtml(companyName);
  const safeUrl = escapeAttr(siteUrl);
  return `
    <div class="footer">
      <p style="margin-bottom: 24px;">
        <a href="${safeUrl}">Website</a>
        <a href="${safeUrl}/support">Support</a>
        <a href="https://twitter.com/podloop">X (Twitter)</a>
        <a href="https://linkedin.com/company/podloop">LinkedIn</a>
      </p>
      <p>
        You are receiving this transactional email because you contacted ${safeName} support.
      </p>
      <p>
        &copy; ${new Date().getFullYear()} ${safeName}. All rights reserved.<br>
        karawang, west java, indonesia
      </p>
    </div>
  `;
}

export function renderEmail(opts: EmailOpts) {
  const domain = opts.domain || "podloop.xyz";
  const companyName = opts.companyName || "Podloop";
  const logoUrl = `https://${domain}/logo-podloop-no-bg.png`;
  const siteUrl = `https://${domain}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank you for contacting ${escapeHtml(companyName)}</title>
    ${getStyles()}
  </head>
  <body>
    ${getPreheader(companyName)}
    <div class="email-wrapper">
      <div class="email-container">
        ${getHeader(logoUrl, companyName)}
        ${getHero(opts, companyName)}
        ${getHelpSection(siteUrl)}
        ${getFooter(companyName, siteUrl)}
      </div>
    </div>
  </body>
</html>`;
}
