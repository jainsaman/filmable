// import { GoogleSpreadsheet } from "google-spreadsheet";
const { GoogleSpreadsheet } = require("google-spreadsheet");

const doc = new GoogleSpreadsheet(
  "1jvxLcXpFdVE9OgsmFGuep4YtEpIQL-bWmoYoDBEa0CI"
);

export default async function addEmailToSheet(email: string) {
  try {
    await doc.useServiceAccountAuth(require("../filmable.json"));

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    const timestamp = new Date().toLocaleString();

    await sheet.addRow({ Email: email, Timestamp: timestamp });

    console.log("Email added to sheet");
  } catch (error) {
    console.log("Error adding email to sheet: ", error);
  }
}
