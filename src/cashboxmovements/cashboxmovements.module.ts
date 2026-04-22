import { Module } from '@nestjs/common';
import { CashboxmovementsService } from './cashboxmovements.service';
import { CashboxmovementsController } from './cashboxmovements.controller';

@Module({
  providers: [CashboxmovementsService],
  controllers: [CashboxmovementsController],
})
export class CashboxmovementsModule {}
