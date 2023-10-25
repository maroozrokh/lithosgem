import { Transport } from '@nestjs/microservices';

export const AdminMicroConfig: any = () => ({
  transport: Transport.TCP,
  options: {
    port: parseInt(process.env.ADMIN_PORT, 10),
  },
});
