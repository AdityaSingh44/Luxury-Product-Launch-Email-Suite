import { LuxuryProduct, ClientProfile } from '../data/emailTemplateData';

export function generateLuxuryEmailHtml(
  product: LuxuryProduct,
  client: ClientProfile,
  themeMode: 'dark' | 'light' = 'dark'
): string {
  const isDark = themeMode === 'dark';
  
  // Theme palette
  const bgColor = isDark ? '#0c0c0d' : '#f8f7f5';
  const containerBg = isDark ? '#121213' : '#ffffff';
  const cardBg = isDark ? '#181716' : '#f3f1ec';
  const textColor = isDark ? '#e8e5e0' : '#1c1b1a';
  const textMuted = isDark ? '#9a948c' : '#6b665f';
  const goldAccent = '#cba163';
  const goldLight = '#dfbf88';
  const borderColor = isDark ? 'rgba(203, 161, 99, 0.22)' : 'rgba(203, 161, 99, 0.35)';
  const dividerColor = isDark ? '#262422' : '#e6e2da';

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="format-detection" content="telephone=no, address=no, email=no, date=no, url=no" />
  <meta name="color-scheme" content="${isDark ? 'dark only' : 'light only'}" />
  <meta name="supported-color-schemes" content="${isDark ? 'dark only' : 'light only'}" />
  <title>Maison Vauquelin — Private Allocation: ${product.name}</title>
  <style type="text/css">
    /* Client resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; min-width: 100%; background-color: ${bgColor}; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    
    /* Hover and responsive styles */
    .cta-button:hover { background-color: #dfbf88 !important; color: #0c0c0d !important; }
    .nav-link:hover { color: #dfbf88 !important; }
    
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; max-width: 100% !important; }
      .mobile-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .mobile-stack { display: block !important; width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; }
      .mobile-stack-gap { height: 16px !important; }
      .mobile-title { font-size: 26px !important; line-height: 32px !important; }
      .mobile-hero-h { height: 260px !important; }
      .mobile-hide { display: none !important; }
      .mobile-center { text-align: center !important; }
    }
  </style>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, a, span { font-family: Georgia, 'Times New Roman', serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: ${bgColor}; color: ${textColor};">

  <!-- Preheader preview text with invisible space padding -->
  <div style="display: none; font-size: 1px; color: ${bgColor}; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
    Private invitation for ${client.salutation} ${client.name} — Allocation ${client.allocationId}. The official unveiling of ${product.name} from Maison Vauquelin.
    &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
  </div>

  <!-- Outer background container -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="background-color: ${bgColor}; table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 28px 12px 48px 12px;">
        
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->

        <!-- Main Email Wrapper (600px max) -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" role="presentation" style="max-width: 600px; background-color: ${containerBg}; border: 1px solid ${borderColor}; border-radius: 4px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.35);">
          
          <!-- Top Monogram & Salon Header -->
          <tr>
            <td align="center" style="padding: 32px 32px 20px 32px; border-bottom: 1px solid ${dividerColor};">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                <tr>
                  <td align="center">
                    <!-- Brand Monogram Crest -->
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td align="center" style="padding-bottom: 10px;">
                          <div style="width: 38px; height: 38px; border: 1px solid ${goldAccent}; border-radius: 50%; text-align: center; line-height: 36px; font-family: 'Cinzel', Georgia, serif; font-size: 15px; color: ${goldLight}; letter-spacing: 2px;">
                            MV
                          </div>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Maison Title -->
                    <h1 style="margin: 0; font-family: 'Cinzel', Georgia, serif; font-size: 20px; font-weight: 600; letter-spacing: 5px; text-transform: uppercase; color: ${textColor}; line-height: 24px;">
                      Maison Vauquelin
                    </h1>
                    
                    <p style="margin: 6px 0 0 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; color: ${goldAccent};">
                      Paris · Place Vendôme · Fondée en 1884
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Private Allocation Ribbon -->
          <tr>
            <td style="background-color: ${cardBg}; padding: 14px 24px; border-bottom: 1px solid ${dividerColor};">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                <tr>
                  <td align="left" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: ${textMuted};">
                    Allocation Ref: <strong style="color: ${goldLight}; font-weight: 600;">${client.allocationId}</strong>
                  </td>
                  <td align="right" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: ${textMuted};">
                    Status: <span style="color: ${goldAccent}; font-weight: 600;">Reserved for ${client.name}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero Campaign Image -->
          <tr>
            <td align="center" style="position: relative; background-color: #0c0c0d; line-height: 0;">
              <a href="#view-allocation" target="_blank" style="text-decoration: none; display: block;">
                <img 
                  src="${product.heroImage}" 
                  alt="${product.name}" 
                  width="600" 
                  height="340" 
                  class="mobile-hero-h"
                  style="display: block; width: 100%; max-width: 600px; height: auto; max-height: 360px; object-fit: cover; border: 0;"
                  referrerpolicy="no-referrer"
                />
              </a>
            </td>
          </tr>

          <!-- Editorial Lead Section -->
          <tr>
            <td class="mobile-pad" style="padding: 44px 40px 32px 40px; text-align: center;">
              
              <p style="margin: 0 0 12px 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; color: ${goldAccent};">
                ${product.frenchTitle}
              </p>
              
              <h2 class="mobile-title" style="margin: 0 0 18px 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 34px; font-weight: 400; line-height: 40px; color: ${textColor}; letter-spacing: 0.5px;">
                ${product.name}
              </h2>
              
              <p style="margin: 0 auto 24px auto; max-width: 480px; font-family: 'Cormorant Garamond', Georgia, serif; font-style: italic; font-size: 18px; line-height: 28px; color: ${goldLight};">
                "${product.headline}"
              </p>

              <!-- Editorial hairline separator -->
              <table border="0" cellpadding="0" cellspacing="0" width="80" align="center" role="presentation" style="margin: 0 auto 24px auto;">
                <tr>
                  <td style="border-bottom: 1px solid ${goldAccent}; line-height: 1px; font-size: 1px;">&nbsp;</td>
                </tr>
              </table>

              <!-- Body Narrative -->
              <p style="margin: 0 auto 20px auto; max-width: 500px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; line-height: 24px; color: ${textMuted}; text-align: left;">
                Dear ${client.salutation} ${client.name},
              </p>

              <p style="margin: 0 auto 20px auto; max-width: 500px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; line-height: 24px; color: ${textMuted}; text-align: left;">
                ${product.curatorNote}
              </p>

              <p style="margin: 0 auto 28px auto; max-width: 500px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; line-height: 24px; color: ${textMuted}; text-align: left;">
                ${product.description}
              </p>

              <!-- Primary CTA Button (Bulletproof Table) -->
              <table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation" style="margin: 28px auto 12px auto;">
                <tr>
                  <td align="center" bgcolor="${goldAccent}" style="border-radius: 2px; background-color: ${goldAccent};">
                    <a 
                      href="#reserve-allocation" 
                      class="cta-button"
                      target="_blank" 
                      style="display: inline-block; padding: 16px 36px; font-family: 'Cinzel', Georgia, serif; font-size: 12px; font-weight: 600; color: #0c0c0d; text-decoration: none; letter-spacing: 3px; text-transform: uppercase; border: 1px solid ${goldAccent}; transition: all 0.2s ease;">
                      Claim Private Allocation &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 12px 0 0 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; letter-spacing: 1px; color: ${textMuted};">
                ${product.editionLimit} · Acquisition Price: <strong style="color: ${textColor};">${product.price}</strong>
              </p>
            </td>
          </tr>

          <!-- Craftsmanship Feature Showcase (2-Column Responsive Stacking) -->
          <tr>
            <td class="mobile-pad" style="padding: 12px 40px 36px 40px; background-color: ${cardBg}; border-top: 1px solid ${dividerColor}; border-bottom: 1px solid ${dividerColor};">
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="margin-bottom: 24px;">
                <tr>
                  <td align="center" style="padding-top: 24px;">
                    <p style="margin: 0 0 6px 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: ${goldAccent};">
                      Savoir-Faire
                    </p>
                    <h3 style="margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 26px; font-weight: 400; color: ${textColor};">
                      ${product.craftsmanshipHighlight.title}
                    </h3>
                  </td>
                </tr>
              </table>

              <!-- Two Column Grid (Stackable on Mobile) -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                <tr>
                  <!-- Column Left: Detail Image -->
                  <td class="mobile-stack" width="250" valign="top" style="vertical-align: top;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                      <tr>
                        <td style="line-height: 0;">
                          <img 
                            src="${product.detailImage1}" 
                            alt="Atelier Craft Detail" 
                            width="250" 
                            height="190" 
                            style="display: block; width: 100%; height: auto; border-radius: 2px; border: 1px solid ${dividerColor}; object-fit: cover;"
                            referrerpolicy="no-referrer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 8px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; color: ${goldAccent}; letter-spacing: 1.5px; text-transform: uppercase;">
                          ${product.craftsmanshipHighlight.hoursOfCraft}
                        </td>
                      </tr>
                    </table>
                  </td>

                  <!-- Spacer -->
                  <td class="mobile-stack-gap" width="20" style="width: 20px;">&nbsp;</td>

                  <!-- Column Right: Technical Specifications List -->
                  <td class="mobile-stack" width="250" valign="top" style="vertical-align: top;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                      ${product.specifications.slice(0, 4).map((spec, index) => `
                        <tr>
                          <td style="padding: ${index === 0 ? '0 0 10px 0' : '10px 0'}; border-bottom: 1px solid ${dividerColor};">
                            <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: ${textMuted}; display: block; margin-bottom: 2px;">
                              ${spec.label}
                            </span>
                            <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px; font-weight: 500; color: ${textColor};">
                              ${spec.value}
                            </span>
                          </td>
                        </tr>
                      `).join('')}
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Private Salon Preview Invitation Section -->
          <tr>
            <td class="mobile-pad" style="padding: 40px 40px 36px 40px; text-align: center;">
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 8px 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: ${goldAccent};">
                      Private Appointment
                    </p>
                    <h3 style="margin: 0 0 12px 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 26px; font-weight: 400; color: ${textColor};">
                      ${product.secondaryOffer.title}
                    </h3>
                    <p style="margin: 0 auto 20px auto; max-width: 460px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; line-height: 22px; color: ${textMuted};">
                      ${product.secondaryOffer.note}
                    </p>
                    
                    <!-- Secondary Outline Action -->
                    <table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation">
                      <tr>
                        <td align="center" style="border: 1px solid ${goldAccent}; border-radius: 2px;">
                          <a 
                            href="#book-salon" 
                            target="_blank" 
                            style="display: inline-block; padding: 12px 28px; font-family: 'Cinzel', Georgia, serif; font-size: 11px; font-weight: 600; color: ${goldLight}; text-decoration: none; letter-spacing: 2px; text-transform: uppercase;">
                            Request Salon Appointment at ${client.salonLocation.split(',')[0]}
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 16px 0 0 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; color: ${textMuted};">
                      Private Salon Concierge: <span style="color: ${goldLight};">${client.conciergeName}</span>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Luxury Privilege Strip -->
          <tr>
            <td style="background-color: ${cardBg}; padding: 24px 32px; border-top: 1px solid ${dividerColor};">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                <tr>
                  <td class="mobile-stack mobile-center" width="33%" align="center" style="padding: 8px;">
                    <p style="margin: 0; font-family: 'Cinzel', Georgia, serif; font-size: 11px; letter-spacing: 1.5px; color: ${goldLight}; text-transform: uppercase;">
                      White-Glove Delivery
                    </p>
                    <p style="margin: 4px 0 0 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; color: ${textMuted};">
                      Personal security courier worldwide
                    </p>
                  </td>
                  <td class="mobile-stack mobile-center" width="33%" align="center" style="padding: 8px;">
                    <p style="margin: 0; font-family: 'Cinzel', Georgia, serif; font-size: 11px; letter-spacing: 1.5px; color: ${goldLight}; text-transform: uppercase;">
                      Lifetime Guarantee
                    </p>
                    <p style="margin: 4px 0 0 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; color: ${textMuted};">
                      Genevan atelier heritage servicing
                    </p>
                  </td>
                  <td class="mobile-stack mobile-center" width="33%" align="center" style="padding: 8px;">
                    <p style="margin: 0; font-family: 'Cinzel', Georgia, serif; font-size: 11px; letter-spacing: 1.5px; color: ${goldLight}; text-transform: uppercase;">
                      Bespoke Monogram
                    </p>
                    <p style="margin: 4px 0 0 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; color: ${textMuted};">
                      Hand-engraved client initials
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer & Editorial Credentials -->
          <tr>
            <td class="mobile-pad" style="padding: 36px 36px 40px 36px; background-color: ${containerBg}; border-top: 1px solid ${dividerColor}; text-align: center;">
              
              <p style="margin: 0 0 16px 0; font-family: 'Cinzel', Georgia, serif; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; color: ${goldLight};">
                Maison Vauquelin · Haute Création
              </p>
              
              <p style="margin: 0 0 16px 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; line-height: 20px; color: ${textMuted};">
                Hôtel Particulier Vauquelin, 14 Place Vendôme, 75001 Paris, France<br />
                Direct Concierge Line: +33 (0)1 42 68 00 18 · concierge@vauquelin-paris.com
              </p>

              <!-- Confidentiality Notice & Preference Center -->
              <p style="margin: 0 auto 16px auto; max-width: 480px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; line-height: 18px; color: ${textMuted};">
                This confidential communication is delivered personally to ${client.name} as a registered patron of the Maison Vauquelin Private Salon. Your individual allocation code <strong>${client.allocationId}</strong> is valid until midnight CET.
              </p>

              <!-- Footer Utility Links (Clean, Unboxed) -->
              <table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation">
                <tr>
                  <td style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; color: ${textMuted};">
                    <a href="#patron-portal" class="nav-link" style="color: ${textMuted}; text-decoration: underline;">Patron Portal</a>
                    &nbsp;·&nbsp;
                    <a href="#atelier-book" class="nav-link" style="color: ${textMuted}; text-decoration: underline;">Atelier Ledger</a>
                    &nbsp;·&nbsp;
                    <a href="#preferences" class="nav-link" style="color: ${textMuted}; text-decoration: underline;">Private Preferences</a>
                    &nbsp;·&nbsp;
                    <a href="#unsubscribe" class="nav-link" style="color: ${textMuted}; text-decoration: underline;">Opt Out of Private Releases</a>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; letter-spacing: 1px; color: ${textMuted};">
                &copy; 1884–2026 Maison Vauquelin S.A. All rights reserved.
              </p>

            </td>
          </tr>

        </table>
        <!-- End Main Email Wrapper -->

        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->

      </td>
    </tr>
  </table>

</body>
</html>`;
}
