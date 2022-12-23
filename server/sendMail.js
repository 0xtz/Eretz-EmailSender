import nodemailer from 'nodemailer';
import { config } from './config.js';

const { user, pass } = config;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
});

export const sendMail = (email, subject, message) => {
    const mailOptions = {
        from: user,
        to: email,
        subject: subject,
        text: message
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log('\n 🟢 | Email sent successfully\n');
    });
    transporter.close();
}
