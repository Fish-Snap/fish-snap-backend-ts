import { Transporter } from 'nodemailer'
import * as nodemailer from 'nodemailer';
const transporter: Transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    auth: {
        user: process.env.FISHSNAP_EMAIL,
        pass: process.env.FISHSNAP_PASSWORD,
    }
})

interface MailOptions {
    from: string
    to: string
    subject: string
    text: string
}

async function sendVerificationEmail(
    userEmail: string,
    subject: string,
    text: string
): Promise<void> {
    const mailOptions: MailOptions = {
        from: 'FishSnap',
        to: userEmail,
        subject: subject,
        text: text,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error)
        } else {
            console.log(`Email sent: ${info.response}`)
        }
    })
}

export { sendVerificationEmail }