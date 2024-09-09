const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio'); // Import the Twilio library

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Twilio credentials from your Twilio dashboard
const accountSid = 'AC6caefe29936c4cd97b476a93ae9d95e7';
const authToken = '2ca7a3986779751c4dca5b34a5968343';
const client = twilio(accountSid, authToken);

// Your Twilio phone number
const twilioPhoneNumber = '+12088344122';

// Sample contacts list with phone numbers
const contacts = [
    { name: 'Father', number: '+919150603293' },
    { name: 'Mother', number: '+916369822386' },
    { name: 'Brother', number: '+91 8248686684' },
    // { name: 'Police', number: '+911' },
];

app.post('/send-sos', async (req, res) => {
    const { location, message } = req.body;
    let successCount = 0;
    let errorMessages = [];

    for (const contact of contacts) {
        try {
            // Send SMS using Twilio API
            const response = await client.messages.create({
                body: `SOS Alert: ${message}. Location: ${location}`,
                from: twilioPhoneNumber, // Your Twilio phone number
                to: contact.number
            });

            console.log(`Message sent to ${contact.name}: ${response.sid}`);
            successCount++;
        } catch (error) {
            console.error(`Failed to send message to ${contact.name}:`, error.message);
            errorMessages.push(`Failed to send message to ${contact.name}: ${error.message}`);
        }
    }

    if (successCount === contacts.length) {
        res.json({ success: true, message: 'SOS alert sent successfully to all contacts!' });
    } else {
        res.json({ success: false, message: 'Some messages failed to send.', errors: errorMessages });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
