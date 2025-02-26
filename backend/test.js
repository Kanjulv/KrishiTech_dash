import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

client.api.accounts(process.env.TWILIO_ACCOUNT_SID)
  .fetch()
  .then(account => console.log("✅ Twilio Auth Success:", account.friendlyName))
  .catch(error => console.error("❌ Twilio Auth Failed:", error.message));
