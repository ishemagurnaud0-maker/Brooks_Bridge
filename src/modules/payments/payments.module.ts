import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PaymentWebhook } from './payments.webhook'
@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService,PaymentWebhook],
})
export class PaymentsModule {}
