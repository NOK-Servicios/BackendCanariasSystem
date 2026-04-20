import { Module } from '@nestjs/common';
import { StockalertsService } from './stockalerts.service';
import { StockalertsController } from './stockalerts.controller';

@Module({
  providers: [StockalertsService],
  controllers: [StockalertsController]
})
export class StockalertsModule {}
