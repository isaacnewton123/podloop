export interface EmailOpts {
  ticketId: string;
  date: string;
  firstName?: string;
  domain?: string;
  companyName?: string;
}

// 4. Data Sanitization Utility
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
      body { margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #111111; }
      .email-wrapper { width: 100%; background-color: #f5f5f5; padding: 40px 16px; box-sizing: border-box; }
      .email-container { max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; }
      .header { padding: 32px 40px; text-align: center; border-bottom: 1px solid #f3f4f6; }
      .header img { height: 48px; width: auto; }
      .hero { padding: 40px 40px 32px; }
      .hero-title { font-size: 24px; font-weight: 600; margin-top: 0; margin-bottom: 16px; color: #111111; }
      .hero-body { font-size: 15px; line-height: 1.6; color: #374151; margin-bottom: 32px; }
      .ticket-card { background-color: #f9fafb; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb; }
      .ticket-row td { padding: 8px 0; font-size: 14px; }
      .ticket-label { color: #6b7280; font-weight: 500; }
      .ticket-value { font-weight: 600; text-align: right; color: #111111; }
      .footer { background-color: #fafafa; padding: 32px 40px; text-align: center; border-top: 1px solid #e5e7eb; }
      .footer p { font-size: 12px; color: #6b7280; line-height: 1.5; margin: 8px 0; }
      .footer a { color: #111111; text-decoration: none; font-weight: 500; margin: 0 4px; }
      /* Hidden preheader */
      .preheader { display: none; max-height: 0; overflow: hidden; mso-hide: all; font-size: 0; }
    </style>
  `;
}

// 2. Hidden Preheader / Preview Text
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

  // 1. Balanced Text-to-HTML Ratio
  // We include sufficient text copy here so it doesn't get flagged
  // as an image-only or low-text spam message.
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

// 3. Comprehensive Footer (Trust Signals)
function getFooter(companyName: string, siteUrl: string): string {
  const safeName = escapeHtml(companyName);
  const safeUrl = escapeAttr(siteUrl);
  return `
    <div class="footer">
      <p>
        <a href="${safeUrl}">Website URL</a> &bull; 
        <a href="${safeUrl}/support">Contact Support</a> &bull;
        <a href="https://twitter.com/podloop">X (Twitter)</a> &bull;
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

// 5. Clean Layout & DOM Structure
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
        ${getFooter(companyName, siteUrl)}
      </div>
    </div>
  </body>
</html>`;
}
