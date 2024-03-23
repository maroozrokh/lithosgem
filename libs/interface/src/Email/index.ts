export interface IVerifyEmail {
  name?: string;
  to: string;
  link: string;
}
export interface IPaymentEmail {
  to: string;
  link: string;
}

export interface IForgetPasswordEmail {
  name?: string;
  to: string;
  link: string;
}
export interface IAccountInfoEmail {
  name?: string;
  to: string;
  password: string;
  link: string;
}

export enum ETemplateEmail {
  VERIFY = 'verify',
  FORGET_PASSWORD = 'forget_password',
  PAYMENT = 'payment',
  ACCOUNT_INFO = 'account_info',
}
export enum ESubjectEmail {
  VERIFY = 'verify your account',
  FORGET_PASSWORD = 'forget password',
  PAYMENT = 'payment',
  ACCOUNT_INFO = 'account information',
}
export enum EQueueEmail {
  NAME = 'EQueueEmail',
  SEND = 'send email',
}
