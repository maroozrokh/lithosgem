import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EmailPattern } from './enum';
import { IAccountInfoEmail, IForgetPasswordEmail, IPaymentEmail, IVerifyEmail } from '@libs/interface/Email';
import { AProxy } from '../proxy/base/proxy-service';


@Injectable()
export class EmailClientProxy extends AProxy<ClientProxy> {
  constructor(@Inject(EmailPattern.NAME) client: ClientProxy) {
    super(client);
  }
  sendVerify(payload: IVerifyEmail) {
    return this.send(EmailPattern.SEND_EMAIL_VERIDY, payload);
  }
  sendPayment(payload: IPaymentEmail) {
    return this.send(EmailPattern.SEND_EMAIL_PAYMENT, payload);
  }
  sendForgetPassword(payload: IForgetPasswordEmail) {
    return this.send(EmailPattern.SEND_EMAIL_FORGET_PASSWORD, payload);
  }
  sendEmailTest(data: any) {
    return this.send(EmailPattern.SEND_TEST, data);
  }
  sendAccountInfo(data: IAccountInfoEmail) {
    return this.send(EmailPattern.SEND_EMAIL_ACCOUNT_INFO, data);
  }
}
