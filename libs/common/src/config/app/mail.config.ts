import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const mailConfigAsync = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    transport: {
      host: configService.get<string>('MAIL_HOST'),
      secure: false,
      auth: {
        user: configService.get<string>('MAIL_USERNAME'),
        pass: configService.get<string>('MAIL_PASSWORD'),
      },
    },
    defaults: {
      from: `"CopyTrade " ${configService.get<string>('MAIL_FROM')}`,
    },
    template: {
      dir: join(process.cwd(), 'public/email'),
      adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
      options: {
        strict: true,
      },
    },
  }),
};
