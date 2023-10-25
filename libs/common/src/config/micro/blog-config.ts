import { Transport } from '@nestjs/microservices';

export const BlogConfig: any = () => ({
  transport: Transport.TCP,
  options: {
    port: parseInt(process.env.BLOG_PORT, 10),
  },
});
