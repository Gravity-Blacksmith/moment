import { google } from 'googleapis'
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const auth = new google.auth.GoogleAuth({
    credentials: {
      projectId: config.googleProjectId,
      private_key_id: config.googlePrivateKeyId,
      private_key: config.googlePrivateKey,
      client_email: config.googleClientEmail,
      client_id: config.googleClientId,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })
  console.log('Google auth done');
  const sheets = google.sheets({ version: 'v4', auth })
  const spreadsheetId = config.googleSpreadsheetId;
  console.log('Google sheets found', config.spreadsheetId);
  const range = 'Feuille 1!A:A'

  const { name, email } = body;


  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    requestBody: { values: [[name, email, new Date().toISOString()]] }
  })

  return { success: true }
  
});
