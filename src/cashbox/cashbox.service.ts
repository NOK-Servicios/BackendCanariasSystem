import { Injectable } from '@nestjs/common';
import { UpdateCashboxDto } from './dto/updateCashboxDto';

@Injectable()
export class CashboxService {
  findAll() {
    return 'This action returns all cashboxes';
  }

  findOne(id: string) {
    return `This action returns a #${id} cashbox`;
  }

  update(id: string, cashbox: UpdateCashboxDto) {
    return `This action updates a #${id} cashbox`;
  }
}
