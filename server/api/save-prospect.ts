import { google } from 'googleapis'
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  const apiKey = config.apiKey;
  const siteKey = config.public.recaptchaSiteKey;

  // Vérification reCAPTCHA
  try {
    const recaptchaResponse = await fetch(`https://recaptchaenterprise.googleapis.com/v1/projects/moment-454108/assessments?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        event: {
          token: body.token,
          siteKey: siteKey,
          expectedAction: 'USER_ACTION',
        },
      }),
    });

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: config.googleClientEmail,
      private_key: config.googlePrivateKey
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const sheets = google.sheets({ version: 'v4', auth })
  const spreadsheetId = config.googleSpreadsheetId
  const range = 'Feuille 1!A:A'

  const { name, email } = body;


  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    requestBody: { values: [[name, email, new Date().toISOString()]] }
  })

  return { success: true }
  
} catch (error) {
  console.error('error verifying captcha', error);
  return { success: false, message: 'Échec de la validation reCAPTCHA' };
}
})
