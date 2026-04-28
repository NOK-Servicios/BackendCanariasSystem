import { Controller, Get, Post } from '@nestjs/common';
import { CashboxService } from './cashbox.service';
import { AddCashboxDto} from './dto/updateCashboxDto';

@Controller('cashbox')
export class CashboxController {
  constructor(private readonly cashboxService: CashboxService) {}
  @Get()
  allCashbox() {
    return this.cashboxService.findAllCashbox();
  }

  @Get(':id')
  oneCashbox(id: string) {
    return this.cashboxService.findOneCashbox(id);
  }

  @Post(':id')
  addCashbox(cashbox: AddCashboxDto) {
    return this.cashboxService.addCashbox(cashbox);
  }
}
