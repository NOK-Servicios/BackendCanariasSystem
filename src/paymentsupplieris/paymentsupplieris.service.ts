import { Injectable } from '@nestjs/common';
import { PaymentSupplierIsRepository } from './paymentsupplieris.repository';
import { createPaymentsupplierisDto } from './dto/createPaymentsupplierisDto';
import { UpdatePaymentsupplierisDto } from './dto/updatePaymentsupplierisDto';

@Injectable()
export class PaymentsupplierisService {
  constructor(
    private readonly paymentsupplierisRepository: PaymentSupplierIsRepository,
  ) {}
  findAllService(): string {
    return this.paymentsupplierisRepository.findAll();
  }
  findOneService(id: string): string {
    return this.paymentsupplierisRepository.findOne(id);
  }
  findBySupplierIdService(supplierId: string): string {
    return this.paymentsupplierisRepository.findBySupplierId(supplierId);
  }
  createService(PaymentSupplieriData: createPaymentsupplierisDto): string {
    return this.paymentsupplierisRepository.create(PaymentSupplieriData);
  }
  updateService(
    id: string,
    PaymentSupplieriData: UpdatePaymentsupplierisDto,
  ): string {
    return this.paymentsupplierisRepository.update(id, PaymentSupplieriData);
  }
}
