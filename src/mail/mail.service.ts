import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendVerifyEmailDto } from './dto/send-verify-email.dto';

@Injectable()
export class MailService {
    constructor(
        private readonly mailerService: MailerService,
    ) { }

    async sendEmailVerify(dto: SendVerifyEmailDto) {
        // get data from dto
        const { username, email, verificationLink } = dto
        return await this.mailerService.sendMail({
            to: email,
            subject: 'Verifikasi Email FishSnap',
            template: './verify-email',
            context: {
                name: username,
                verificationLink: verificationLink,
                currentYear: new Date().getFullYear()
            }
        });
    }
}
