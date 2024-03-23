import { AdminMicroConfig,  setupMicro } from '@res/common';
import { AdminMicroModule } from './admin-micro.module';

async function bootstrap() {
  await setupMicro(AdminMicroModule, AdminMicroConfig(), 'Admin');
}
bootstrap();