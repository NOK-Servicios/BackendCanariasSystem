import { Module } from '@nestjs/common';
import { PaymentsupplierisController } from './paymentsupplieris.controller';
import { PaymentsupplierisService } from './paymentsupplieris.service';

@Module({
  controllers: [PaymentsupplierisController],
  providers: [PaymentsupplierisService]
})
export class PaymentsupplierisModule {}
