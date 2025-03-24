import { google } from 'googleapis'
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  const secretKey = config.recaptchaSecretKey;

  // Vérification reCAPTCHA
  const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: secretKey,
      response: body.token,
    }).toString(),
  });
  const data = await recaptchaResponse.json();
  if (!data.success) {
    return { success: false, message: 'Échec de la validation reCAPTCHA' };
  }

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
})
