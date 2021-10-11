const nodemailer = require('nodemailer');
import dotenv from 'dotenv';

dotenv.config();


export const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
       user: process.env.MAIL_AUTH_USER,
       pass: process.env.MAIL_AUTH_PASS
    }
});