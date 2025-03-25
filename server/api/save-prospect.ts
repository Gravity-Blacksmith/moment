import { google } from 'googleapis'
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log('Body', body);
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
  console.log('Google sheets found', spreadsheetId);
  const range = 'Feuille 1!A';

  const { name, email } = body;
  console.log('Name and email', name, email);

  console.log(sheets.spreadsheets.values);
  const doc = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [name, email, new Date().toISOString()] }
  })
  console.log('Doc', doc);
  return { success: true }
});
