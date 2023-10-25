import { Transport } from '@nestjs/microservices';
export const UserMicroConfig: any = () => ({
  transport: Transport.TCP,
  options: {
    port: parseInt(process.env.CLIENT_PORT, 10),
  },
});
